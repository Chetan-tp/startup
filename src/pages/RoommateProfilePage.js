import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MovieIcon from '@mui/icons-material/Movie';
import PetsIcon from '@mui/icons-material/Pets';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import NoMealsIcon from '@mui/icons-material/NoMeals';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

// Sample roommate data
const roommateData = {
  id: 1,
  name: 'Priya Sharma',
  age: 21,
  gender: 'Female',
  occupation: 'Student',
  college: 'Delhi University',
  course: 'B.Tech Computer Science',
  year: '3rd Year',
  lookingFor: 'Female roommate in North Campus area',
  budget: '₹8,000 - ₹12,000 per month',
  moveInDate: 'July 15, 2023',
  duration: '1 year (entire academic year)',
  bio: 'Hi! I\'m Priya, a Computer Science student at Delhi University. I\'m looking for a female roommate to share an apartment near North Campus. I\'m clean, organized, and respectful of personal space. I enjoy reading, occasional Netflix binges, and exploring new cafes on weekends. I\'m looking for someone who is similarly studious during weekdays but enjoys occasional hangouts and food adventures!',
  profileImage: 'https://via.placeholder.com/150',
  verified: true,
  memberSince: 'March 2023',
  responseRate: '95%',
  interests: [
    { name: 'Reading', icon: <MenuBookIcon /> },
    { name: 'Movies', icon: <MovieIcon /> },
    { name: 'Music', icon: <MusicNoteIcon /> },
    { name: 'Cooking', icon: <RestaurantIcon /> },
    { name: 'Basketball', icon: <SportsBasketballIcon /> },
  ],
  lifestyle: {
    cleanliness: 'Very clean',
    smoking: 'Non-smoker',
    pets: 'No pets, but pet-friendly',
    alcohol: 'Occasional',
    diet: 'Vegetarian',
    guests: 'Occasional friends visit',
    sleepSchedule: 'Early riser (6-7 AM to 11 PM)',
  },
  preferences: {
    roommate: 'Female student, age 20-25',
    location: 'North Campus, Delhi University',
    roomType: 'Shared 2BHK apartment',
    amenities: ['Wi-Fi', 'Washing Machine', 'Study Table', 'AC'],
  },
  socialMedia: {
    instagram: 'priya_sharma21',
    linkedin: 'priyasharma-cs',
    facebook: 'priya.sharma.delhi',
  },
  reviews: [
    {
      id: 1,
      name: 'Neha Gupta',
      relationship: 'Former Roommate',
      date: 'January 2023',
      comment: 'Priya was an excellent roommate for the entire semester we shared an apartment. She\'s clean, respectful of personal space, and always pays her share of bills on time. Highly recommended!',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Rahul Verma',
      relationship: 'Classmate',
      date: 'February 2023',
      comment: 'I\'ve known Priya for two years as a classmate. She\'s responsible, organized, and a great person to be around. Any roommate would be lucky to have her!',
      avatar: 'https://via.placeholder.com/50',
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
      id={`roommate-tabpanel-${index}`}
      aria-labelledby={`roommate-tab-${index}`}
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

function RoommateProfilePage() {
  const { id } = useParams();
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // In a real app, you would fetch the roommate data based on the ID
  // For this example, we're using the sample data
  const roommate = roommateData;
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column - Profile and Details */}
        <Grid item xs={12} md={8}>
          {/* Profile Header */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                src={roommate.profileImage}
                alt={roommate.name}
                sx={{ width: 120, height: 120, mr: 3 }}
              />
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h4" component="h1" sx={{ mr: 1 }}>
                    {roommate.name}
                  </Typography>
                  {roommate.verified && (
                    <Chip 
                      icon={<VerifiedUserIcon />} 
                      label="Verified" 
                      size="small" 
                      color="primary" 
                      variant="outlined"
                    />
                  )}
                </Box>
                <Typography variant="subtitle1" gutterBottom>
                  {roommate.age} • {roommate.gender} • {roommate.occupation}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <SchoolIcon sx={{ fontSize: 16, verticalAlign: 'text-bottom', mr: 0.5 }} />
                  {roommate.college}, {roommate.course}, {roommate.year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <HomeIcon sx={{ fontSize: 16, verticalAlign: 'text-bottom', mr: 0.5 }} />
                  Looking for: {roommate.lookingFor}
                </Typography>
              </Box>
            </Box>
          </Paper>
          
          {/* Tabs for Details */}
          <Box sx={{ width: '100%', mb: 3 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange} 
                aria-label="roommate profile tabs"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="About" />
                <Tab label="Preferences" />
                <Tab label="Lifestyle" />
                <Tab label="Reviews" />
              </Tabs>
            </Box>
            
            {/* About Tab */}
            <TabPanel value={tabValue} index={0}>
              <Typography variant="h6" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                {roommate.bio}
              </Typography>
              
              <Typography variant="h6" gutterBottom>
                Interests & Hobbies
              </Typography>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {roommate.interests.map((interest, index) => (
                  <Grid item key={index}>
                    <Chip
                      icon={interest.icon}
                      label={interest.name}
                      variant="outlined"
                    />
                  </Grid>
                ))}
              </Grid>
              
              <Typography variant="h6" gutterBottom>
                Education & Work
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={roommate.course}
                    secondary={`${roommate.college}, ${roommate.year}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WorkIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Part-time Research Assistant"
                    secondary="Computer Science Department"
                  />
                </ListItem>
              </List>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Social Media
              </Typography>
              <Stack direction="row" spacing={2}>
                {roommate.socialMedia.instagram && (
                  <IconButton color="primary" aria-label="Instagram">
                    <InstagramIcon />
                  </IconButton>
                )}
                {roommate.socialMedia.facebook && (
                  <IconButton color="primary" aria-label="Facebook">
                    <FacebookIcon />
                  </IconButton>
                )}
                {roommate.socialMedia.linkedin && (
                  <IconButton color="primary" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </IconButton>
                )}
                {roommate.socialMedia.twitter && (
                  <IconButton color="primary" aria-label="Twitter">
                    <TwitterIcon />
                  </IconButton>
                )}
              </Stack>
            </TabPanel>
            
            {/* Preferences Tab */}
            <TabPanel value={tabValue} index={1}>
              <Typography variant="h6" gutterBottom>
                Roommate Preferences
              </Typography>
              <Paper sx={{ p: 3, mb: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      <PersonIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                      Ideal Roommate
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {roommate.preferences.roommate}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      <HomeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                      Preferred Location
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {roommate.preferences.location}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      <MusicNoteIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                      Noise Level
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Quiet during study hours, moderate otherwise
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      <LocalActivityIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                      Social Expectations
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Friendly but respects privacy, occasional shared meals
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
              
              <Typography variant="h6" gutterBottom>
                Accommodation Preferences
              </Typography>
              <Paper sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Room Type
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {roommate.preferences.roomType}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Budget
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {roommate.budget}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Move-in Date
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {roommate.moveInDate}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Duration
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {roommate.duration}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Must-have Amenities
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {roommate.preferences.amenities.map((amenity, index) => (
                        <Chip key={index} label={amenity} size="small" />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </TabPanel>
            
            {/* Lifestyle Tab */}
            <TabPanel value={tabValue} index={2}>
              <Typography variant="h6" gutterBottom>
                Lifestyle & Habits
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2, height: '100%' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      <CleaningServicesIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                      Cleanliness
                    </Typography>
                    <Typography variant="body2">
                      {roommate.lifestyle.cleanliness}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2, height: '100%' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      <SmokingRoomsIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                      Smoking
                    </Typography>
                    <Typography variant="body2">
                      {roommate.lifestyle.smoking}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2, height: '100%' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      <PetsIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                      Pets
                    </Typography>
                    <Typography variant="body2">
                      {roommate.lifestyle.pets}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2, height: '100%' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      <NoMealsIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                      Diet
                    </Typography>
                    <Typography variant="body2">
                      {roommate.lifestyle.diet}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2, height: '100%' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      <NightsStayIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                      Sleep Schedule
                    </Typography>
                    <Typography variant="body2">
                      {roommate.lifestyle.sleepSchedule}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2, height: '100%' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      <WbSunnyIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                      Guests
                    </Typography>
                    <Typography variant="body2">
                      {roommate.lifestyle.guests}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Daily Routine
              </Typography>
              <Paper sx={{ p: 3 }}>
                <Typography variant="body2" paragraph>
                  <strong>Weekdays:</strong> I usually wake up around 6:30 AM, go for a morning run, and then head to classes. I'm typically back home by 5 PM and spend evenings studying or working on projects. I prefer quiet time after 9 PM for studying or relaxing.
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Weekends:</strong> More relaxed schedule, but I still wake up relatively early. I enjoy going out with friends, exploring new cafes, or just relaxing at home with a good book or Netflix.
                </Typography>
                <Typography variant="body2">
                  <strong>Study Habits:</strong> I prefer a quiet environment when studying. I usually study in the evening and sometimes late at night before exams. I'm respectful of shared spaces and keep noise to a minimum.
                </Typography>
              </Paper>
            </TabPanel>
            
            {/* Reviews Tab */}
            <TabPanel value={tabValue} index={3}>
              <Typography variant="h6" gutterBottom>
                References & Reviews
              </Typography>
              
              {roommate.reviews.map((review) => (
                <Paper key={review.id} sx={{ p: 3, mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Avatar
                      src={review.avatar}
                      alt={review.name}
                      sx={{ mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1">
                        {review.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {review.relationship} • {review.date}
                      </Typography>
                      <Typography variant="body2">
                        {review.comment}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
              
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Write a Reference
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  If you know Priya, please share your experience to help others.
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Share your experience with Priya as a roommate, classmate, or friend..."
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <Button variant="contained">
                  Submit Reference
                </Button>
              </Box>
            </TabPanel>
          </Box>
        </Grid>
        
        {/* Right Column - Contact, Compatibility, etc. */}
        <Grid item xs={12} md={4}>
          {/* Contact Card */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" component="div">
                  Contact {roommate.name.split(' ')[0]}
                </Typography>
                <IconButton aria-label="add to favorites" onClick={toggleFavorite}>
                  {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                </IconButton>
              </Box>
              
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Member since {roommate.memberSince} • {roommate.responseRate} response rate
              </Typography>
              
              <Divider sx={{ my: 2 }} />
              
              <Button 
                variant="contained" 
                fullWidth 
                startIcon={<MessageIcon />}
                sx={{ mb: 2 }}
              >
                Send Message
              </Button>
              
              <Button variant="outlined" fullWidth>
                Share Profile
              </Button>
            </CardContent>
          </Card>
          
          {/* Compatibility Card */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Compatibility Match
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'inline-flex',
                    width: 120,
                    height: 120,
                  }}
                >
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.light,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h4" component="div" color="primary.main">
                      85%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              
              <Typography variant="body2" align="center" paragraph>
                Based on your preferences and lifestyle
              </Typography>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="subtitle1" gutterBottom>
                What You Have in Common
              </Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Same university" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RestaurantIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Similar food preferences" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NightsStayIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Compatible sleep schedules" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CleaningServicesIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Both value cleanliness" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
          
          {/* Safety Tips */}
          <Paper sx={{ p: 2, bgcolor: theme.palette.grey[50] }}>
            <Typography variant="subtitle1" gutterBottom>
              Safety Tips
            </Typography>
            <Typography variant="body2" paragraph>
              • Always meet potential roommates in public places first
            </Typography>
            <Typography variant="body2" paragraph>
              • Verify identity and references before making arrangements
            </Typography>
            <Typography variant="body2" paragraph>
              • Use our secure messaging system for all communications
            </Typography>
            <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
              Learn more about roommate safety
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RoommateProfilePage;