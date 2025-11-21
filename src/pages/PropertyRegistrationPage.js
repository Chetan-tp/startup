import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  useTheme,
  Checkbox,
  Chip,
  Stack,
  Autocomplete,
  Switch,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import ChairIcon from '@mui/icons-material/Chair';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SecurityIcon from '@mui/icons-material/Security';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';

// Sample data for dropdowns
const propertyTypes = [
  'Apartment',
  'Independent House',
  'PG/Hostel',
  'Flat',
  'Studio',
  'Villa',
];

const furnishingTypes = [
  'Fully Furnished',
  'Semi-Furnished',
  'Unfurnished',
];

const cities = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad',
  'Jaipur',
];

const amenities = [
  { name: 'WiFi', icon: <WifiIcon /> },
  { name: 'TV', icon: <TvIcon /> },
  { name: 'AC', icon: <AcUnitIcon /> },
  { name: 'Washing Machine', icon: <LocalLaundryServiceIcon /> },
  { name: 'Refrigerator', icon: <KitchenIcon /> },
  { name: 'Microwave', icon: <MicrowaveIcon /> },
  { name: 'Furniture', icon: <ChairIcon /> },
  { name: 'Parking', icon: <LocalParkingIcon /> },
  { name: 'Security', icon: <SecurityIcon /> },
  { name: 'Gym', icon: null },
  { name: 'Swimming Pool', icon: null },
  { name: 'Power Backup', icon: null },
  { name: 'Study Table', icon: null },
  { name: 'Lift', icon: null },
];

const nearbyPlaces = [
  'College/University',
  'Bus Stop',
  'Metro Station',
  'Hospital',
  'Grocery Store',
  'Restaurant',
  'Shopping Mall',
  'Bank/ATM',
  'Park',
  'Gym',
];

function PropertyRegistrationPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    // Basic Information
    propertyType: '',
    propertyName: '',
    furnishingType: '',
    totalRooms: '',
    bedrooms: '',
    bathrooms: '',
    balconies: '',
    floorNumber: '',
    totalFloors: '',
    propertyAge: '',
    builtUpArea: '',
    
    // Location
    address: '',
    city: '',
    state: '',
    pincode: '',
    landmark: '',
    latitude: '',
    longitude: '',
    
    // Amenities & Features
    selectedAmenities: [],
    nearbyPlaces: [],
    distanceFromCollege: '',
    
    // Rental Details
    monthlyRent: '',
    securityDeposit: '',
    maintenanceCharges: '',
    electricityCharges: '',
    waterCharges: '',
    rentNegotiable: false,
    availableFrom: '',
    minDuration: '11',
    maxDuration: '12',
    preferredTenants: 'Students',
    foodIncluded: false,
    foodOptions: [],
    
    // Rules & Policies
    visitingHoursStart: '',
    visitingHoursEnd: '',
    genderRestriction: 'Any',
    alcoholAllowed: false,
    smokingAllowed: false,
    lateNightEntry: true,
    outsideGuestsAllowed: true,
    petFriendly: false,
    additionalRules: '',
    
    // Description & Photos
    title: '',
    description: '',
    photos: [],
    videoLink: '',
    
    // Owner Details
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
    contactPreference: 'Phone',
    
    // Terms & Conditions
    agreeTerms: false,
    agreeListingPolicy: false,
  });
  
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };
  
  const handleAmenitiesChange = (event, newValue) => {
    setFormData({
      ...formData,
      selectedAmenities: newValue,
    });
  };
  
  const handleNearbyPlacesChange = (event, newValue) => {
    setFormData({
      ...formData,
      nearbyPlaces: newValue,
    });
  };
  
  const handleFoodOptionsChange = (event, newValue) => {
    setFormData({
      ...formData,
      foodOptions: newValue,
    });
  };
  
  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 0) {
      // Validate basic information
      if (!formData.propertyType) {
        newErrors.propertyType = 'Property type is required';
      }
      
      if (!formData.propertyName.trim()) {
        newErrors.propertyName = 'Property name is required';
      }
      
      if (!formData.furnishingType) {
        newErrors.furnishingType = 'Furnishing type is required';
      }
      
      if (!formData.totalRooms) {
        newErrors.totalRooms = 'Total rooms is required';
      } else if (isNaN(formData.totalRooms) || parseInt(formData.totalRooms) < 1) {
        newErrors.totalRooms = 'Total rooms must be a positive number';
      }
      
      if (!formData.bedrooms) {
        newErrors.bedrooms = 'Number of bedrooms is required';
      } else if (isNaN(formData.bedrooms) || parseInt(formData.bedrooms) < 0) {
        newErrors.bedrooms = 'Bedrooms must be a non-negative number';
      }
      
      if (!formData.bathrooms) {
        newErrors.bathrooms = 'Number of bathrooms is required';
      } else if (isNaN(formData.bathrooms) || parseInt(formData.bathrooms) < 0) {
        newErrors.bathrooms = 'Bathrooms must be a non-negative number';
      }
      
      if (!formData.builtUpArea) {
        newErrors.builtUpArea = 'Built-up area is required';
      } else if (isNaN(formData.builtUpArea) || parseInt(formData.builtUpArea) <= 0) {
        newErrors.builtUpArea = 'Built-up area must be a positive number';
      }
    } else if (step === 1) {
      // Validate location
      if (!formData.address.trim()) {
        newErrors.address = 'Address is required';
      }
      
      if (!formData.city) {
        newErrors.city = 'City is required';
      }
      
      if (!formData.state.trim()) {
        newErrors.state = 'State is required';
      }
      
      if (!formData.pincode.trim()) {
        newErrors.pincode = 'PIN code is required';
      } else if (!/^\d{6}$/.test(formData.pincode)) {
        newErrors.pincode = 'PIN code must be 6 digits';
      }
    } else if (step === 2) {
      // Validate amenities & features
      if (formData.selectedAmenities.length === 0) {
        newErrors.selectedAmenities = 'Please select at least one amenity';
      }
      
      if (formData.nearbyPlaces.length === 0) {
        newErrors.nearbyPlaces = 'Please select at least one nearby place';
      }
    } else if (step === 3) {
      // Validate rental details
      if (!formData.monthlyRent) {
        newErrors.monthlyRent = 'Monthly rent is required';
      } else if (isNaN(formData.monthlyRent) || parseInt(formData.monthlyRent) <= 0) {
        newErrors.monthlyRent = 'Monthly rent must be a positive number';
      }
      
      if (!formData.securityDeposit) {
        newErrors.securityDeposit = 'Security deposit is required';
      } else if (isNaN(formData.securityDeposit) || parseInt(formData.securityDeposit) < 0) {
        newErrors.securityDeposit = 'Security deposit must be a non-negative number';
      }
      
      if (!formData.availableFrom) {
        newErrors.availableFrom = 'Available from date is required';
      }
      
      if (formData.foodIncluded && formData.foodOptions.length === 0) {
        newErrors.foodOptions = 'Please select at least one food option';
      }
    } else if (step === 4) {
      // No validation for rules & policies
    } else if (step === 5) {
      // Validate description & photos
      if (!formData.title.trim()) {
        newErrors.title = 'Title is required';
      }
      
      if (!formData.description.trim()) {
        newErrors.description = 'Description is required';
      } else if (formData.description.length < 50) {
        newErrors.description = 'Description should be at least 50 characters';
      }
      
      if (formData.photos.length === 0) {
        newErrors.photos = 'Please upload at least one photo';
      }
    } else if (step === 6) {
      // Validate owner details
      if (!formData.ownerName.trim()) {
        newErrors.ownerName = 'Owner name is required';
      }
      
      if (!formData.ownerPhone.trim()) {
        newErrors.ownerPhone = 'Owner phone is required';
      } else if (!/^[0-9]{10}$/.test(formData.ownerPhone.replace(/[\s-]/g, ''))) {
        newErrors.ownerPhone = 'Owner phone must be 10 digits';
      }
      
      if (!formData.ownerEmail.trim()) {
        newErrors.ownerEmail = 'Owner email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.ownerEmail)) {
        newErrors.ownerEmail = 'Owner email is invalid';
      }
    } else if (step === 7) {
      // Validate terms & conditions
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = 'You must agree to the terms and conditions';
      }
      
      if (!formData.agreeListingPolicy) {
        newErrors.agreeListingPolicy = 'You must agree to the listing policy';
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
      // In a real app, you would handle property registration here
      console.log('Property registration form submitted:', formData);
      
      // Simulate successful registration and redirect to success page
      navigate('/property-registration-success');
    }
  };
  
  const handlePhotoUpload = (e) => {
    // In a real app, you would handle file upload here
    const files = Array.from(e.target.files);
    const fileNames = files.map(file => file.name);
    
    setFormData({
      ...formData,
      photos: [...formData.photos, ...fileNames],
    });
    
    // Clear error when user uploads photos
    if (errors.photos) {
      setErrors({
        ...errors,
        photos: '',
      });
    }
  };
  
  const handleRemovePhoto = (index) => {
    const updatedPhotos = [...formData.photos];
    updatedPhotos.splice(index, 1);
    
    setFormData({
      ...formData,
      photos: updatedPhotos,
    });
  };
  
  const steps = [
    'Basic Information',
    'Location',
    'Amenities & Features',
    'Rental Details',
    'Rules & Policies',
    'Description & Photos',
    'Owner Details',
    'Review & Submit',
  ];
  
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Basic Property Information
            </Typography>
            
            <Grid container spacing={3}>
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
                  <MenuItem value=""><em>Select property type</em></MenuItem>
                  {propertyTypes.map((option) => (
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
                  id="propertyName"
                  label="Property Name/Title"
                  name="propertyName"
                  value={formData.propertyName}
                  onChange={handleChange}
                  error={!!errors.propertyName}
                  helperText={errors.propertyName}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  required
                  fullWidth
                  id="furnishingType"
                  label="Furnishing Type"
                  name="furnishingType"
                  value={formData.furnishingType}
                  onChange={handleChange}
                  error={!!errors.furnishingType}
                  helperText={errors.furnishingType}
                >
                  <MenuItem value=""><em>Select furnishing type</em></MenuItem>
                  {furnishingTypes.map((option) => (
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
                  id="builtUpArea"
                  label="Built-up Area (sq.ft)"
                  name="builtUpArea"
                  type="number"
                  value={formData.builtUpArea}
                  onChange={handleChange}
                  error={!!errors.builtUpArea}
                  helperText={errors.builtUpArea}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SquareFootIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="totalRooms"
                  label="Total Rooms"
                  name="totalRooms"
                  type="number"
                  value={formData.totalRooms}
                  onChange={handleChange}
                  error={!!errors.totalRooms}
                  helperText={errors.totalRooms}
                />
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="bedrooms"
                  label="Bedrooms"
                  name="bedrooms"
                  type="number"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  error={!!errors.bedrooms}
                  helperText={errors.bedrooms}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BedIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="bathrooms"
                  label="Bathrooms"
                  name="bathrooms"
                  type="number"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  error={!!errors.bathrooms}
                  helperText={errors.bathrooms}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BathtubIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="balconies"
                  label="Balconies"
                  name="balconies"
                  type="number"
                  value={formData.balconies}
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="floorNumber"
                  label="Floor Number"
                  name="floorNumber"
                  type="number"
                  value={formData.floorNumber}
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="totalFloors"
                  label="Total Floors"
                  name="totalFloors"
                  type="number"
                  value={formData.totalFloors}
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="propertyAge"
                  label="Property Age (years)"
                  name="propertyAge"
                  type="number"
                  value={formData.propertyAge}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Property Location
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  multiline
                  rows={2}
                  value={formData.address}
                  onChange={handleChange}
                  error={!!errors.address}
                  helperText={errors.address}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
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
                >
                  <MenuItem value=""><em>Select city</em></MenuItem>
                  {cities.map((option) => (
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
                  id="state"
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  error={!!errors.state}
                  helperText={errors.state}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="pincode"
                  label="PIN Code"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  error={!!errors.pincode}
                  helperText={errors.pincode}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="landmark"
                  label="Landmark"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Box sx={{ mt: 2, mb: 1 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Pin Location on Map
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Click on the map to set the exact location of your property. This will help students find your property easily.
                  </Typography>
                  
                  <Paper 
                    sx={{ 
                      height: 300, 
                      width: '100%', 
                      bgcolor: 'grey.100', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Map will be displayed here
                    </Typography>
                  </Paper>
                  
                  <Button variant="outlined" fullWidth>
                    Use Current Location
                  </Button>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="latitude"
                  label="Latitude"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                  disabled
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="longitude"
                  label="Longitude"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                  disabled
                />
              </Grid>
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Amenities & Features
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Available Amenities
                </Typography>
                <Autocomplete
                  multiple
                  id="selectedAmenities"
                  options={amenities}
                  getOptionLabel={(option) => option.name}
                  value={formData.selectedAmenities}
                  onChange={handleAmenitiesChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Select Amenities"
                      placeholder="Amenities"
                      error={!!errors.selectedAmenities}
                      helperText={errors.selectedAmenities}
                    />
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        icon={option.icon}
                        label={option.name}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                />
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Nearby Places
                </Typography>
                <Autocomplete
                  multiple
                  id="nearbyPlaces"
                  options={nearbyPlaces}
                  value={formData.nearbyPlaces}
                  onChange={handleNearbyPlacesChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Select Nearby Places"
                      placeholder="Nearby Places"
                      error={!!errors.nearbyPlaces}
                      helperText={errors.nearbyPlaces}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="distanceFromCollege"
                  label="Distance from College (km)"
                  name="distanceFromCollege"
                  type="number"
                  value={formData.distanceFromCollege}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </>
        );
      case 3:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Rental Details
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="monthlyRent"
                  label="Monthly Rent (₹)"
                  name="monthlyRent"
                  type="number"
                  value={formData.monthlyRent}
                  onChange={handleChange}
                  error={!!errors.monthlyRent}
                  helperText={errors.monthlyRent}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.rentNegotiable}
                      onChange={handleChange}
                      name="rentNegotiable"
                      color="primary"
                    />
                  }
                  label="Rent Negotiable"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="securityDeposit"
                  label="Security Deposit (₹)"
                  name="securityDeposit"
                  type="number"
                  value={formData.securityDeposit}
                  onChange={handleChange}
                  error={!!errors.securityDeposit}
                  helperText={errors.securityDeposit}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="maintenanceCharges"
                  label="Maintenance Charges (₹/month)"
                  name="maintenanceCharges"
                  type="number"
                  value={formData.maintenanceCharges}
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="electricityCharges"
                  label="Electricity Charges"
                  name="electricityCharges"
                  value={formData.electricityCharges}
                  onChange={handleChange}
                  placeholder="As per usage/Fixed"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="waterCharges"
                  label="Water Charges"
                  name="waterCharges"
                  value={formData.waterCharges}
                  onChange={handleChange}
                  placeholder="Included/Not included"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="availableFrom"
                  label="Available From"
                  name="availableFrom"
                  type="date"
                  value={formData.availableFrom}
                  onChange={handleChange}
                  error={!!errors.availableFrom}
                  helperText={errors.availableFrom}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  id="preferredTenants"
                  label="Preferred Tenants"
                  name="preferredTenants"
                  value={formData.preferredTenants}
                  onChange={handleChange}
                >
                  <MenuItem value="Students">Students Only</MenuItem>
                  <MenuItem value="Working Professionals">Working Professionals</MenuItem>
                  <MenuItem value="Any">Any</MenuItem>
                </TextField>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  id="minDuration"
                  label="Minimum Stay Duration (months)"
                  name="minDuration"
                  value={formData.minDuration}
                  onChange={handleChange}
                >
                  {[...Array(12).keys()].map(i => (
                    <MenuItem key={i + 1} value={(i + 1).toString()}>
                      {i + 1}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  id="maxDuration"
                  label="Maximum Stay Duration (months)"
                  name="maxDuration"
                  value={formData.maxDuration}
                  onChange={handleChange}
                >
                  {[...Array(36).keys()].map(i => (
                    <MenuItem key={i + 1} value={(i + 1).toString()}>
                      {i + 1}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.foodIncluded}
                      onChange={handleChange}
                      name="foodIncluded"
                      color="primary"
                    />
                  }
                  label="Food Included in Rent"
                />
              </Grid>
              
              {formData.foodIncluded && (
                <Grid item xs={12}>
                  <Autocomplete
                    multiple
                    id="foodOptions"
                    options={['Breakfast', 'Lunch', 'Dinner', 'Vegetarian', 'Non-Vegetarian']}
                    value={formData.foodOptions}
                    onChange={handleFoodOptionsChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Food Options"
                        placeholder="Select food options"
                        error={!!errors.foodOptions}
                        helperText={errors.foodOptions}
                      />
                    )}
                  />
                </Grid>
              )}
            </Grid>
          </>
        );
      case 4:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Rules & Policies
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender Restriction</FormLabel>
                  <RadioGroup
                    name="genderRestriction"
                    value={formData.genderRestriction}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Any" control={<Radio />} label="No Restriction" />
                    <FormControlLabel value="Male" control={<Radio />} label="Male Only" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female Only" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Visiting Hours
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="visitingHoursStart"
                      label="From"
                      name="visitingHoursStart"
                      type="time"
                      value={formData.visitingHoursStart}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="visitingHoursEnd"
                      label="To"
                      name="visitingHoursEnd"
                      type="time"
                      value={formData.visitingHoursEnd}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1" gutterBottom>
                  House Rules
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={formData.alcoholAllowed}
                          onChange={handleChange}
                          name="alcoholAllowed"
                          color="primary"
                        />
                      }
                      label="Alcohol Allowed"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={formData.smokingAllowed}
                          onChange={handleChange}
                          name="smokingAllowed"
                          color="primary"
                        />
                      }
                      label="Smoking Allowed"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={formData.lateNightEntry}
                          onChange={handleChange}
                          name="lateNightEntry"
                          color="primary"
                        />
                      }
                      label="Late Night Entry Allowed"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={formData.outsideGuestsAllowed}
                          onChange={handleChange}
                          name="outsideGuestsAllowed"
                          color="primary"
                        />
                      }
                      label="Outside Guests Allowed"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={formData.petFriendly}
                          onChange={handleChange}
                          name="petFriendly"
                          color="primary"
                        />
                      }
                      label="Pet Friendly"
                    />
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="additionalRules"
                  label="Additional Rules (Optional)"
                  name="additionalRules"
                  multiline
                  rows={4}
                  value={formData.additionalRules}
                  onChange={handleChange}
                  placeholder="Specify any additional rules or policies..."
                />
              </Grid>
            </Grid>
          </>
        );
      case 5:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Description & Photos
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Listing Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  error={!!errors.title}
                  helperText={errors.title || 'Create an attractive title for your property'}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Property Description"
                  name="description"
                  multiline
                  rows={6}
                  value={formData.description}
                  onChange={handleChange}
                  error={!!errors.description}
                  helperText={errors.description || 'Describe your property in detail (minimum 50 characters)'}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Property Photos
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Upload clear photos of your property. Include images of bedrooms, bathrooms, kitchen, and common areas.
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<PhotoCameraIcon />}
                  >
                    Upload Photos
                    <input
                      type="file"
                      hidden
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                    />
                  </Button>
                  {errors.photos && (
                    <FormHelperText error>{errors.photos}</FormHelperText>
                  )}
                </Box>
                
                {formData.photos.length > 0 && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Uploaded Photos ({formData.photos.length})
                    </Typography>
                    <Grid container spacing={1}>
                      {formData.photos.map((photo, index) => (
                        <Grid item key={index}>
                          <Chip
                            label={photo}
                            onDelete={() => handleRemovePhoto(index)}
                            sx={{ m: 0.5 }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="videoLink"
                  label="Video Link (Optional)"
                  name="videoLink"
                  value={formData.videoLink}
                  onChange={handleChange}
                  placeholder="YouTube or other video link"
                />
              </Grid>
            </Grid>
          </>
        );
      case 6:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Owner Details
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="ownerName"
                  label="Owner Name"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  error={!!errors.ownerName}
                  helperText={errors.ownerName}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="ownerPhone"
                  label="Owner Phone"
                  name="ownerPhone"
                  value={formData.ownerPhone}
                  onChange={handleChange}
                  error={!!errors.ownerPhone}
                  helperText={errors.ownerPhone}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="ownerEmail"
                  label="Owner Email"
                  name="ownerEmail"
                  value={formData.ownerEmail}
                  onChange={handleChange}
                  error={!!errors.ownerEmail}
                  helperText={errors.ownerEmail}
                />
              </Grid>
              
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Preferred Contact Method</FormLabel>
                  <RadioGroup
                    name="contactPreference"
                    value={formData.contactPreference}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel value="Phone" control={<Radio />} label="Phone" />
                    <FormControlLabel value="Email" control={<Radio />} label="Email" />
                    <FormControlLabel value="Both" control={<Radio />} label="Both" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </>
        );
      case 7:
        return (
          <>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Almost Done!
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Please review all the information before submitting your property listing.
              </Typography>
            </Box>
            
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Property Summary
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Property Type</Typography>
                  <Typography variant="body2">{formData.propertyType}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Property Name</Typography>
                  <Typography variant="body2">{formData.propertyName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Location</Typography>
                  <Typography variant="body2">{formData.address}, {formData.city}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Monthly Rent</Typography>
                  <Typography variant="body2">₹{formData.monthlyRent}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Available From</Typography>
                  <Typography variant="body2">{formData.availableFrom}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Bedrooms/Bathrooms</Typography>
                  <Typography variant="body2">{formData.bedrooms} / {formData.bathrooms}</Typography>
                </Grid>
              </Grid>
            </Paper>
            
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
                  <Link href="/terms" variant="body2">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" variant="body2">
                    Privacy Policy
                  </Link>
                </Typography>
              }
            />
            {errors.agreeTerms && (
              <FormHelperText error>{errors.agreeTerms}</FormHelperText>
            )}
            
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agreeListingPolicy}
                  onChange={handleChange}
                  name="agreeListingPolicy"
                  color="primary"
                />
              }
              label="I confirm that all the information provided is accurate and I have the legal right to list this property"
            />
            {errors.agreeListingPolicy && (
              <FormHelperText error>{errors.agreeListingPolicy}</FormHelperText>
            )}
          </>
        );
      default:
        return 'Unknown step';
    }
  };
  
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper 
        elevation={3} 
        sx={{
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          List Your Property
        </Typography>
        
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          Fill in the details below to list your property for student accommodation
        </Typography>
        
        <Stepper activeStep={activeStep} alternativeLabel sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <Box component="form" noValidate onSubmit={handleSubmit}>
          {getStepContent(activeStep)}
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>
            
            {activeStep === steps.length - 1 ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Submit Listing
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
      
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Need help? Contact our support team at support@studentstay.com
        </Typography>
      </Box>
    </Container>
  );
}

export default PropertyRegistrationPage;