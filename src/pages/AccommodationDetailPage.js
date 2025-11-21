import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Paper,
  Rating,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Sample accommodation data
const accommodationData = {
  id: 1,
  title: 'Modern 3BHK Apartment near Delhi University',
  type: 'Apartment',
  address: '123 College Road, North Campus, Delhi - 110007',
  price: 18000,
  securityDeposit: 36000,
  rating: 4.5,
  reviewCount: 32,
  images: [
    'https://via.placeholder.com/800x500',
    'https://via.placeholder.com/800x500',
    'https://via.placeholder.com/800x500',
    'https://via.placeholder.com/800x500',
    'https://via.placeholder.com/800x500',
  ],
  description: 'This spacious 3BHK apartment is perfect for students looking for a comfortable living space near Delhi University. The apartment features modern amenities, ample natural light, and is located in a safe neighborhood with easy access to public transportation, markets, and eateries.',
  amenities: [
    { name: 'Wi-Fi', icon: <WifiIcon /> },
    { name: 'Washing Machine', icon: <LocalLaundryServiceIcon /> },
    { name: 'Air Conditioning', icon: <AcUnitIcon /> },
    { name: 'TV', icon: <TvIcon /> },
    { name: 'Refrigerator', icon: <KitchenIcon /> },
    { name: 'Fully Furnished', icon: <MeetingRoomIcon /> },
  ],
  details: {
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    furnished: 'Fully Furnished',
    maxOccupants: 6,
    preferredTenants: 'Students',
    availableFrom: '15 July 2023',
  },
  nearbyPlaces: [
    { name: 'Delhi University North Campus', distance: '0.5 km', icon: <SchoolIcon /> },
    { name: 'Vishwavidyalaya Metro Station', distance: '0.7 km', icon: <DirectionsBusIcon /> },
    { name: 'Kamla Nagar Market', distance: '1.2 km', icon: <LocalGroceryStoreIcon /> },
    { name: 'Hindu Rao Hospital', distance: '2.5 km', icon: <LocalHospitalIcon /> },
    { name: 'Hudson Lane Cafes', distance: '0.8 km', icon: <RestaurantIcon /> },
  ],
  rules: [
    'No smoking inside the apartment',
    'No loud parties after 10 PM',
    'Guests allowed with prior information',
    'Pets not allowed',
    'Electricity charges as per meter reading',
  ],
  landlord: {
    name: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@example.com',
    responseRate: '95%',
    responseTime: 'Within 2 hours',
    verified: true,
    image: 'https://via.placeholder.com/100',
  },
  reviews: [
    {
      id: 1,
      user: 'Ananya Singh',
      date: '15 May 2023',
      rating: 5,
      comment: 'Excellent apartment with great amenities. The location is perfect for university students. Landlord is very cooperative and responsive.',
      userImage: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      user: 'Rahul Sharma',
      date: '2 April 2023',
      rating: 4,
      comment: 'Good apartment with all necessary facilities. Close to the university and market. The only issue is occasional water shortage in summers.',
      userImage: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      user: 'Priya Patel',
      date: '18 March 2023',
      rating: 4.5,
      comment: 'Very spacious and well-maintained apartment. The security is good and the neighborhood is safe for students. Highly recommended!',
      userImage: 'https://via.placeholder.com/50',
    },
  ],
};

// Tab Panel component for the tabbed interface
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`accommodation-tabpanel-${index}`}
      aria-labelledby={`accommodation-tab-${index}`}
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

