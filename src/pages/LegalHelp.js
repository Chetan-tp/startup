import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  AccordionDetails,
  Avatar,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import EmailIcon from '@mui/icons-material/Email';

// Tab Panel component for the tabbed interface
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`legal-tabpanel-${index}`}
      aria-labelledby={`legal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function LegalHelp() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [agreementType, setAgreementType] = useState('standard');
  const [rentDuration, setRentDuration] = useState('11');
  const [securityDeposit, setSecurityDeposit] = useState('2');
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  // Sample FAQs data
  const faqs = [
    {
      question: 'What is a rent agreement and why do I need one?',
      answer: 'A rent agreement is a legal document that outlines the terms and conditions under which a property is leased. It protects both the tenant and the landlord by clearly defining the rental terms, duration, payment details, and other conditions. As a student, having a proper rent agreement ensures you have legal protection against unfair practices and provides clarity on your rights and responsibilities.',
    },
    {
      question: 'What should I check before signing a rent agreement?',
      answer: 'Before signing a rent agreement, you should check: the correct names and details of all parties involved, the exact rental amount and payment terms, security deposit amount and refund conditions, duration of tenancy, maintenance responsibilities, visitor policies, termination clauses, and any specific rules of the property. Also verify if the agreement needs to be registered with local authorities.',
    },
    {
      question: 'Can I negotiate terms in the rent agreement?',
      answer: 'Yes, rent agreements can be negotiated before signing. Common negotiable points include: rental amount, security deposit, maintenance responsibilities, visitor policies, and termination notice period. It\'s advisable to discuss and agree on all terms before finalizing the agreement to avoid future disputes.',
    },
    {
      question: 'What is the difference between a lease and a rental agreement?',
      answer: 'The main difference is the duration. A lease typically covers a longer fixed period (usually 11 months or more in India) with consistent terms throughout. A rental agreement is more flexible, often month-to-month, and can be modified with proper notice. For students, an 11-month lease is common as it avoids certain registration requirements while providing reasonable stability.',
    },
    {
      question: 'Is it mandatory to register my rent agreement?',
      answer: 'In India, registration of rent agreements is mandatory for leases of 12 months or more under the Registration Act. However, most student accommodations use 11-month agreements to avoid this requirement. Even for 11-month agreements, some states have their own rules, so it\'s advisable to check local regulations. Registered agreements provide stronger legal standing in case of disputes.',
    },
    {
      question: 'What are my rights as a student tenant?',
      answer: 'As a student tenant, you have the right to: a habitable living space with essential amenities, privacy and peaceful enjoyment of the property, proper notice before landlord entry, clear terms for security deposit refund, protection against unfair eviction, and receipt of rent payments. If these rights are violated, you can seek legal remedies through consumer courts or rental authorities.',
    },
  ];
  
  // Sample legal resources data
  const legalResources = [
    {
      title: 'Student Tenant Rights Guide',
      description: 'A comprehensive guide to understanding your rights as a student tenant in India',
      type: 'PDF Guide',
      icon: DescriptionIcon,
    },
    {
      title: 'Rent Agreement Template - Student-Friendly',
      description: 'Pre-vetted template with fair terms for student accommodations',
      type: 'Document Template',
      icon: ArticleIcon,
    },
    {
      title: 'Security Deposit Rules by State',
      description: 'State-wise regulations regarding security deposits and refunds',
      type: 'Information Sheet',
      icon: SecurityIcon,
    },
    {
      title: 'Dispute Resolution Procedures',
      description: 'Step-by-step guide to resolving common landlord-tenant disputes',
      type: 'Guide',
      icon: GavelIcon,
    },
    {
      title: 'Rental Property Inspection Checklist',
      description: 'Checklist for documenting property condition before moving in',
      type: 'Checklist',
      icon: CheckCircleOutlineIcon,
    },
    {
      title: 'Understanding Maintenance Responsibilities',
      description: 'Clarification on who is responsible for different types of maintenance',
      type: 'Guide',
      icon: HomeIcon,
    },
  ];
  
  // Steps for the rent agreement creation process
  const steps = ['Basic Details', 'Agreement Terms', 'Review & Generate'];
  
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
  };
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Rent Agreement & Legal Help
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Create student-friendly rent agreements and access legal resources for your accommodation needs
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="legal help tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Create Rent Agreement" icon={<DescriptionIcon />} iconPosition="start" />
          <Tab label="Legal Resources" icon={<ArticleIcon />} iconPosition="start" />
          <Tab label="FAQs" icon={<HelpOutlineIcon />} iconPosition="start" />
          <Tab label="Legal Consultation" icon={<GavelIcon />} iconPosition="start" />
        </Tabs>
      </Box>
      
      {/* Create Rent Agreement Tab */}
      <TabPanel value={tabValue} index={0}>
        <Paper sx={{ p: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Create Your Rent Agreement
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Follow the steps below to generate a legally sound rent agreement tailored for students
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
              <Typography variant="h6" gutterBottom>
                Your Rent Agreement is Ready!
              </Typography>
              <Typography variant="body1" paragraph>
                Your student-friendly rent agreement has been generated successfully.
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" startIcon={<DownloadIcon />}>
                  Download PDF
                </Button>
                <Button variant="outlined" startIcon={<EmailIcon />}>
                  Email to Parties
                </Button>
                <Button variant="outlined" onClick={handleReset}>
                  Create Another
                </Button>
              </Stack>
            </Box>
          ) : (
            <>
              {/* Step 1: Basic Details */}
              {activeStep === 0 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Tenant Details
                    </Typography>
                    <Stack spacing={2}>
                      <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        required
                        type="email"
                      />
                      <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <TextField
                        label="College/University"
                        variant="outlined"
                        fullWidth
                      />
                      <TextField
                        label="ID Proof Number (Aadhar/PAN/Passport)"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Owner/Landlord Details
                    </Typography>
                    <Stack spacing={2}>
                      <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        required
                        type="email"
                      />
                      <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <TextField
                        label="ID Proof Number (Aadhar/PAN)"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Property Details
                    </Typography>
                    <Stack spacing={2}>
                      <TextField
                        label="Complete Property Address"
                        variant="outlined"
                        fullWidth
                        required
                        multiline
                        rows={2}
                      />
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="City"
                            variant="outlined"
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="PIN Code"
                            variant="outlined"
                            fullWidth
                            required
                          />
                        </Grid>
                      </Grid>
                      <FormControl fullWidth required>
                        <InputLabel>Property Type</InputLabel>
                        <Select
                          label="Property Type"
                          defaultValue=""
                        >
                          <MenuItem value="apartment">Apartment/Flat</MenuItem>
                          <MenuItem value="room">Single Room</MenuItem>
                          <MenuItem value="pg">PG Accommodation</MenuItem>
                          <MenuItem value="hostel">Hostel Room</MenuItem>
                          <MenuItem value="house">Independent House</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  </Grid>
                </Grid>
              )}
              
              {/* Step 2: Agreement Terms */}
              {activeStep === 1 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Rental Terms
                    </Typography>
                    <Stack spacing={2}>
                      <TextField
                        label="Monthly Rent Amount (₹)"
                        variant="outlined"
                        fullWidth
                        required
                        type="number"
                      />
                      <FormControl fullWidth required>
                        <InputLabel>Rent Duration</InputLabel>
                        <Select
                          label="Rent Duration"
                          value={rentDuration}
                          onChange={(e) => setRentDuration(e.target.value)}
                        >
                          <MenuItem value="11">11 Months (Standard)</MenuItem>
                          <MenuItem value="6">6 Months</MenuItem>
                          <MenuItem value="3">3 Months</MenuItem>
                          <MenuItem value="12">12 Months (Requires Registration)</MenuItem>
                        </Select>
                      </FormControl>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Agreement Start Date"
                            variant="outlined"
                            fullWidth
                            required
                            type="date"
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Agreement End Date"
                            variant="outlined"
                            fullWidth
                            required
                            type="date"
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                      </Grid>
                      <FormControl fullWidth required>
                        <InputLabel>Security Deposit</InputLabel>
                        <Select
                          label="Security Deposit"
                          value={securityDeposit}
                          onChange={(e) => setSecurityDeposit(e.target.value)}
                        >
                          <MenuItem value="1">1 Month's Rent</MenuItem>
                          <MenuItem value="2">2 Months' Rent (Standard)</MenuItem>
                          <MenuItem value="3">3 Months' Rent</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Additional Terms
                    </Typography>
                    <Stack spacing={2}>
                      <FormControl fullWidth>
                        <InputLabel>Notice Period for Termination</InputLabel>
                        <Select
                          label="Notice Period for Termination"
                          defaultValue="1"
                        >
                          <MenuItem value="0.5">15 Days</MenuItem>
                          <MenuItem value="1">1 Month (Standard)</MenuItem>
                          <MenuItem value="2">2 Months</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel>Rent Payment Due Date</InputLabel>
                        <Select
                          label="Rent Payment Due Date"
                          defaultValue="5"
                        >
                          <MenuItem value="1">1st of every month</MenuItem>
                          <MenuItem value="5">5th of every month</MenuItem>
                          <MenuItem value="10">10th of every month</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel>Agreement Type</InputLabel>
                        <Select
                          label="Agreement Type"
                          value={agreementType}
                          onChange={(e) => setAgreementType(e.target.value)}
                        >
                          <MenuItem value="standard">Standard (General Terms)</MenuItem>
                          <MenuItem value="student">Student-Friendly (Flexible Terms)</MenuItem>
                          <MenuItem value="custom">Custom (Add Specific Clauses)</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        label="Special Conditions (Optional)"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Add any special conditions or clauses you want to include in the agreement"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper variant="outlined" sx={{ p: 2, bgcolor: theme.palette.grey[50] }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Student-Friendly Features Included:
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <List dense>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutlineIcon color="success" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary="Flexible termination clause for course completion" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutlineIcon color="success" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary="Clear security deposit refund terms" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutlineIcon color="success" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary="Maintenance responsibilities clearly defined" />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <List dense>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutlineIcon color="success" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary="Fair visitor policy for study groups" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutlineIcon color="success" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary="Protection against arbitrary rent increases" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutlineIcon color="success" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary="Internet and essential utilities clause" />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              )}
              
              {/* Step 3: Review & Generate */}
              {activeStep === 2 && (
                <Box>
                  <Typography variant="subtitle1" gutterBottom>
                    Review Agreement Details
                  </Typography>
                  <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" gutterBottom>
                          Tenant: John Doe
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Email: johndoe@example.com
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Phone: +91 9876543210
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          College: Delhi University
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" gutterBottom>
                          Landlord: Rajesh Kumar
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Email: rajesh@example.com
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Phone: +91 9876543211
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider sx={{ my: 1 }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" gutterBottom>
                          Property Details
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Type: PG Accommodation
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Address: 123, North Campus, Delhi - 110007
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" gutterBottom>
                          Agreement Terms
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Duration: 11 Months (01/07/2023 to 31/05/2024)
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Monthly Rent: ₹10,000
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Security Deposit: ₹20,000 (2 months' rent)
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Notice Period: 1 Month
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                  
                  <Box sx={{ bgcolor: theme.palette.grey[50], p: 2, borderRadius: 1, mb: 3 }}>
                    <Typography variant="subtitle2" color="primary" gutterBottom>
                      Important Notes:
                    </Typography>
                    <Typography variant="body2" paragraph>
                      • This agreement is valid for 11 months to avoid mandatory registration requirements.
                    </Typography>
                    <Typography variant="body2" paragraph>
                      • While not mandatory, we recommend getting the agreement notarized for additional legal validity.
                    </Typography>
                    <Typography variant="body2">
                      • Both parties should keep a signed copy of the agreement for their records.
                    </Typography>
                  </Box>
                  
                  <FormControlLabel
                    control={
                      <Checkbox 
                        checked={termsAccepted} 
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        required
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I confirm that all the information provided is accurate and I understand that this will be used to generate a legally binding document.
                      </Typography>
                    }
                  />
                </Box>
              )}
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={activeStep === 2 && !termsAccepted}
                >
                  {activeStep === steps.length - 1 ? 'Generate Agreement' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </TabPanel>
      
      {/* Legal Resources Tab */}
      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={3}>
          {legalResources.map((resource, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                      }}
                    >
                      <resource.icon />
                    </Box>
                    <Typography variant="h6" component="h2">
                      {resource.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {resource.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                    Format: {resource.type}
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    fullWidth
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
          
          <Grid item xs={12}>
            <Paper sx={{ p: 3, mt: 2, bgcolor: theme.palette.grey[50] }}>
              <Typography variant="h6" gutterBottom>
                Need Customized Legal Help?
              </Typography>
              <Typography variant="body2" paragraph>
                Our network of student-friendly legal experts can provide personalized assistance for your specific situation.
              </Typography>
              <Button
                variant="contained"
                onClick={() => setTabValue(3)}
              >
                Get Legal Consultation
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* FAQs Tab */}
      <TabPanel value={tabValue} index={2}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Common legal questions about student accommodations and rent agreements
          </Typography>
          
          <Box sx={{ mt: 3 }}>
            {faqs.map((faq, index) => (
              <Accordion key={index} elevation={0} sx={{ '&:before': { display: 'none' } }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-header-${index}`}
                  sx={{ bgcolor: theme.palette.grey[50], mb: 1, borderRadius: 1 }}
                >
                  <Typography variant="subtitle1">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          
          <Box sx={{ mt: 4, p: 2, bgcolor: theme.palette.grey[50], borderRadius: 1 }}>
            <Typography variant="subtitle1" gutterBottom>
              Didn't find what you're looking for?
            </Typography>
            <Typography variant="body2" paragraph>
              Ask our community or get in touch with our legal experts for specific questions.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="outlined"
                startIcon={<ChatIcon />}
              >
                Ask Community
              </Button>
              <Button
                variant="contained"
                onClick={() => setTabValue(3)}
              >
                Contact Legal Expert
              </Button>
            </Stack>
          </Box>
        </Paper>
      </TabPanel>
      
      {/* Legal Consultation Tab */}
      <TabPanel value={tabValue} index={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Request Legal Consultation
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Get personalized legal advice from experts specializing in student accommodation issues
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Consultation Type</InputLabel>
                    <Select
                      label="Consultation Type"
                      defaultValue=""
                    >
                      <MenuItem value="agreement">Rent Agreement Review</MenuItem>
                      <MenuItem value="dispute">Landlord-Tenant Dispute</MenuItem>
                      <MenuItem value="deposit">Security Deposit Issue</MenuItem>
                      <MenuItem value="maintenance">Maintenance & Repairs</MenuItem>
                      <MenuItem value="eviction">Eviction Concerns</MenuItem>
                      <MenuItem value="other">Other Legal Issue</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Describe your legal issue"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    placeholder="Please provide details about your situation so our legal experts can better assist you"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Preferred Consultation Method</InputLabel>
                    <Select
                      label="Preferred Consultation Method"
                      defaultValue="video"
                    >
                      <MenuItem value="video">Video Call</MenuItem>
                      <MenuItem value="phone">Phone Call</MenuItem>
                      <MenuItem value="chat">Live Chat</MenuItem>
                      <MenuItem value="email">Email Consultation</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to the terms of service and privacy policy"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                  >
                    Submit Request
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Our Legal Experts
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Experienced professionals specializing in tenant rights and student accommodation issues
              </Typography>
              
              <List>
                <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Avatar>RK</Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary="Rajiv Kumar"
                    secondary={
                      <>
                        <Typography variant="body2" component="span" color="text.primary">
                          Rental Law Specialist
                        </Typography>
                        {" — 10+ years experience in tenant rights and rental disputes"}
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Avatar>PS</Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary="Priya Singh"
                    secondary={
                      <>
                        <Typography variant="body2" component="span" color="text.primary">
                          Property Law Expert
                        </Typography>
                        {" — Specializes in student accommodation legal issues"}
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Avatar>AM</Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary="Arun Mehta"
                    secondary={
                      <>
                        <Typography variant="body2" component="span" color="text.primary">
                          Consumer Rights Advocate
                        </Typography>
                        {" — Focuses on fair housing practices and deposit disputes"}
                      </>
                    }
                  />
                </ListItem>
              </List>
            </Paper>
            
            <Paper sx={{ p: 3, bgcolor: theme.palette.grey[50] }}>
              <Typography variant="subtitle1" gutterBottom>
                Consultation Pricing
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" gutterBottom>
                  <strong>Free Initial Assessment</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Brief evaluation of your case to determine the best course of action
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" gutterBottom>
                  <strong>Basic Consultation: ₹499</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  30-minute consultation with a legal expert
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" gutterBottom>
                  <strong>Comprehensive Support: ₹1,499</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Full legal assistance including document review and representation
                </Typography>
              </Box>
              <Box sx={{ mt: 2, p: 1, bgcolor: theme.palette.background.paper, borderRadius: 1 }}>
                <Typography variant="caption" color="primary">
                  Special discount for students with valid ID: 20% off all services
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
}

export default LegalHelp;