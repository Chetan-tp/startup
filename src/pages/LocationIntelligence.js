import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Rating,
  Select,
  Slider,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import LayersIcon from '@mui/icons-material/Layers';

// This would be replaced with an actual map component like Google Maps
const MapPlaceholder = () => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        bgcolor: theme.palette.grey[200],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 1,
        overflow: 'hidden',
      }}
    >
      {/* This is a placeholder for the actual map component */}
      <Typography variant="body1" color="text.secondary">
        Map Component (Google Maps or OpenStreetMap would be integrated here)
      </Typography>
      
      {/* Map Controls */}
      <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
        <Paper elevation={3} sx={{ p: 0.5 }}>
          <Stack spacing={1}>
            <IconButton size="small">
              <ZoomInIcon />
            </IconButton>
            <IconButton size="small">
              <ZoomOutIcon />
            </IconButton>
            <Divider />
            <IconButton size="small">
              <MyLocationIcon />
            </IconButton>
            <IconButton size="small">
              <LayersIcon />
            </IconButton>
          </Stack>
        </Paper>
      </Box>
      
      {/* Sample Map Markers */}
      <Box sx={{ position: 'absolute', top: '40%', left: '30%' }}>
        <Tooltip title="Delhi University - 0.5 km">
          <SchoolIcon color="primary" fontSize="large" />
        </Tooltip>
      </Box>
      <Box sx={{ position: 'absolute', top: '60%', left: '40%' }}>
        <Tooltip title="Bus Stop - 0.2 km">
          <DirectionsBusIcon color="secondary" fontSize="large" />
        </Tooltip>
      </Box>
      <Box sx={{ position: 'absolute', top: '30%', left: '60%' }}>
        <Tooltip title="Food Court - 0.3 km">
          <RestaurantIcon sx={{ color: theme.palette.success.main }} fontSize="large" />
        </Tooltip>
      </Box>
      <Box sx={{ position: 'absolute', top: '50%', left: '70%' }}>
        <Tooltip title="Grocery Store - 0.4 km">
          <LocalGroceryStoreIcon sx={{ color: theme.palette.warning.main }} fontSize="large" />
        </Tooltip>
      </Box>
      <Box sx={{ position: 'absolute', top: '70%', left: '50%' }}>
        <Tooltip title="Hospital - 1.2 km">
          <LocalHospitalIcon sx={{ color: theme.palette.error.main }} fontSize="large" />
        </Tooltip>
      </Box>
      
      {/* Current Location Marker */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            bgcolor: theme.palette.primary.main,
            border: `3px solid ${theme.palette.common.white}`,
            boxShadow: theme.shadows[3],
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            bgcolor: theme.palette.primary.main,
            opacity: 0.2,
            animation: 'pulse 1.5s infinite',
            '@keyframes pulse': {
              '0%': {
                transform: 'translate(-50%, -50%) scale(0.5)',
                opacity: 0.5,
              },
              '100%': {
                transform: 'translate(-50%, -50%) scale(2)',
                opacity: 0,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

// Sample area data
const areaData = [
  {
    id: 1,
    name: 'North Campus',
    city: 'Delhi',
    safetyRating: 4.2,
    amenities: {
      colleges: 5,
      busStops: 8,
      restaurants: 15,
      hospitals: 2,
      groceryStores: 6,
    },
    description: 'Popular student area close to Delhi University with good public transport and affordable accommodations.',
    averageRent: '₹8,000 - ₹15,000',
    popularColleges: ['Delhi University', 'St. Stephen\'s College', 'Hindu College'],
  },
  {
    id: 2,
    name: 'Koramangala',
    city: 'Bangalore',
    safetyRating: 4.5,
    amenities: {
      colleges: 3,
      busStops: 10,
      restaurants: 25,
      hospitals: 3,
      groceryStores: 8,
    },
    description: 'Vibrant neighborhood with tech startups, good nightlife, and close to several engineering colleges.',
    averageRent: '₹12,000 - ₹20,000',
    popularColleges: ['Christ University', 'PESIT', 'Bangalore Institute of Technology'],
  },
  {
    id: 3,
    name: 'Viman Nagar',
    city: 'Pune',
    safetyRating: 4.3,
    amenities: {
      colleges: 4,
      busStops: 6,
      restaurants: 18,
      hospitals: 2,
      groceryStores: 5,
    },
    description: 'Modern residential area close to IT parks and educational institutions with good amenities.',
    averageRent: '₹10,000 - ₹18,000',
    popularColleges: ['Symbiosis Institute', 'MIT Pune', 'Pune University'],
  },
];

function LocationIntelligence() {
  const theme = useTheme();
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [radius, setRadius] = useState(2);
  const [showAmenities, setShowAmenities] = useState(['colleges', 'busStops']);
  
  const handleAmenitiesChange = (event, newAmenities) => {
    if (newAmenities.length) {
      setShowAmenities(newAmenities);
    }
  };
  
  const handleRadiusChange = (event, newValue) => {
    setRadius(newValue);
  };
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Location Intelligence
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Explore areas around colleges with detailed information on safety, amenities, and transport options
      </Typography>
      
      {/* Search and Filter Bar */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <FormControl fullWidth size="small">
              <InputLabel>City</InputLabel>
              <Select
                value={selectedCity}
                label="City"
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <MenuItem value="">All Cities</MenuItem>
                <MenuItem value="delhi">Delhi</MenuItem>
                <MenuItem value="mumbai">Mumbai</MenuItem>
                <MenuItem value="bangalore">Bangalore</MenuItem>
                <MenuItem value="pune">Pune</MenuItem>
                <MenuItem value="chennai">Chennai</MenuItem>
                <MenuItem value="hyderabad">Hyderabad</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              placeholder="Search by area, college, or landmark"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<MyLocationIcon />}
            >
              Use Current Location
            </Button>
          </Grid>
        </Grid>
      </Paper>
      
      <Grid container spacing={3}>
        {/* Map and Controls */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Explore Map
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" gutterBottom>
                    Show within radius: {radius} km
                  </Typography>
                  <Slider
                    value={radius}
                    onChange={handleRadiusChange}
                    min={0.5}
                    max={5}
                    step={0.5}
                    marks
                    valueLabelDisplay="auto"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" gutterBottom>
                    Show Amenities:
                  </Typography>
                  <ToggleButtonGroup
                    value={showAmenities}
                    onChange={handleAmenitiesChange}
                    aria-label="amenities"
                    size="small"
                    color="primary"
                    sx={{ flexWrap: 'wrap' }}
                    multiple
                  >
                    <ToggleButton value="colleges" aria-label="colleges">
                      <Tooltip title="Colleges">
                        <SchoolIcon fontSize="small" />
                      </Tooltip>
                    </ToggleButton>
                    <ToggleButton value="busStops" aria-label="bus stops">
                      <Tooltip title="Bus Stops">
                        <DirectionsBusIcon fontSize="small" />
                      </Tooltip>
                    </ToggleButton>
                    <ToggleButton value="restaurants" aria-label="restaurants">
                      <Tooltip title="Restaurants">
                        <RestaurantIcon fontSize="small" />
                      </Tooltip>
                    </ToggleButton>
                    <ToggleButton value="hospitals" aria-label="hospitals">
                      <Tooltip title="Hospitals">
                        <LocalHospitalIcon fontSize="small" />
                      </Tooltip>
                    </ToggleButton>
                    <ToggleButton value="groceryStores" aria-label="grocery stores">
                      <Tooltip title="Grocery Stores">
                        <LocalGroceryStoreIcon fontSize="small" />
                      </Tooltip>
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </Box>
            
            <MapPlaceholder />
            
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Data sources: Google Maps, OpenStreetMap, and community contributions
              </Typography>
              <Button size="small" startIcon={<InfoIcon />}>
                How safety ratings work
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        {/* Area Information */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 0, height: '100%' }}>
            <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
              <Typography variant="h6" gutterBottom>
                Area Information
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Select an area on the map or search to view detailed information
              </Typography>
            </Box>
            
            <Box sx={{ maxHeight: 500, overflow: 'auto' }}>
              {areaData.map((area) => (
                <Card 
                  key={area.id} 
                  sx={{ 
                    m: 2, 
                    cursor: 'pointer',
                    '&:hover': { boxShadow: theme.shadows[4] },
                    transition: 'box-shadow 0.3s ease-in-out',
                  }}
                  onClick={() => setSelectedArea(area.id)}
                  variant={selectedArea === area.id ? 'elevation' : 'outlined'}
                  elevation={selectedArea === area.id ? 4 : 1}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          {area.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {area.city}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <SecurityIcon color="primary" fontSize="small" sx={{ mr: 0.5 }} />
                        <Typography variant="body2" fontWeight="bold">
                          {area.safetyRating}/5
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Typography variant="body2" paragraph>
                      {area.description}
                    </Typography>
                    
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Average Rent:
                      </Typography>
                      <Typography variant="body2">
                        {area.averageRent} per month
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Popular Colleges:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {area.popularColleges.map((college, index) => (
                          <Typography 
                            key={index} 
                            variant="body2"
                            sx={{
                              bgcolor: 'primary.light',
                              color: 'primary.contrastText',
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                              fontSize: '0.75rem',
                            }}
                          >
                            {college}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                    
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Amenities Nearby:
                      </Typography>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <SchoolIcon fontSize="small" sx={{ mr: 0.5 }} />
                            <Typography variant="body2">
                              {area.amenities.colleges} Colleges
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <DirectionsBusIcon fontSize="small" sx={{ mr: 0.5 }} />
                            <Typography variant="body2">
                              {area.amenities.busStops} Bus Stops
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <RestaurantIcon fontSize="small" sx={{ mr: 0.5 }} />
                            <Typography variant="body2">
                              {area.amenities.restaurants} Restaurants
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocalHospitalIcon fontSize="small" sx={{ mr: 0.5 }} />
                            <Typography variant="body2">
                              {area.amenities.hospitals} Hospitals
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocalGroceryStoreIcon fontSize="small" sx={{ mr: 0.5 }} />
                            <Typography variant="body2">
                              {area.amenities.groceryStores} Grocery Stores
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                      <Button 
                        size="small" 
                        startIcon={<LocationOnIcon />}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Logic to center map on this area
                        }}
                      >
                        Show on Map
                      </Button>
                      <Button 
                        size="small" 
                        variant="contained"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Logic to view accommodations in this area
                        }}
                      >
                        View Accommodations
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Safety Rating Information */}
      <Paper sx={{ p: 3, mt: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Understanding Safety Ratings
            </Typography>
            <Typography variant="body2" paragraph>
              Our safety ratings are calculated based on multiple data sources to give you a comprehensive view of area safety:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Police Data:</strong> Official crime statistics from local police departments
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>User Reports:</strong> Crowdsourced safety reports from our community members
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Infrastructure:</strong> Street lighting, CCTV coverage, and emergency services proximity
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Student Feedback:</strong> Specific safety concerns and experiences from student residents
              </Typography>
            </Box>
            <Typography variant="body2">
              Ratings are updated monthly to ensure you have the most current information available.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, bgcolor: theme.palette.grey[100], borderRadius: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Safety Rating Scale
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating value={5} readOnly size="small" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  <strong>4.5-5.0:</strong> Excellent - Very safe at all hours with strong security presence
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating value={4} readOnly size="small" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  <strong>3.5-4.4:</strong> Good - Generally safe with occasional minor incidents
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating value={3} readOnly size="small" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  <strong>2.5-3.4:</strong> Average - Safe during daytime, exercise caution at night
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating value={2} readOnly size="small" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  <strong>1.5-2.4:</strong> Below Average - Some safety concerns, not recommended for solo students
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={1} readOnly size="small" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  <strong>1.0-1.4:</strong> Poor - Significant safety issues, not recommended
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default LocationIntelligence;