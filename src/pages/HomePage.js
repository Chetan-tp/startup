import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  Divider,
  Avatar,
  Rating,
  Chip,
  alpha,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import MapIcon from '@mui/icons-material/Map';
import DescriptionIcon from '@mui/icons-material/Description';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

function HomePage() {
  // Sample featured accommodations
  const featuredAccommodations = [
    {
      id: 1,
      title: 'Modern Studio near Delhi University',
      type: '1BHK',
      price: 12000,
      location: 'North Campus, Delhi',
      image: 'https://via.placeholder.com/300x200',
      rating: 4.5,
      reviews: 28,
      verified: true,
    },
    {
      id: 2,
      title: 'Spacious 2BHK with Balcony',
      type: '2BHK',
      price: 18000,
      location: 'Koramangala, Bangalore',
      image: 'https://via.placeholder.com/300x200',
      rating: 4.2,
      reviews: 15,
      verified: true,
    },
    {
      id: 3,
      title: 'PG with Meals near IIT Bombay',
      type: 'PG',
      price: 9000,
      location: 'Powai, Mumbai',
      image: 'https://via.placeholder.com/300x200',
      rating: 4.0,
      reviews: 42,
      verified: true,
    },
  ];

  // Sample roommate profiles
  const roommateProfiles = [
    {
      id: 1,
      name: 'Rahul S.',
      age: 21,
      college: 'Delhi University',
      course: 'B.Tech Computer Science',
      interests: ['Reading', 'Gaming', 'Cooking'],
      avatar: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Priya M.',
      age: 22,
      college: 'Bangalore University',
      course: 'MBA Finance',
      interests: ['Music', 'Travel', 'Yoga'],
      avatar: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Amit K.',
      age: 20,
      college: 'IIT Bombay',
      course: 'B.Tech Mechanical',
      interests: ['Sports', 'Movies', 'Photography'],
      avatar: 'https://via.placeholder.com/100',
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Neha Sharma',
      college: 'Delhi University',
      text: 'StudentStay made finding accommodation near my college so easy! The verified listings gave me peace of mind, and I found a great place within my budget.',
      avatar: 'https://via.placeholder.com/60',
      rating: 5,
    },
    {
      id: 2,
      name: 'Vikram Patel',
      college: 'IIT Madras',
      text: 'The roommate finder feature is amazing! I found someone with similar interests and study habits, which made my college experience much better.',
      avatar: 'https://via.placeholder.com/60',
      rating: 4,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://source.unsplash.com/random?university)',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Increase the priority of the hero background image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
            <Typography component="h1" variant="h2" color="inherit" gutterBottom>
              Find Your Perfect Student Accommodation
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Verified properties, roommate matching, and everything students need for hassle-free housing
            </Typography>
            <Box
              sx={{
                mt: 4,
                p: 2,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: 3,
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={5}>
                  <TextField
                    fullWidth
                    placeholder="Where do you want to stay?"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <TextField
                    fullWidth
                    placeholder="Budget, Property Type, Amenities"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HomeIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SearchIcon />}
                    component={RouterLink}
                    to="/accommodations"
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Why Choose StudentStay?
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          We make finding student accommodation simple, safe, and stress-free
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <Avatar sx={{ width: 60, height: 60, bgcolor: 'primary.main' }}>
                  <HomeIcon fontSize="large" />
                </Avatar>
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Verified Accommodations
                </Typography>
                <Typography>
                  All listings are verified with photos and videos. We ensure every property meets our quality standards.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <Avatar sx={{ width: 60, height: 60, bgcolor: 'primary.main' }}>
                  <PeopleIcon fontSize="large" />
                </Avatar>
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Roommate Matching
                </Typography>
                <Typography>
                  Find compatible roommates based on lifestyle, college, and preferences to share your living space.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <Avatar sx={{ width: 60, height: 60, bgcolor: 'primary.main' }}>
                  <MapIcon fontSize="large" />
                </Avatar>
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Location Intelligence
                </Typography>
                <Typography>
                  Explore neighborhoods with our interactive maps showing colleges, transport, food options, and safety ratings.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <Avatar sx={{ width: 60, height: 60, bgcolor: 'primary.main' }}>
                  <DescriptionIcon fontSize="large" />
                </Avatar>
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Rent Agreements
                </Typography>
                <Typography>
                  Create legally valid rent agreements online with student-friendly terms and transparent conditions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <Avatar sx={{ width: 60, height: 60, bgcolor: 'primary.main' }}>
                  <ForumIcon fontSize="large" />
                </Avatar>
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Community Support
                </Typography>
                <Typography>
                  Join our community for reviews, local tips, and guides. Get 24/7 chat support for any queries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <Avatar sx={{ width: 60, height: 60, bgcolor: 'primary.main' }}>
                  <LocalOfferIcon fontSize="large" />
                </Avatar>
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Exclusive Offers
                </Typography>
                <Typography>
                  Access special deals on moving services, furniture rentals, meal plans, and laundry services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Accommodations */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" component="h2">
              Featured Accommodations
            </Typography>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/accommodations"
              endIcon={<SearchIcon />}
            >
              View All
            </Button>
          </Box>

          <Grid container spacing={4}>
            {featuredAccommodations.map((accommodation) => (
              <Grid item key={accommodation.id} xs={12} sm={6} md={4}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={accommodation.image}
                      alt={accommodation.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        bgcolor: alpha('#fff', 0.9),
                        '&:hover': {
                          bgcolor: '#fff',
                        },
                      }}
                    >
                      <FavoriteBorderIcon />
                    </IconButton>
                    {accommodation.verified && (
                      <Chip
                        icon={<VerifiedIcon />}
                        label="Verified"
                        color="primary"
                        size="small"
                        sx={{
                          position: 'absolute',
                          bottom: 12,
                          left: 12,
                          fontWeight: 'bold',
                        }}
                      />
                    )}
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                      <Typography variant="h5" color="primary.main" fontWeight="bold">
                        ₹{accommodation.price.toLocaleString()}/mo
                      </Typography>
                      <Chip 
                        label={accommodation.type} 
                        color="primary" 
                        variant="outlined"
                        size="small"
                        sx={{ fontWeight: 'bold' }}
                      />
                    </Box>
                    <Typography gutterBottom variant="h6" component="h3" sx={{ mb: 2, minHeight: '3em' }}>
                      {accommodation.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOnIcon fontSize="small" color="primary" />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                        {accommodation.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating value={accommodation.rating} precision={0.5} size="small" readOnly />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          ({accommodation.reviews})
                        </Typography>
                      </Box>
                      <Chip 
                        icon={<StarIcon sx={{ color: '#FFD700' }} />}
                        label={accommodation.rating} 
                        size="small"
                        sx={{ fontWeight: 'bold' }}
                      />
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 3, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      component={RouterLink}
                      to={`/accommodations/${accommodation.id}`}
                      size="large"
                      sx={{ py: 1.5 }}
                    >
                      View Details
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Roommate Finder Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2">
            Find Your Perfect Roommate
          </Typography>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/roommates"
            endIcon={<PeopleIcon />}
          >
            View All Profiles
          </Button>
        </Box>

        <Grid container spacing={4}>
          {roommateProfiles.map((profile) => (
            <Grid item key={profile.id} xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ 
                  p: 4, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0.02) 100%)',
                }}>
                  <Avatar
                    src={profile.avatar}
                    alt={profile.name}
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mb: 2,
                      border: 3,
                      borderColor: 'primary.main',
                      boxShadow: 3,
                    }}
                  />
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    {profile.name}, {profile.age}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <SchoolIcon fontSize="small" color="primary" sx={{ mr: 1 }} />
                    <Typography variant="body1" fontWeight="medium">{profile.college}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {profile.course}
                  </Typography>
                  <Divider sx={{ width: '60%', my: 2 }} />
                  <Box sx={{ mt: 2, width: '100%' }}>
                    <Typography variant="subtitle2" gutterBottom fontWeight="bold" textAlign="center">
                      Interests
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ mt: 1 }}>
                      {profile.interests.map((interest, index) => (
                        <Chip
                          key={index}
                          label={interest}
                          size="small"
                          sx={{
                            fontWeight: 'medium',
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Box>
                <Box sx={{ p: 3 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    component={RouterLink}
                    to={`/roommates/${profile.id}`}
                    size="large"
                    sx={{ py: 1.5 }}
                  >
                    View Profile
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            How StudentStay Works
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
            Finding your ideal student accommodation in just a few simple steps
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                  <Typography variant="h4">1</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  Sign Up
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Create your profile with your college, budget, and preferences
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                  <Typography variant="h4">2</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  Browse Listings
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View recommended accommodations or roommate matches
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                  <Typography variant="h4">3</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  Schedule Visits
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Book in-person visits or take virtual tours of properties
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                  <Typography variant="h4">4</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  Book & Move In
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Finalize your booking, sign agreements, and move into your new home
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/register"
            >
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          What Students Say
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Hear from students who found their perfect accommodation through StudentStay
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item key={testimonial.id} xs={12} md={6}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1">{testimonial.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.college}
                    </Typography>
                  </Box>
                </Box>
                <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                <Typography variant="body1" paragraph sx={{ flex: 1 }}>
                  "{testimonial.text}"
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Trust & Safety Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Your Safety Is Our Priority
              </Typography>
              <Typography variant="body1" paragraph>
                We've implemented comprehensive measures to ensure your accommodation experience is safe and secure.
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <VerifiedIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">Verified Properties</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SecurityIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">Area Safety Ratings</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <VerifiedIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">KYC Verification</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SecurityIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">24/7 Support</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Button
                variant="outlined"
                color="inherit"
                component={RouterLink}
                to="/safety"
                sx={{ mt: 2 }}
              >
                Learn More About Safety
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://via.placeholder.com/600x400"
                alt="Safety First"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ my: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Ready to Find Your Perfect Student Home?
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
          Join thousands of students who've found their ideal accommodation with StudentStay
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/register"
            sx={{ px: 4, py: 1.5 }}
          >
            Sign Up as Student
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={RouterLink}
            to="/register-property"
            sx={{ px: 4, py: 1.5 }}
          >
            List Your Property
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;