function AccommodationDetailPage() {
  const { id } = useParams();
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // In a real app, you would fetch the accommodation data based on the ID
  // For this example, we're using the sample data
  const accommodation = accommodationData;
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column - Images and Details */}
        <Grid item xs={12} md={8}>
          {/* Image Gallery */}
          <Paper sx={{ mb: 3, overflow: 'hidden', borderRadius: 2 }}>
            <ImageList
              sx={{ width: '100%', height: 450 }}
              variant="quilted"
              cols={4}
              rowHeight={225}
            >
              <ImageListItem cols={2} rows={2}>
                <img
                  src={accommodation.images[0]}
                  alt={accommodation.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </ImageListItem>
              {accommodation.images.slice(1, 5).map((image, index) => (
                <ImageListItem key={index}>
                  <img
                    src={image}
                    alt={`${accommodation.title} ${index + 1}`}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Paper>
          
          {/* Tabs for Details, Amenities, Location, Reviews */}
          <Box sx={{ width: '100%', mb: 3 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange} 
                aria-label="accommodation details tabs"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Overview" />
                <Tab label="Amenities" />
                <Tab label="Location" />
                <Tab label="Reviews" />
                <Tab label="Rules" />
              </Tabs>
            </Box>
            
            {/* Overview Tab */}
            <TabPanel value={tabValue} index={0}>
              <Typography variant="h6" gutterBottom>
                Property Description
              </Typography>
              <Typography variant="body1" paragraph>
                {accommodation.description}
              </Typography>
              
              <Typography variant="h6" gutterBottom>
                Property Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <MeetingRoomIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Bedrooms
                    </Typography>
                    <Typography variant="h6">
                      {accommodation.details.bedrooms}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <BathtubIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Bathrooms
                    </Typography>
                    <Typography variant="h6">
                      {accommodation.details.bathrooms}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <SquareFootIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Area
                    </Typography>
                    <Typography variant="h6">
                      {accommodation.details.area} sq.ft
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <PeopleIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Max Occupants
                    </Typography>
                    <Typography variant="h6">
                      {accommodation.details.maxOccupants}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              
              <Box sx={{ mt: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Furnished Status:</strong> {accommodation.details.furnished}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Preferred Tenants:</strong> {accommodation.details.preferredTenants}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Available From:</strong> {accommodation.details.availableFrom}
                </Typography>
              </Box>
            </TabPanel>
            
            {/* Amenities Tab */}
            <TabPanel value={tabValue} index={1}>
              <Typography variant="h6" gutterBottom>
                Amenities & Facilities
              </Typography>
              <Grid container spacing={2}>
                {accommodation.amenities.map((amenity, index) => (
                  <Grid item xs={6} sm={4} md={3} key={index}>
                    <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
                      <Box sx={{ mr: 1, color: 'primary.main' }}>
                        {amenity.icon}
                      </Box>
                      <Typography variant="body2">
                        {amenity.name}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              
              <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Additional Features
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Security
                    </Typography>
                    <Typography variant="body2" paragraph>
                      24/7 security guard, CCTV cameras, gated community with intercom
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Parking
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Covered parking available for two-wheelers and one car
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Power Backup
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Inverter backup for essential appliances during power cuts
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Water Supply
                    </Typography>
                    <Typography variant="body2" paragraph>
                      24/7 corporation water supply with additional borewell backup
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </TabPanel>
            
            {/* Location Tab */}
            <TabPanel value={tabValue} index={2}>
              <Typography variant="h6" gutterBottom>
                Location & Nearby Places
              </Typography>
              
              {/* Map Placeholder */}
              <Paper 
                sx={{ 
                  width: '100%', 
                  height: 300, 
                  mb: 3, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  bgcolor: 'grey.100'
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  Map View - In a real app, this would be an interactive map
                </Typography>
              </Paper>
              
              <Typography variant="subtitle1" gutterBottom>
                Nearby Places
              </Typography>
              <Grid container spacing={2}>
                {accommodation.nearbyPlaces.map((place, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ mr: 2, color: 'primary.main' }}>
                        {place.icon}
                      </Box>
                      <Box>
                        <Typography variant="body1">
                          {place.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {place.distance}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Address
                </Typography>
                <Typography variant="body1" paragraph>
                  <LocationOnIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  {accommodation.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The exact location will be shared after booking confirmation.
                </Typography>
              </Box>
            </TabPanel>
            
            {/* Reviews Tab */}
            <TabPanel value={tabValue} index={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ mr: 2 }}>
                  Reviews
                </Typography>
                <Rating 
                  value={accommodation.rating} 
                  precision={0.5} 
                  readOnly 
                  sx={{ mr: 1 }}
                />
                <Typography variant="body2" color="text.secondary">
                  ({accommodation.reviewCount} reviews)
                </Typography>
              </Box>
              
              <List sx={{ width: '100%' }}>
                {accommodation.reviews.map((review) => (
                  <React.Fragment key={review.id}>
                    <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                      <ListItemAvatar>
                        <Avatar src={review.userImage} alt={review.user} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle1">
                              {review.user}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {review.date}
                            </Typography>
                          </Box>
                        }
                        secondary={
                          <>
                            <Rating 
                              value={review.rating} 
                              size="small" 
                              precision={0.5} 
                              readOnly 
                              sx={{ my: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {review.comment}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
              </List>
              
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Write a Review
                </Typography>
                <Rating 
                  name="new-review-rating" 
                  precision={0.5} 
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Share your experience with this accommodation..."
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <Button variant="contained">
                  Submit Review
                </Button>
              </Box>
            </TabPanel>
            
            {/* Rules Tab */}
            <TabPanel value={tabValue} index={4}>
              <Typography variant="h6" gutterBottom>
                House Rules
              </Typography>
              <Paper sx={{ p: 3, mb: 3 }}>
                <List>
                  {accommodation.rules.map((rule, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemText primary={rule} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
              
              <Typography variant="h6" gutterBottom>
                Payment Terms
              </Typography>
              <Paper sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Rent Payment
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Monthly rent to be paid by the 5th of each month. Payment can be made through bank transfer, UPI, or cash.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Security Deposit
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Refundable security deposit equivalent to 2 months' rent. Will be returned at the end of the tenancy after deducting for damages, if any.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Maintenance Charges
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Monthly maintenance charge of ₹1,500 to be paid along with the rent. Covers society maintenance, common area cleaning, and security.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Utility Bills
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Electricity, water, and gas bills to be paid by the tenant as per actual consumption.
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </TabPanel>
          </Box>
        </Grid>
        
        {/* Right Column - Price, Contact, etc. */}
        <Grid item xs={12} md={4}>
          {/* Price Card */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h5" component="div">
                  ₹{accommodation.price}/month
                </Typography>
                <Box>
                  <IconButton aria-label="add to favorites" onClick={toggleFavorite}>
                    {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </Box>
              </Box>
              
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Security Deposit: ₹{accommodation.securityDeposit}
              </Typography>
              
              <Divider sx={{ my: 2 }} />
              
              <Button variant="contained" fullWidth sx={{ mb: 2 }}>
                Book Now
              </Button>
              
              <Button variant="outlined" fullWidth>
                Schedule Visit
              </Button>
            </CardContent>
          </Card>
          
          {/* Landlord Info */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Hosted by {accommodation.landlord.name}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  src={accommodation.landlord.image}
                  alt={accommodation.landlord.name}
                  sx={{ width: 60, height: 60, mr: 2 }}
                />
                <Box>
                  {accommodation.landlord.verified && (
                    <Chip 
                      icon={<VerifiedUserIcon />} 
                      label="Verified Host" 
                      size="small" 
                      color="primary" 
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  )}
                  <Typography variant="body2" color="text.secondary">
                    Response Rate: {accommodation.landlord.responseRate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Response Time: {accommodation.landlord.responseTime}
                  </Typography>
                </Box>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="subtitle1" gutterBottom>
                Contact Information
              </Typography>
              
              <Stack spacing={1}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2">
                    {accommodation.landlord.phone}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2">
                    {accommodation.landlord.email}
                  </Typography>
                </Box>
              </Stack>
              
              <Button 
                variant="outlined" 
                fullWidth 
                startIcon={<WhatsAppIcon />}
                sx={{ mt: 2 }}
              >
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>
          
          {/* Safety Tips */}
          <Paper sx={{ p: 2, bgcolor: theme.palette.grey[50] }}>
            <Typography variant="subtitle1" gutterBottom>
              Safety Tips
            </Typography>
            <Typography variant="body2" paragraph>
              • Always verify the property and documents before making any payment
            </Typography>
            <Typography variant="body2" paragraph>
              • Use our secure payment platform for transactions
            </Typography>
            <Typography variant="body2" paragraph>
              • Report suspicious listings or behavior
            </Typography>
            <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
              Learn more about staying safe
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AccommodationDetailPage;