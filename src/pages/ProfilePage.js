import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
  Badge,
  Switch,
  FormControlLabel,
  Chip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HistoryIcon from '@mui/icons-material/History';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

// Sample user data
const userData = {
  id: 1,
  name: 'Rahul Sharma',
  email: 'rahul.sharma@example.com',
  phone: '+91 9876543210',
  college: 'Delhi University',
  course: 'B.Tech Computer Science',
  year: '3rd Year',
  address: '123 Student Housing, North Campus, Delhi',
  profileImage: 'https://via.placeholder.com/150',
  verified: true,
  memberSince: 'August 2022',
  preferences: {
    accommodationType: 'Private Room',
    budget: '₹8,000 - ₹12,000',
    location: 'North Campus, Delhi',
    roommates: 'Maximum 2',
  },
  savedProperties: [
    {
      id: 1,
      title: 'Modern Studio near Delhi University',
      location: 'North Campus, Delhi',
      price: '₹10,000/month',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      title: 'Spacious 2BHK with Balcony',
      location: 'Koramangala, Bangalore',
      price: '₹18,000/month',
      image: 'https://via.placeholder.com/100',
    },
  ],
  bookingHistory: [
    {
      id: 1,
      propertyName: 'PG with Meals near IIT Bombay',
      landlord: 'Mrs. Patel',
      startDate: '01/08/2022',
      endDate: '31/07/2023',
      amount: '₹9,000/month',
      status: 'Completed',
    },
  ],
  paymentMethods: [
    {
      id: 1,
      type: 'Credit Card',
      last4: '4242',
      expiryDate: '12/25',
      isDefault: true,
    },
  ],
  notifications: {
    emailAlerts: true,
    smsAlerts: true,
    propertyUpdates: true,
    promotionalOffers: false,
  },
};

// Tab Panel component for the tabbed interface
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
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

