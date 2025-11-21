import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  useTheme,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// Sample data for dropdowns
const propertyTypes = [
  'Apartment',
  'House',
  'Shared Room',
  'Private Room',
  'Studio',
  'Hostel',
  'PG (Paying Guest)',
  'Other',
];

const cities = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
  'Other',
];

const experienceYears = [
  'New to renting',
  '1-2 years',
  '3-5 years',
  '5-10 years',
  '10+ years',
];

function RoomOwnerRegisterPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    propertyType: '',
    city: '',
    address: '',
    experience: '',
    otherPropertyType: '',
    otherCity: '',
    numberOfProperties: '',
    agreeTerms: false,
    receiveUpdates: true,
    verifyIdentity: false,
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'agreeTerms' || name === 'receiveUpdates' || name === 'verifyIdentity' ? checked : value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  
  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 0) {
      // Validate personal information
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
      
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
        newErrors.phone = 'Phone number must be 10 digits';
      }
    } else if (step === 1) {
      // Validate password
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
        newErrors.password = 'Password must contain uppercase, lowercase, and number';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    } else if (step === 2) {
      // Validate property information
      if (!formData.propertyType) {
        newErrors.propertyType = 'Please select your property type';
      } else if (formData.propertyType === 'Other' && !formData.otherPropertyType.trim()) {
        newErrors.otherPropertyType = 'Please specify your property type';
      }
      
      if (!formData.city) {
        newErrors.city = 'Please select your city';
      } else if (formData.city === 'Other' && !formData.otherCity.trim()) {
        newErrors.otherCity = 'Please specify your city';
      }
      
      if (!formData.address.trim()) {
        newErrors.address = 'Property address is required';
      }
      
      if (!formData.experience) {
        newErrors.experience = 'Please select your experience level';
      }
      
      if (!formData.numberOfProperties) {
        newErrors.numberOfProperties = 'Please specify number of properties';
      } else if (isNaN(formData.numberOfProperties) || parseInt(formData.numberOfProperties) < 1) {
        newErrors.numberOfProperties = 'Please enter a valid number of properties';
      }
    } else if (step === 3) {
      // Validate terms agreement
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = 'You must agree to the terms and conditions';
      }
      
      if (!formData.verifyIdentity) {
        newErrors.verifyIdentity = 'Identity verification consent is required';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateStep(activeStep)) {
      // In a real app, you would handle registration here
      console.log('Room owner registration form submitted:', formData);
      
      // Simulate successful registration and redirect to login page
      navigate('/login');
    }
  };
  
  const handleSocialSignup = (provider) => {
    // In a real app, you would implement social signup here
    console.log(`Sign up with ${provider}`);
  };
  
  const steps = ['Personal Information', 'Create Password', 'Property Details', 'Review & Submit'];
  
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="businessName"
                  label="Business Name (Optional)"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  required
                  fullWidth
                  id="propertyType"
                  label="Property Type"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  error={!!errors.propertyType}
                  helperText={errors.propertyType}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                >
                  {propertyTypes.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {formData.propertyType === 'Other' && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="otherPropertyType"
                    label="Specify Property Type"
                    name="otherPropertyType"
                    value={formData.otherPropertyType}
                    onChange={handleChange}
                    error={!!errors.otherPropertyType}
                    helperText={errors.otherPropertyType}
                  />
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  error={!!errors.city}
                  helperText={errors.city}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                >
                  {cities.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {formData.city === 'Other' && (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="otherCity"
                    label="Specify City"
                    name="otherCity"
                    value={formData.otherCity}
                    onChange={handleChange}
                    error={!!errors.otherCity}
                    helperText={errors.otherCity}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Property Address"
                  name="address"
                  multiline
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  error={!!errors.address}
                  helperText={errors.address}
                  placeholder="Enter the full address of your property"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  required
                  fullWidth
                  id="experience"
                  label="Experience in Renting"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  error={!!errors.experience}
                  helperText={errors.experience}
                >
                  {experienceYears.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="numberOfProperties"
                  label="Number of Properties"
                  name="numberOfProperties"
                  type="number"
                  value={formData.numberOfProperties}
                  onChange={handleChange}
                  error={!!errors.numberOfProperties}
                  helperText={errors.numberOfProperties}
                  inputProps={{ min: 1 }}
                />
              </Grid>
            </Grid>
          </>
        );
      case 3:
        return (
          <>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Review Your Information
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Please review your information before submitting your registration.
              </Typography>
            </Box>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Name
                </Typography>
                <Typography variant="body1">
                  {formData.firstName} {formData.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Email
                </Typography>
                <Typography variant="body1">
                  {formData.email}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Phone
                </Typography>
                <Typography variant="body1">
                  {formData.phone}
                </Typography>
              </Grid>
              {formData.businessName && (
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Business Name
                  </Typography>
                  <Typography variant="body1">
                    {formData.businessName}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Property Type
                </Typography>
                <Typography variant="body1">
                  {formData.propertyType === 'Other' ? formData.otherPropertyType : formData.propertyType}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  City
                </Typography>
                <Typography variant="body1">
                  {formData.city === 'Other' ? formData.otherCity : formData.city}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="text.secondary">
                  Property Address
                </Typography>
                <Typography variant="body1">
                  {formData.address}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Experience
                </Typography>
                <Typography variant="body1">
                  {formData.experience}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Number of Properties
                </Typography>
                <Typography variant="body1">
                  {formData.numberOfProperties}
                </Typography>
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    name="agreeTerms"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2">
                    I agree to the{' '}
                    <Link component={RouterLink} to="/terms" color="primary">
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link component={RouterLink} to="/privacy" color="primary">
                      Privacy Policy
                    </Link>
                  </Typography>
                }
              />
              {errors.agreeTerms && (
                <FormHelperText error>{errors.agreeTerms}</FormHelperText>
              )}
            </Box>
            
            <Box sx={{ mt: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.verifyIdentity}
                    onChange={handleChange}
                    name="verifyIdentity"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2">
                    I consent to identity verification for property owner authentication
                  </Typography>
                }
              />
              {errors.verifyIdentity && (
                <FormHelperText error>{errors.verifyIdentity}</FormHelperText>
              )}
            </Box>
            
            <Box sx={{ mt: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.receiveUpdates}
                    onChange={handleChange}
                    name="receiveUpdates"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2">
                    I would like to receive updates about platform features and tenant inquiries
                  </Typography>
                }
              />
            </Box>
          </>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: '100%',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <BusinessIcon />
            </Avatar>
            <Typography component="h1" variant="h4" gutterBottom>
              Room Owner Registration
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Join our platform to list your properties and connect with students
            </Typography>
          </Box>

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box component="form" onSubmit={handleSubmit}>
            {getStepContent(activeStep)}
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ minWidth: 120 }}
                >
                  Register
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  size="large"
                  sx={{ minWidth: 120 }}
                >
                  Next
                </Button>
              )}
            </Box>
          </Box>

          {activeStep === 0 && (
            <>
              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Or sign up with
                </Typography>
              </Divider>

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  onClick={() => handleSocialSignup('Google')}
                  sx={{ flex: 1 }}
                >
                  Google
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  onClick={() => handleSocialSignup('Facebook')}
                  sx={{ flex: 1 }}
                >
                  Facebook
                </Button>
              </Box>
            </>
          )}

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Link component={RouterLink} to="/login" color="primary">
                Sign in here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default RoomOwnerRegisterPage;