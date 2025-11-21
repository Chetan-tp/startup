import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
  Avatar // Importing Avatar for user images
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SecurityIcon from '@mui/icons-material/Security';
import jsPDF from 'jspdf';

// Steps for agreement creation
const steps = ['Select Type', 'Property Details', 'Tenant Details', 'Terms & Conditions', 'Review & Generate'];

// Tab Panel component for the tabbed interface
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`rent-agreement-tabpanel-${index}`}
      aria-labelledby={`rent-agreement-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function RentAgreementPage() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [agreementType, setAgreementType] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [rentDuration, setRentDuration] = useState('');
  const [monthlyRent, setMonthlyRent] = useState('15000');
  const [securityDeposit, setSecurityDeposit] = useState('30000');
  const [lockInPeriod, setLockInPeriod] = useState('3');

  const agreementTypeTextMap = {
    'residential': 'Residential Rent Agreement',
    'commercial': 'Commercial Lease Agreement',
    'pg': 'PG/Hostel Agreement',
    'flatmate': 'Flatmate Agreement'
  };

  const propertyTypeTextMap = {
      'apartment': 'Apartment/Flat',
      'house': 'Independent House',
      'room': 'Single Room',
      'pg': 'PG/Hostel',
      'commercial': 'Commercial Space'
  };

  const durationTextMap = {
      '11months': '11 Months',
      '6months': '6 Months',
      '1year': '1 Year',
      '2years': '2 Years',
      '3years': '3 Years',
      'custom': 'Custom Period'
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Rent Agreement', 10, 20);
    doc.setFontSize(12);
    doc.text(`Agreement Type: ${agreementTypeTextMap[agreementType] || 'N/A' }`, 10, 40);
    doc.text(`Property Type: ${propertyTypeTextMap[propertyType] || 'N/A'}`, 10, 50);
    doc.text(`Duration: ${durationTextMap[rentDuration] || 'N/A'}`, 10, 60);
    doc.text(`Monthly Rent: ₹${monthlyRent || 'N/A'}`, 10, 70);
    doc.text(`Security Deposit: ₹${securityDeposit || 'N/A'}`, 10, 80);
    // Add more fields as needed
    doc.save('rent-agreement.pdf');
  };
  const legalResources = [
  {  
      id: 1,
      title: 'Tenant Rights in India',
      description: 'A comprehensive guide to understanding your rights as a tenant in India.',
      type: 'Guide',
      downloadLink: '#',
    },
    {
      id: 2,
      title: 'Model Rent Control Act',
      description: 'Official document explaining rent control regulations across different states.',
      type: 'Legal Document',
      downloadLink: '#',
    },
    {
      id: 3,
      title: 'Security Deposit Rules',
      description: 'Learn about the legal limits and regulations regarding security deposits.',
      type: 'Guide',
      downloadLink: '#',
    },
    {
      id: 4,
      title: 'Eviction Process Explained',
      description: 'Step-by-step explanation of the legal eviction process and tenant protections.',
      type: 'Guide',
      downloadLink: '#',
    },
    {
      id: 5,
      title: 'Maintenance Responsibilities',
      description: 'Clarification on landlord vs tenant responsibilities for property maintenance.',
      type: 'Guide',
      downloadLink: '#',
    },
    {
      id: 6,
      title: 'Rent Agreement Stamp Duty by State',
      description: 'State-wise breakdown of stamp duty requirements for rent agreements.',
      type: 'Legal Document',
      downloadLink: '#',
    },
  ];
  
  // Sample FAQs
  const faqs = [
    {
      question: 'Is a digital rent agreement legally valid?',
      answer: 'Yes, digital rent agreements created through our platform are legally valid. They are compliant with the Information Technology Act, 2000, and can be digitally signed using Aadhaar-based e-Sign. However, for certain states that require physical stamp paper, we provide the option to print the agreement for physical signing and stamping.',
    },
    {
      question: 'What documents are required to create a rent agreement?',
      answer: 'To create a rent agreement, you will need: 1) Identity proof (Aadhar Card, PAN Card, or Passport) of both tenant and landlord, 2) Address proof of the rental property, 3) Passport-sized photographs of both parties, 4) Details of the rent, security deposit, and lease duration. Our system will guide you through uploading these documents during the agreement creation process.',
    },
    {
      question: 'How much stamp duty do I need to pay?',
      answer: 'Stamp duty varies by state in India. For example, in Maharashtra it\'s 0.25% of the annual rent + deposit, in Karnataka it\'s 1% of the annual rent, and in Delhi it\'s a flat fee based on the monthly rent amount. Our platform automatically calculates the applicable stamp duty based on your property location and agreement details.',
    },
    {
      question: 'Can I customize the terms in the rent agreement?',
      answer: 'Yes, our platform allows you to customize various terms in the agreement including maintenance responsibilities, visitor policies, pet policies, and more. However, certain standard clauses that protect both parties\' legal rights cannot be removed to ensure the agreement remains legally sound.',
    },
    {
      question: 'How long does it take to create and finalize a rent agreement?',
      answer: 'The entire process of creating, signing, and finalizing a rent agreement can be completed within 24-48 hours. The actual agreement creation takes only about 15-20 minutes if you have all the required documents ready. Digital signing can be done instantly, while physical stamping (if required) may take 1-2 days depending on your location.',
    },
    {
      question: 'Can I renew my rent agreement through this platform?',
      answer: 'Yes, you can easily renew your existing rent agreement through our platform. We store your previous agreement details securely, so you only need to update any changed terms (like rent amount or duration) and proceed with the signing and stamping process again. We also send timely reminders before your current agreement expires.',
    },
  ];
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setAgreementType('');
    setPropertyType('');
    setRentDuration('');
    setMonthlyRent('15000');
    setSecurityDeposit('30000');
    setLockInPeriod('3');
  };
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Rent Agreement & Legal Help
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Create legally valid rent agreements, access legal resources, and get expert assistance
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="rent agreement tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab icon={<DescriptionIcon />} label="Create Agreement" />
          <Tab icon={<ArticleIcon />} label="Legal Resources" />
          <Tab icon={<GavelIcon />} label="Legal FAQs" />
          <Tab icon={<ContactSupportIcon />} label="Legal Consultation" />
        </Tabs>
      </Box>
      
      {/* Create Agreement Tab */}
      <TabPanel value={tabValue} index={0}>
        <Paper sx={{ p: 3, mb: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" gutterBottom>
              Create Your Rent Agreement
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Follow the steps below to create a customized, legally valid rent agreement
            </Typography>
          </Box>
          
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          {activeStep === steps.length ? (
            <Box sx={{ textAlign: 'center', py: 3 }}>
              <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Agreement Successfully Generated!
              </Typography>
              <Typography variant="body1" paragraph>
                Your rent agreement has been created and is ready for signing and stamping.
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
                <Button variant="contained" startIcon={<DownloadIcon />} onClick={handleDownloadPDF}>
                  Download PDF
                </Button>  
                <Button variant="outlined" startIcon={<ShareIcon />}>
                  Share with Tenant/Landlord
                </Button>
                <Button variant="outlined" startIcon={<LocalPrintshopIcon />}>
                  Print
                </Button>
              </Stack>
              <Divider sx={{ my: 3 }} />
              <Typography variant="h6" gutterBottom>
                Next Steps
              </Typography>
              <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={12} md={4}>
                  <Paper sx={{ p: 2, height: '100%', textAlign: 'left' }} variant="outlined">
                    <Typography variant="subtitle1" gutterBottom>
                      1. Digital Signing
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Share the agreement with all parties for digital signing using Aadhaar-based e-Sign.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper sx={{ p: 2, height: '100%', textAlign: 'left' }} variant="outlined">
                    <Typography variant="subtitle1" gutterBottom>
                      2. Stamp Duty Payment
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Pay the applicable stamp duty online through our secure payment gateway.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper sx={{ p: 2, height: '100%', textAlign: 'left' }} variant="outlined">
                    <Typography variant="subtitle1" gutterBottom>
                      3. Registration (Optional)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      For long-term agreements, consider registering with the Sub-Registrar's office.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              <Button 
                onClick={handleReset} 
                variant="text" 
                sx={{ mt: 3 }}
              >
                Create Another Agreement
              </Button>
            </Box>
          ) : (
            <Box>
              {/* Step 1: Select Agreement Type */}
              {activeStep === 0 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Select Agreement Type
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Agreement Type</InputLabel>
                        <Select
                          value={agreementType}
                          label="Agreement Type"
                          onChange={(e) => setAgreementType(e.target.value)}
                        >
                          <MenuItem value="residential">Residential Rent Agreement</MenuItem>
                          <MenuItem value="commercial">Commercial Lease Agreement</MenuItem>
                          <MenuItem value="pg">PG/Hostel Agreement</MenuItem>
                          <MenuItem value="flatmate">Flatmate Agreement</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Property Type</InputLabel>
                        <Select
                          value={propertyType}
                          label="Property Type"
                          onChange={(e) => setPropertyType(e.target.value)}
                        >
                          <MenuItem value="apartment">Apartment/Flat</MenuItem>
                          <MenuItem value="house">Independent House</MenuItem>
                          <MenuItem value="room">Single Room</MenuItem>
                          <MenuItem value="pg">PG/Hostel</MenuItem>
                          <MenuItem value="commercial">Commercial Space</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Rent Duration</InputLabel>
                        <Select
                          value={rentDuration}
                          label="Rent Duration"
                          onChange={(e) => setRentDuration(e.target.value)}
                        >
                          <MenuItem value="11months">11 Months (Standard)</MenuItem>
                          <MenuItem value="6months">6 Months</MenuItem>
                          <MenuItem value="1year">1 Year</MenuItem>
                          <MenuItem value="2years">2 Years</MenuItem>
                          <MenuItem value="3years">3 Years</MenuItem>
                          <MenuItem value="custom">Custom Period</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Paper sx={{ p: 2, bgcolor: theme.palette.grey[50], height: '100%' }}>
                        <Typography variant="subtitle1" gutterBottom>
                          Agreement Information
                        </Typography>
                        <Typography variant="body2" paragraph>
                          <strong>Residential Rent Agreement:</strong> Standard agreement for renting residential properties like apartments, houses, or rooms.
                        </Typography>
                        <Typography variant="body2" paragraph>
                          <strong>Commercial Lease Agreement:</strong> For renting office spaces, shops, or other commercial properties.
                        </Typography>
                        <Typography variant="body2" paragraph>
                          <strong>PG/Hostel Agreement:</strong> Specialized agreement for paying guest accommodations with shared facilities.
                        </Typography>
                        <Typography variant="body2" paragraph>
                          <strong>Flatmate Agreement:</strong> For sharing an apartment with roommates, defining responsibilities and cost-sharing.
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                          <SecurityIcon color="primary" sx={{ mr: 1 }} />
                          <Typography variant="caption" color="text.secondary">
                            All agreements are legally valid and compliant with local regulations
                          </Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              )}
              
              {/* Step 2: Property Details */}
              {activeStep === 1 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Property Details
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Property Address"
                        variant="outlined"
                        multiline
                        rows={3}
                        sx={{ mb: 3 }}
                      />
                      
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="City"
                            variant="outlined"
                            sx={{ mb: 3 }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="PIN Code"
                            variant="outlined"
                            sx={{ mb: 3 }}
                          />
                        </Grid>
                      </Grid>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Monthly Rent (₹)"
                            variant="outlined"
                            type="number"
                            value={monthlyRent}
                            onChange={(e) => setMonthlyRent(e.target.value)}
                            sx={{ mb: 3 }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Security Deposit (₹)"
                            variant="outlined"
                            type="number"
                            value={securityDeposit}
                            onChange={(e) => setSecurityDeposit(e.target.value)}
                            sx={{ mb: 3 }}
                          />
                        </Grid>
                      </Grid>
                      
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Furnished Status</InputLabel>
                        <Select
                          label="Furnished Status"
                          defaultValue=""
                        >
                          <MenuItem value="fully">Fully Furnished</MenuItem>
                          <MenuItem value="semi">Semi Furnished</MenuItem>
                          <MenuItem value="unfurnished">Unfurnished</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Property Inventory & Condition
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        List all items and their condition included with the property
                      </Typography>
                      
                      <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                        <FormGroup>
                          <Typography variant="subtitle2" gutterBottom>
                            Furniture Items
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Bed" />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Wardrobe" />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Study Table" />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Chair" />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Sofa" />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Dining Table" />
                            </Grid>
                          </Grid>
                        </FormGroup>
                      </Paper>
                      
                      <Paper variant="outlined" sx={{ p: 2 }}>
                        <FormGroup>
                          <Typography variant="subtitle2" gutterBottom>
                            Appliances
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Refrigerator" />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Washing Machine" />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Air Conditioner" />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Television" />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Microwave" />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControlLabel control={<Checkbox />} label="Water Purifier" />
                            </Grid>
                          </Grid>
                        </FormGroup>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              )}
              
              {/* Step 3: Tenant Details */}
              {activeStep === 2 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Tenant Details
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Primary Tenant Information
                      </Typography>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Full Name"
                            variant="outlined"
                            sx={{ mb: 3 }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Phone Number"
                            variant="outlined"
                            sx={{ mb: 3 }}
                          />
                        </Grid>
                      </Grid>
                      
                      <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        sx={{ mb: 3 }}
                      />
                      
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Aadhar Number"
                            variant="outlined"
                            sx={{ mb: 3 }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="PAN Number"
                            variant="outlined"
                            sx={{ mb: 3 }}
                          />
                        </Grid>
                      </Grid>
                      
                      <TextField
                        fullWidth
                        label="Permanent Address"
                        variant="outlined"
                        multiline
                        rows={3}
                        sx={{ mb: 3 }}
                      />
                      
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Occupation</InputLabel>
                        <Select
                          label="Occupation"
                          defaultValue=""
                        >
                          <MenuItem value="student">Student</MenuItem>
                          <MenuItem value="employed">Employed</MenuItem>
                          <MenuItem value="self-employed">Self-Employed</MenuItem>
                          <MenuItem value="business">Business Owner</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Additional Occupants
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        List all additional people who will be staying in the property
                      </Typography>
                      
                      <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Full Name"
                              variant="outlined"
                              size="small"
                              sx={{ mb: 2 }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Relation to Tenant"
                              variant="outlined"
                              size="small"
                              sx={{ mb: 2 }}
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Age"
                              variant="outlined"
                              type="number"
                              size="small"
                              sx={{ mb: 2 }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="ID Proof Number"
                              variant="outlined"
                              size="small"
                              sx={{ mb: 2 }}
                            />
                          </Grid>
                        </Grid>
                      </Paper>
                      
                      <Button variant="outlined" fullWidth sx={{ mb: 3 }}>
                        + Add Another Occupant
                      </Button>
                      
                      <Typography variant="subtitle1" gutterBottom>
                        Document Upload
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Upload required documents for verification
                      </Typography>
                      
                      <Paper variant="outlined" sx={{ p: 2 }}>
                        <FormGroup>
                          <FormLabel component="legend" sx={{ mb: 1 }}>
                            Required Documents
                          </FormLabel>
                          <FormControlLabel 
                            control={<Checkbox />} 
                            label="ID Proof (Aadhar/PAN/Passport)" 
                          />
                          <FormControlLabel 
                            control={<Checkbox />} 
                            label="Address Proof" 
                          />
                          <FormControlLabel 
                            control={<Checkbox />} 
                            label="Passport Size Photograph" 
                          />
                          <FormControlLabel 
                            control={<Checkbox />} 
                            label="Income Proof (Optional)" 
                          />
                        </FormGroup>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              )}
              
              {/* Step 4: Terms & Conditions */}
              {activeStep === 3 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Terms & Conditions
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Rent & Payment Terms
                      </Typography>
                      
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Rent Payment Date</InputLabel>
                        <Select
                          label="Rent Payment Date"
                          defaultValue="5"
                        >
                          <MenuItem value="1">1st of every month</MenuItem>
                          <MenuItem value="5">5th of every month</MenuItem>
                          <MenuItem value="10">10th of every month</MenuItem>
                          <MenuItem value="15">15th of every month</MenuItem>
                          <MenuItem value="custom">Custom date</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Payment Method</InputLabel>
                        <Select
                          label="Payment Method"
                          defaultValue="online"
                        >
                          <MenuItem value="online">Online Transfer</MenuItem>
                          <MenuItem value="cash">Cash</MenuItem>
                          <MenuItem value="cheque">Cheque</MenuItem>
                          <MenuItem value="multiple">Multiple Methods</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Late Payment Penalty</InputLabel>
                        <Select
                          label="Late Payment Penalty"
                          defaultValue="percentage"
                        >
                          <MenuItem value="none">No Penalty</MenuItem>
                          <MenuItem value="fixed">Fixed Amount</MenuItem>
                          <MenuItem value="percentage">Percentage of Rent</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <Typography variant="subtitle1" gutterBottom>
                        Lock-in Period & Notice Period
                      </Typography>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Lock-in Period (Months)"
                            variant="outlined"
                            type="number"
                            value={lockInPeriod}
                            onChange={(e) => setLockInPeriod(e.target.value)}
                            sx={{ mb: 3 }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Notice Period (Months)"
                            variant="outlined"
                            type="number"
                            defaultValue="1"
                            sx={{ mb: 3 }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Additional Terms
                      </Typography>
                      
                      <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                        <FormGroup>
                          <Typography variant="subtitle2" gutterBottom>
                            Maintenance Responsibilities
                          </Typography>
                          <FormControlLabel 
                            control={<Checkbox defaultChecked />} 
                            label="Tenant responsible for minor repairs (up to ₹1000)" 
                          />
                          <FormControlLabel 
                            control={<Checkbox defaultChecked />} 
                            label="Landlord responsible for major repairs" 
                          />
                          <FormControlLabel 
                            control={<Checkbox />} 
                            label="Tenant responsible for regular painting" 
                          />
                        </FormGroup>
                      </Paper>
                      
                      <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                        <FormGroup>
                          <Typography variant="subtitle2" gutterBottom>
                            Usage Restrictions
                          </Typography>
                          <FormControlLabel 
                            control={<Checkbox defaultChecked />} 
                            label="No commercial activities allowed" 
                          />
                          <FormControlLabel 
                            control={<Checkbox />} 
                            label="No pets allowed" 
                          />
                          <FormControlLabel 
                            control={<Checkbox />} 
                            label="No alterations without permission" 
                          />
                          <FormControlLabel 
                            control={<Checkbox />} 
                            label="No subletting allowed" 
                          />
                        </FormGroup>
                      </Paper>
                      
                      <Paper variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Custom Clauses
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          Add any additional terms or conditions
                        </Typography>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          placeholder="Enter any additional terms or special conditions here..."
                          variant="outlined"
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              )}
              
              {/* Step 5: Review & Generate */}
              {activeStep === 4 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Review & Generate Agreement
                  </Typography>
                  
                  <Paper sx={{ p: 2, mb: 3 }} variant="outlined">
                    <Typography variant="subtitle1" gutterBottom>
                      Agreement Summary
                    </Typography>
                    
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="body2" color="text.secondary">
                          Agreement Type
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          {agreementTypeTextMap[agreementType] || 'Residential Rent Agreement'}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="body2" color="text.secondary">
                          Property Type
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          {propertyTypeTextMap[propertyType] || 'Apartment/Flat'}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="body2" color="text.secondary">
                          Duration
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          {durationTextMap[rentDuration] || '11 Months'}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="body2" color="text.secondary">
                          Monthly Rent
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          ₹{monthlyRent || '15,000'}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="body2" color="text.secondary">
                          Security Deposit
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          ₹{securityDeposit || '30,000'}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="body2" color="text.secondary">
                          Lock-in Period
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          {lockInPeriod || '3'} Months
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                  
                  <Paper sx={{ p: 2, mb: 3 }} variant="outlined">
                    <Typography variant="subtitle1" gutterBottom>
                      Fees & Charges
                    </Typography>
                    
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="body2" color="text.secondary">
                          Agreement Creation Fee
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          ₹499
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="body2" color="text.secondary">
                          Stamp Duty (Maharashtra)
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          ₹1,125
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="body2" color="text.secondary">
                          Total Amount
                        </Typography>
                        <Typography variant="body1" fontWeight="bold" gutterBottom>
                          ₹1,624
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                  
                  <FormControlLabel 
                    control={<Checkbox required />} 
                    label="I confirm that all the information provided is accurate and complete." 
                    sx={{ mb: 2 }}
                  />
                  
                  <FormControlLabel 
                    control={<Checkbox required />} 
                    label="I agree to the terms and conditions of the platform." 
                    sx={{ mb: 3 }}
                  />
                </Box>
              )}
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Generate Agreement' : 'Next'}
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </TabPanel>
      
      {/* Legal Resources Tab */}
      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              Legal Resources
            </Typography>
            <Typography variant="body1" paragraph>
              Access guides, templates, and legal documents to help you understand your rights and responsibilities
            </Typography>
            
            <Grid container spacing={3}>
              {legalResources.map((resource) => (
                <Grid item xs={12} sm={6} key={resource.id}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="caption" color="text.secondary">
                        {resource.type}
                      </Typography>
                      <Typography variant="h6" component="h2" gutterBottom>
                        {resource.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {resource.description}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        size="small"
                        startIcon={<DownloadIcon />}
                        href={resource.downloadLink}
                      >
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                State-Specific Rent Laws
              </Typography>
              <Typography variant="body2" paragraph>
                Rent control and tenancy laws vary by state in India. Select your state to view specific regulations:
              </Typography>
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Select State</InputLabel>
                <Select
                  label="Select State"
                  defaultValue=""
                >
                  <MenuItem value="">Select a state</MenuItem>
                  <MenuItem value="maharashtra">Maharashtra</MenuItem>
                  <MenuItem value="karnataka">Karnataka</MenuItem>
                  <MenuItem value="delhi">Delhi</MenuItem>
                  <MenuItem value="tamilnadu">Tamil Nadu</MenuItem>
                  <MenuItem value="telangana">Telangana</MenuItem>
                  <MenuItem value="westbengal">West Bengal</MenuItem>
                  <MenuItem value="gujarat">Gujarat</MenuItem>
                  <MenuItem value="uttarpradesh">Uttar Pradesh</MenuItem>
                </Select>
              </FormControl>
              
              <Button variant="contained" fullWidth>
                View State Laws
              </Button>
            </Paper>
            
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Legal Assistance
              </Typography>
              <Typography variant="body2" paragraph>
                Need personalized legal help? Connect with our legal experts for guidance on your specific situation.
              </Typography>
              
              <Button 
                variant="contained" 
                color="secondary" 
                fullWidth
                onClick={() => setTabValue(3)}
              >
                Get Legal Consultation
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Legal FAQs Tab */}
      <TabPanel value={tabValue} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              Legal FAQs
            </Typography>
            <Typography variant="body1" paragraph>
              Common questions and answers about rent agreements and tenant-landlord laws in India
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              {faqs.map((faq, index) => (
                <Paper key={index} sx={{ p: 3, mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {faq.question}
                  </Typography>
                  <Typography variant="body2">
                    {faq.answer}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Can't Find Your Answer?
              </Typography>
              <Typography variant="body2" paragraph>
                If you have a specific legal question that's not covered in our FAQs, you can ask our community or get expert advice.
              </Typography>
              
              <Stack spacing={2}>
                <Button 
                  variant="outlined" 
                  fullWidth
                  onClick={() => setTabValue(0)}
                >
                  Ask the Community
                </Button>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => setTabValue(3)}
                >
                  Consult a Legal Expert
                </Button>
              </Stack>
            </Paper>
            
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Legal Disclaimer
              </Typography>
              <Typography variant="body2" paragraph>
                The information provided in these FAQs is for general informational purposes only and does not constitute legal advice. Laws and regulations may vary by state and can change over time.
              </Typography>
              <Typography variant="body2">
                For specific legal advice tailored to your situation, please consult with a qualified legal professional through our consultation service.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Legal Consultation Tab */}
      <TabPanel value={tabValue} index={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Typography variant="h5" gutterBottom>
              Legal Consultation
            </Typography>
            <Typography variant="body1" paragraph>
              Get personalized legal advice from experienced property law experts
            </Typography>
            
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Request a Consultation
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
              
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                type="email"
                required
                sx={{ mb: 2 }}
              />
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Consultation Type</InputLabel>
                <Select
                  label="Consultation Type"
                  defaultValue=""
                  required
                >
                  <MenuItem value="">Select type</MenuItem>
                  <MenuItem value="agreement">Rent Agreement Review</MenuItem>
                  <MenuItem value="dispute">Landlord-Tenant Dispute</MenuItem>
                  <MenuItem value="eviction">Eviction Issues</MenuItem>
                  <MenuItem value="deposit">Security Deposit Concerns</MenuItem>
                  <MenuItem value="maintenance">Maintenance & Repairs</MenuItem>
                  <MenuItem value="other">Other Legal Issue</MenuItem>
                </Select>
              </FormControl>
              
              <TextField
                fullWidth
                label="Describe Your Legal Issue"
                variant="outlined"
                multiline
                rows={4}
                required
                sx={{ mb: 2 }}
                placeholder="Please provide details about your legal concern or question..."
              />
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Preferred Consultation Method</InputLabel>
                <Select
                  label="Preferred Consultation Method"
                  defaultValue="video"
                  required
                >
                  <MenuItem value="video">Video Call</MenuItem>
                  <MenuItem value="phone">Phone Call</MenuItem>
                  <MenuItem value="chat">Live Chat</MenuItem>
                  <MenuItem value="email">Email Consultation</MenuItem>
                </Select>
              </FormControl>
              
              <Button variant="contained" fullWidth>
                Request Consultation
              </Button>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Our Legal Experts
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  src="https://via.placeholder.com/60"
                  sx={{ width: 60, height: 60, mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1">
                    Adv. Priya Sharma
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Property Law Specialist • 8+ years experience
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  src="https://via.placeholder.com/60"
                  sx={{ width: 60, height: 60, mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1">
                    Adv. Rajesh Mehta
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tenancy Law Expert • 12+ years experience
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src="https://via.placeholder.com/60"
                  sx={{ width: 60, height: 60, mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1">
                    Adv. Ananya Desai
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dispute Resolution Specialist • 10+ years experience
                  </Typography>
                </Box>
              </Box>
            </Paper>
            
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Consultation Packages
              </Typography>
              
              <Box sx={{ mb: 2, p: 2, border: `1px solid ${theme.palette.primary.main}`, borderRadius: 1 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Basic Consultation
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom>
                  ₹999
                </Typography>
                <Typography variant="body2" paragraph>
                  30-minute consultation with a legal expert to discuss your issue and get basic guidance.
                </Typography>
                <Button variant="outlined" fullWidth>
                  Select
                </Button>
              </Box>
              
              <Box sx={{ mb: 2, p: 2, bgcolor: theme.palette.primary.light, borderRadius: 1 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Standard Consultation
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom>
                  ₹1,999
                </Typography>
                <Typography variant="body2" paragraph>
                  60-minute detailed consultation with document review and written recommendations.
                </Typography>
                <Button variant="contained" fullWidth>
                  Select
                </Button>
              </Box>
              
              <Box sx={{ p: 2, border: `1px solid ${theme.palette.grey[300]}`, borderRadius: 1 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Premium Package
                </Typography>
                <Typography variant="h5" gutterBottom>
                  ₹3,999
                </Typography>
                <Typography variant="body2" paragraph>
                  Comprehensive legal assistance including multiple consultations, document drafting, and negotiation support.
                </Typography>
                <Button variant="outlined" fullWidth>
                  Select
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
}

export default RentAgreementPage;