function ProfilePage() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 9876543210',
    college: 'Delhi University',
    course: 'B.Tech Computer Science',
    year: '3rd Year',
    address: '123 Student Housing, North Campus, Delhi',
  });
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const handleEditToggle = () => {
    setEditMode(!editMode);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  
  const handleSaveProfile = () => {
    // In a real app, you would save the updated profile data to the backend
    setEditMode(false);
  };
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column - Profile and Navigation */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3, textAlign: 'center' }}>
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <IconButton 
                    size="small" 
                    sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      '&:hover': { bgcolor: 'primary.dark' } 
                    }}
                    onClick={handleEditToggle}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                }
              >
                <Avatar
                  src="https://via.placeholder.com/150"
                  alt={userData.name}
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
              </Badge>
            </Box>
            
            <Typography variant="h5" gutterBottom>
              {userData.name}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
              <SchoolIcon fontSize="small" color="primary" sx={{ mr: 1 }} />
              <Typography variant="body2">
                {userData.college}, {userData.year}
              </Typography>
            </Box>
            
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {userData.course}
            </Typography>
            
            {userData.verified && (
              <Chip 
                icon={<VerifiedUserIcon />} 
                label="Verified Student" 
                size="small" 
                color="primary" 
                sx={{ mt: 1 }}
              />
            )}
            
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Member since {userData.memberSince}
            </Typography>
          </Paper>
          
          <Paper sx={{ mb: 3 }}>
            <List component="nav" aria-label="profile navigation">
              <ListItem button selected={tabValue === 0} onClick={(e) => handleTabChange(e, 0)}>
                <ListItemIcon>
                  <PersonIcon color={tabValue === 0 ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Personal Information" />
              </ListItem>
              
              <ListItem button selected={tabValue === 1} onClick={(e) => handleTabChange(e, 1)}>
                <ListItemIcon>
                  <FavoriteIcon color={tabValue === 1 ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Saved Properties" />
              </ListItem>
              
              <ListItem button selected={tabValue === 2} onClick={(e) => handleTabChange(e, 2)}>
                <ListItemIcon>
                  <HistoryIcon color={tabValue === 2 ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Booking History" />
              </ListItem>
              
              <ListItem button selected={tabValue === 3} onClick={(e) => handleTabChange(e, 3)}>
                <ListItemIcon>
                  <PaymentIcon color={tabValue === 3 ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Payment Methods" />
              </ListItem>
              
              <ListItem button selected={tabValue === 4} onClick={(e) => handleTabChange(e, 4)}>
                <ListItemIcon>
                  <NotificationsIcon color={tabValue === 4 ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItem>
              
              <ListItem button selected={tabValue === 5} onClick={(e) => handleTabChange(e, 5)}>
                <ListItemIcon>
                  <SecurityIcon color={tabValue === 5 ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Security" />
              </ListItem>
            </List>
          </Paper>
          
          <Paper sx={{ p: 3, bgcolor: theme.palette.grey[50] }}>
            <Typography variant="subtitle1" gutterBottom>
              Need Help?
            </Typography>
            <Typography variant="body2" paragraph>
              Contact our support team for assistance with your account or bookings.
            </Typography>
            <Button 
              variant="outlined" 
              fullWidth 
              startIcon={<MessageIcon />}
              component="a"
              href="/support"
            >
              Contact Support
            </Button>
          </Paper>
        </Grid>
        
        {/* Right Column - Tab Content */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            {/* Personal Information Tab */}
            <TabPanel value={tabValue} index={0}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">
                  Personal Information
                </Typography>
                {!editMode ? (
                  <Button 
                    variant="outlined" 
                    startIcon={<EditIcon />}
                    onClick={handleEditToggle}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <Box>
                    <Button 
                      variant="contained" 
                      startIcon={<SaveIcon />}
                      onClick={handleSaveProfile}
                      sx={{ mr: 1 }}
                    >
                      Save
                    </Button>
                    <Button 
                      variant="outlined" 
                      startIcon={<CancelIcon />}
                      onClick={handleEditToggle}
                    >
                      Cancel
                    </Button>
                  </Box>
                )}
              </Box>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    disabled={!editMode}
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
                    fullWidth
                    label="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="College/University"
                    name="college"
                    value={userData.college}
                    onChange={handleInputChange}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SchoolIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Course"
                    name="course"
                    value={userData.course}
                    onChange={handleInputChange}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SchoolIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Year"
                    name="year"
                    value={userData.year}
                    onChange={handleInputChange}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SchoolIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={userData.address}
                    onChange={handleInputChange}
                    disabled={!editMode}
                    multiline
                    rows={2}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              
              <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Accommodation Preferences
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Accommodation Type"
                    value="Private Room"
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HomeIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Budget Range"
                    value="₹8,000 - ₹12,000"
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PaymentIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Preferred Location"
                    value="North Campus, Delhi"
                    disabled={!editMode}
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
                    fullWidth
                    label="Roommates"
                    value="Maximum 2"
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            
            {/* Saved Properties Tab */}
            <TabPanel value={tabValue} index={1}>
              <Typography variant="h6" gutterBottom>
                Saved Properties
              </Typography>
              
              {userData.savedProperties && userData.savedProperties.length > 0 ? (
                <Grid container spacing={3}>
                  {userData.savedProperties.map((property) => (
                    <Grid item xs={12} key={property.id}>
                      <Card sx={{ display: 'flex', height: '100%' }}>
                        <CardMedia
                          component="img"
                          sx={{ width: 120 }}
                          image={property.image}
                          alt={property.title}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                          <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h6">
                              {property.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                              <LocationOnIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                              {property.location}
                            </Typography>
                            <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                              {property.price}
                            </Typography>
                          </CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 2 }}>
                            <Button size="small" variant="contained" sx={{ mr: 1 }}>
                              View Details
                            </Button>
                            <IconButton aria-label="remove from favorites" color="error">
                              <FavoriteIcon />
                            </IconButton>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Paper sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    You haven't saved any properties yet.
                  </Typography>
                  <Button 
                    variant="contained" 
                    sx={{ mt: 2 }}
                    component="a"
                    href="/accommodations"
                  >
                    Browse Accommodations
                  </Button>
                </Paper>
              )}
            </TabPanel>
            
            {/* Booking History Tab */}
            <TabPanel value={tabValue} index={2}>
              <Typography variant="h6" gutterBottom>
                Booking History
              </Typography>
              
              {userData.bookingHistory && userData.bookingHistory.length > 0 ? (
                <Grid container spacing={3}>
                  {userData.bookingHistory.map((booking) => (
                    <Grid item xs={12} key={booking.id}>
                      <Paper sx={{ p: 3 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={8}>
                            <Typography variant="h6">{booking.propertyName}</Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              Landlord: {booking.landlord}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                              <Typography variant="body2" sx={{ mr: 2 }}>
                                <strong>Period:</strong> {booking.startDate} to {booking.endDate}
                              </Typography>
                              <Typography variant="body2">
                                <strong>Amount:</strong> {booking.amount}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', sm: 'flex-end' } }}>
                            <Chip 
                              label={booking.status} 
                              color={booking.status === 'Active' ? 'success' : 'default'}
                              size="small"
                              sx={{ mb: 2 }}
                            />
                            <Button variant="outlined" size="small">
                              View Details
                            </Button>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Paper sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    You don't have any booking history yet.
                  </Typography>
                  <Button 
                    variant="contained" 
                    sx={{ mt: 2 }}
                    component="a"
                    href="/accommodations"
                  >
                    Find Accommodation
                  </Button>
                </Paper>
              )}
            </TabPanel>
            
            {/* Payment Methods Tab */}
            <TabPanel value={tabValue} index={3}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">
                  Payment Methods
                </Typography>
                <Button variant="outlined">
                  Add New Payment Method
                </Button>
              </Box>
              
              {userData.paymentMethods && userData.paymentMethods.length > 0 ? (
                <Grid container spacing={3}>
                  {userData.paymentMethods.map((method) => (
                    <Grid item xs={12} key={method.id}>
                      <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CreditCardIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                            <Box>
                              <Typography variant="subtitle1">
                                {method.type} ending in {method.last4}
                                {method.isDefault && (
                                  <Chip 
                                    label="Default" 
                                    size="small" 
                                    color="primary" 
                                    variant="outlined"
                                    sx={{ ml: 1 }}
                                  />
                                )}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Expires {method.expiryDate}
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Button size="small" sx={{ mr: 1 }}>
                              Edit
                            </Button>
                            <Button size="small" color="error">
                              Remove
                            </Button>
                          </Box>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Paper sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    You don't have any payment methods saved.
                  </Typography>
                  <Button 
                    variant="contained" 
                    sx={{ mt: 2 }}
                  >
                    Add Payment Method
                  </Button>
                </Paper>
              )}
            </TabPanel>
            
            {/* Notifications Tab */}
            <TabPanel value={tabValue} index={4}>
              <Typography variant="h6" gutterBottom>
                Notification Preferences
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Manage how you receive notifications and updates from StudentStay
              </Typography>
              
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Email Alerts" 
                    secondary="Receive important updates and alerts via email"
                  />
                  <FormControlLabel 
                    control={
                      <Switch 
                        checked={userData.notifications?.emailAlerts} 
                        onChange={() => {}} 
                        color="primary" 
                      />
                    } 
                    label=""
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="SMS Notifications" 
                    secondary="Receive text messages for booking confirmations and important alerts"
                  />
                  <FormControlLabel 
                    control={
                      <Switch 
                        checked={userData.notifications?.smsAlerts} 
                        onChange={() => {}} 
                        color="primary" 
                      />
                    } 
                    label=""
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="Property Updates" 
                    secondary="Get notified when there are updates to properties you've saved"
                  />
                  <FormControlLabel 
                    control={
                      <Switch 
                        checked={userData.notifications?.propertyUpdates} 
                        onChange={() => {}} 
                        color="primary" 
                      />
                    } 
                    label=""
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="Promotional Offers" 
                    secondary="Receive special offers, discounts, and promotional content"
                  />
                  <FormControlLabel 
                    control={
                      <Switch 
                        checked={userData.notifications?.promotionalOffers} 
                        onChange={() => {}} 
                        color="primary" 
                      />
                    } 
                    label=""
                  />
                </ListItem>
              </List>
              
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained">
                  Save Preferences
                </Button>
              </Box>
            </TabPanel>
            
            {/* Security Tab */}
            <TabPanel value={tabValue} index={5}>
              <Typography variant="h6" gutterBottom>
                Security Settings
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Manage your account security and privacy settings
              </Typography>
              
              <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Change Password
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Current Password"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="New Password"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Confirm New Password"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained">
                      Update Password
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
              
              <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Two-Factor Authentication
                </Typography>
                <Typography variant="body2" paragraph>
                  Add an extra layer of security to your account by enabling two-factor authentication.
                </Typography>
                <Button variant="outlined">
                  Enable Two-Factor Authentication
                </Button>
              </Paper>
              
              <Paper sx={{ p: 3 }}>
                <Typography variant="subtitle1" gutterBottom color="error">
                  Danger Zone
                </Typography>
                <Typography variant="body2" paragraph>
                  Permanently delete your account and all associated data.
                </Typography>
                <Button variant="outlined" color="error">
                  Delete Account
                </Button>
              </Paper>
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProfilePage;