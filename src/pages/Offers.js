import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FilterListIcon from '@mui/icons-material/FilterList';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';

// Tab Panel component for the tabbed interface
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`offers-tabpanel-${index}`}
      aria-labelledby={`offers-tab-${index}`}
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

function Offers() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  
  // Sample offers data
  const offers = [
    {
      id: 1,
      title: '50% OFF on First Month Rent',
      provider: 'StayEasy PG',
      providerLogo: 'https://via.placeholder.com/40',
      category: 'Accommodation',
      description: 'Get 50% off on your first month rent when you book any room or bed at StayEasy PG. Valid for minimum 6 months stay. Use code STUDENT50 at checkout.',
      image: 'https://via.placeholder.com/600x300',
      location: 'Delhi',
      validUntil: '2023-12-31',
      couponCode: 'STUDENT50',
      rating: 4.2,
      reviewCount: 45,
      tags: ['PG', 'Hostel', 'Rent'],
      saved: false,
      verified: true,
    },
    {
      id: 2,
      title: '₹1000 OFF on Furniture Rental',
      provider: 'RentMyStuff',
      providerLogo: 'https://via.placeholder.com/40',
      category: 'Furniture',
      description: 'Get ₹1000 off on your first furniture rental package. Choose from beds, study tables, chairs, and more. Minimum rental value of ₹3000 required.',
      image: 'https://via.placeholder.com/600x300',
      location: 'Bangalore',
      validUntil: '2023-11-30',
      couponCode: 'NEWSTUDENT1000',
      rating: 4.5,
      reviewCount: 78,
      tags: ['Furniture', 'Rental', 'Home'],
      saved: true,
      verified: true,
    },
    {
      id: 3,
      title: '20% OFF on Monthly Tiffin Service',
      provider: 'HomeFoods',
      providerLogo: 'https://via.placeholder.com/40',
      category: 'Food',
      description: 'Enjoy 20% off on your first month subscription to our tiffin service. Homemade food delivered to your doorstep. Choose from various meal plans.',
      image: 'https://via.placeholder.com/600x300',
      location: 'Mumbai',
      validUntil: '2023-10-15',
      couponCode: 'TIFFIN20',
      rating: 4.7,
      reviewCount: 124,
      tags: ['Food', 'Tiffin', 'Meal'],
      saved: false,
      verified: true,
    },
    {
      id: 4,
      title: 'Free First Pickup on Laundry Service',
      provider: 'CleanFresh',
      providerLogo: 'https://via.placeholder.com/40',
      category: 'Laundry',
      description: 'Get your first laundry pickup absolutely free when you sign up for our monthly laundry service. We offer washing, ironing, and dry cleaning services.',
      image: 'https://via.placeholder.com/600x300',
      location: 'Pune',
      validUntil: '2023-12-15',
      couponCode: 'FIRSTWASH',
      rating: 4.0,
      reviewCount: 56,
      tags: ['Laundry', 'Cleaning', 'Service'],
      saved: false,
      verified: false,
    },
    {
      id: 5,
      title: '15% OFF on Moving Services',
      provider: 'QuickShift Movers',
      providerLogo: 'https://via.placeholder.com/40',
      category: 'Moving',
      description: 'Moving to a new place? Get 15% off on our moving services. We help you pack, transport, and unpack your belongings safely and efficiently.',
      image: 'https://via.placeholder.com/600x300',
      location: 'Chennai',
      validUntil: '2023-11-30',
      couponCode: 'MOVEME15',
      rating: 4.3,
      reviewCount: 89,
      tags: ['Moving', 'Transport', 'Relocation'],
      saved: true,
      verified: true,
    },
    {
      id: 6,
      title: '25% OFF on Study Table & Chair Set',
      provider: 'StudyBuddy Furniture',
      providerLogo: 'https://via.placeholder.com/40',
      category: 'Furniture',
      description: 'Get 25% off on our ergonomic study table and chair set. Perfect for long study sessions. Free assembly and delivery included.',
      image: 'https://via.placeholder.com/600x300',
      location: 'Bangalore',
      validUntil: '2023-10-31',
      couponCode: 'STUDY25',
      rating: 4.6,
      reviewCount: 67,
      tags: ['Furniture', 'Study', 'Ergonomic'],
      saved: false,
      verified: true,
    },
  ];
  
  // Sample exclusive deals data
  const exclusiveDeals = [
    {
      id: 101,
      title: 'Exclusive: 3 Months Free WiFi',
      provider: 'SpeedNet',
      providerLogo: 'https://via.placeholder.com/40',
      category: 'Internet',
      description: 'Get 3 months of free high-speed WiFi when you sign up for our annual student plan. Unlimited data with speeds up to 100 Mbps.',
      image: 'https://via.placeholder.com/600x300',
      location: 'All Cities',
      validUntil: '2023-12-31',
      couponCode: 'STUDENT3FREE',
      rating: 4.4,
      reviewCount: 112,
      tags: ['Internet', 'WiFi', 'Connectivity'],
      saved: false,
      verified: true,
      exclusive: true,
    },
    {
      id: 102,
      title: 'Exclusive: Free Gym Membership with 1-Year PG Contract',
      provider: 'FitLife Hostels',
      providerLogo: 'https://via.placeholder.com/40',
      category: 'Accommodation',
      description: 'Sign a 1-year contract with any of our PG accommodations and get a free 6-month membership to FitLife Gym worth ₹6000.',
      image: 'https://via.placeholder.com/600x300',
      location: 'Mumbai',
      validUntil: '2023-11-15',
      couponCode: 'FITPG2023',
      rating: 4.8,
      reviewCount: 56,
      tags: ['PG', 'Gym', 'Fitness'],
      saved: true,
      verified: true,
      exclusive: true,
    },
  ];
  
  // Sample partner brands data
  const partnerBrands = [
    {
      id: 201,
      name: 'ComfortStay PG',
      logo: 'https://via.placeholder.com/100',
      category: 'Accommodation',
      offerCount: 5,
    },
    {
      id: 202,
      name: 'HomeMeals',
      logo: 'https://via.placeholder.com/100',
      category: 'Food',
      offerCount: 3,
    },
    {
      id: 203,
      name: 'MoveQuick',
      logo: 'https://via.placeholder.com/100',
      category: 'Moving',
      offerCount: 2,
    },
    {
      id: 204,
      name: 'StudyDesk',
      logo: 'https://via.placeholder.com/100',
      category: 'Furniture',
      offerCount: 4,
    },
    {
      id: 205,
      name: 'CleanPro',
      logo: 'https://via.placeholder.com/100',
      category: 'Laundry',
      offerCount: 2,
    },
    {
      id: 206,
      name: 'FastNet',
      logo: 'https://via.placeholder.com/100',
      category: 'Internet',
      offerCount: 3,
    },
  ];
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };
  
  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };
  
  // Offer Card Component
  const OfferCard = ({ offer }) => {
    const [saved, setSaved] = useState(offer.saved);
    
    const handleSave = () => {
      setSaved(!saved);
    };
    
    const handleCopyCode = () => {
      navigator.clipboard.writeText(offer.couponCode);
      // In a real app, you would show a toast notification here
      alert(`Coupon code ${offer.couponCode} copied to clipboard!`);
    };
    
    return (
      <Card sx={{ mb: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {offer.exclusive && (
          <Box 
            sx={{ 
              bgcolor: theme.palette.secondary.main, 
              color: 'white', 
              py: 0.5, 
              px: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <LocalOfferIcon fontSize="small" />
            <Typography variant="subtitle2">Exclusive Student Deal</Typography>
          </Box>
        )}
        
        <CardMedia
          component="img"
          height="160"
          image={offer.image}
          alt={offer.title}
        />
        
        <CardHeader
          avatar={
            <Box sx={{ position: 'relative' }}>
              <Avatar src={offer.providerLogo} alt={offer.provider} />
              {offer.verified && (
                <VerifiedIcon 
                  color="primary" 
                  sx={{ 
                    position: 'absolute', 
                    bottom: -5, 
                    right: -5, 
                    fontSize: 16,
                    bgcolor: 'white',
                    borderRadius: '50%',
                  }} 
                />
              )}
            </Box>
          }
          title={
            <Typography variant="subtitle1" component="div" noWrap>
              {offer.title}
            </Typography>
          }
          subheader={
            <Typography variant="caption" color="text.secondary">
              by {offer.provider}
            </Typography>
          }
          action={
            <IconButton onClick={handleSave}>
              {saved ? <BookmarkIcon color="primary" /> : <BookmarkBorderIcon />}
            </IconButton>
          }
        />
        
        <CardContent sx={{ flexGrow: 1, pt: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            {[...Array(5)].map((_, index) => (
              <Box key={index} component="span">
                {index < Math.floor(offer.rating) ? (
                  <StarIcon fontSize="small" color="warning" />
                ) : (
                  <StarBorderIcon fontSize="small" color="warning" />
                )}
              </Box>
            ))}
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {offer.rating} ({offer.reviewCount})
            </Typography>
          </Box>
          
          <Typography variant="body2" color="text.secondary" paragraph>
            {offer.description}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {offer.location}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <AccessTimeIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              Valid until {new Date(offer.validUntil).toLocaleDateString()}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
            {offer.tags.map((tag, index) => (
              <Chip 
                key={index} 
                label={tag} 
                size="small" 
                variant="outlined"
                sx={{ fontSize: '0.75rem' }}
              />
            ))}
          </Box>
        </CardContent>
        
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Paper 
            variant="outlined" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              px: 2,
              py: 1,
              width: '100%',
              bgcolor: 'background.default',
            }}
          >
            <Typography variant="subtitle2" fontFamily="monospace">
              {offer.couponCode}
            </Typography>
            <IconButton size="small" onClick={handleCopyCode}>
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Paper>
        </CardActions>
        
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button variant="contained" fullWidth>
            Redeem Offer
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  // Partner Brand Card Component
  const PartnerBrandCard = ({ brand }) => {
    return (
      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
        <Avatar 
          src={brand.logo} 
          alt={brand.name} 
          variant="square"
          sx={{ width: 80, height: 80, mb: 2 }}
        />
        <Typography variant="subtitle2" align="center" gutterBottom>
          {brand.name}
        </Typography>
        <Chip 
          label={brand.category} 
          size="small" 
          color="primary" 
          variant="outlined"
          sx={{ mb: 1 }}
        />
        <Typography variant="caption" color="text.secondary">
          {brand.offerCount} offers available
        </Typography>
      </Card>
    );
  };
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student Offers & Discounts
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Exclusive deals and discounts for students on accommodation, furniture, food, and more
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="offers tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All Offers" />
          <Tab label="Accommodation" />
          <Tab label="Food & Tiffin" />
          <Tab label="Furniture" />
          <Tab label="Moving & Transport" />
          <Tab label="Laundry & Cleaning" />
          <Tab label="Saved Offers" />
        </Tabs>
      </Box>
      
      {/* Search and Filter Bar */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search for offers, brands, or categories"
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
          <Grid item xs={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Category</InputLabel>
              <Select
                value={categoryFilter}
                label="Category"
                onChange={handleCategoryFilterChange}
              >
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="accommodation">Accommodation</MenuItem>
                <MenuItem value="food">Food & Tiffin</MenuItem>
                <MenuItem value="furniture">Furniture</MenuItem>
                <MenuItem value="moving">Moving & Transport</MenuItem>
                <MenuItem value="laundry">Laundry & Cleaning</MenuItem>
                <MenuItem value="internet">Internet & WiFi</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Location</InputLabel>
              <Select
                value={locationFilter}
                label="Location"
                onChange={handleLocationFilterChange}
              >
                <MenuItem value="">All Locations</MenuItem>
                <MenuItem value="delhi">Delhi</MenuItem>
                <MenuItem value="mumbai">Mumbai</MenuItem>
                <MenuItem value="bangalore">Bangalore</MenuItem>
                <MenuItem value="pune">Pune</MenuItem>
                <MenuItem value="chennai">Chennai</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      
      {/* All Offers Tab */}
      <TabPanel value={tabValue} index={0}>
        {/* Exclusive Deals Section */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" gutterBottom>
            Exclusive Student Deals
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" paragraph>
            Special offers available only for verified students
          </Typography>
          
          <Grid container spacing={3}>
            {exclusiveDeals.map((deal) => (
              <Grid item key={deal.id} xs={12} sm={6} md={4}>
                <OfferCard offer={deal} />
              </Grid>
            ))}
          </Grid>
        </Box>
        
        <Divider sx={{ my: 4 }} />
        
        {/* All Offers Section */}
        <Box>
          <Typography variant="h5" gutterBottom>
            All Student Offers
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" paragraph>
            Discounts and deals to help you save on everyday expenses
          </Typography>
          
          <Grid container spacing={3}>
            {offers.map((offer) => (
              <Grid item key={offer.id} xs={12} sm={6} md={4}>
                <OfferCard offer={offer} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </TabPanel>
      
      {/* Accommodation Tab */}
      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={3}>
          {[...exclusiveDeals, ...offers]
            .filter(offer => offer.category === 'Accommodation')
            .map((offer) => (
              <Grid item key={offer.id} xs={12} sm={6} md={4}>
                <OfferCard offer={offer} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      
      {/* Food & Tiffin Tab */}
      <TabPanel value={tabValue} index={2}>
        <Grid container spacing={3}>
          {offers
            .filter(offer => offer.category === 'Food')
            .map((offer) => (
              <Grid item key={offer.id} xs={12} sm={6} md={4}>
                <OfferCard offer={offer} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      
      {/* Furniture Tab */}
      <TabPanel value={tabValue} index={3}>
        <Grid container spacing={3}>
          {offers
            .filter(offer => offer.category === 'Furniture')
            .map((offer) => (
              <Grid item key={offer.id} xs={12} sm={6} md={4}>
                <OfferCard offer={offer} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      
      {/* Moving & Transport Tab */}
      <TabPanel value={tabValue} index={4}>
        <Grid container spacing={3}>
          {offers
            .filter(offer => offer.category === 'Moving')
            .map((offer) => (
              <Grid item key={offer.id} xs={12} sm={6} md={4}>
                <OfferCard offer={offer} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      
      {/* Laundry & Cleaning Tab */}
      <TabPanel value={tabValue} index={5}>
        <Grid container spacing={3}>
          {offers
            .filter(offer => offer.category === 'Laundry')
            .map((offer) => (
              <Grid item key={offer.id} xs={12} sm={6} md={4}>
                <OfferCard offer={offer} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      
      {/* Saved Offers Tab */}
      <TabPanel value={tabValue} index={6}>
        <Grid container spacing={3}>
          {[...exclusiveDeals, ...offers]
            .filter(offer => offer.saved)
            .map((offer) => (
              <Grid item key={offer.id} xs={12} sm={6} md={4}>
                <OfferCard offer={offer} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      
      {/* Partner Brands Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Our Partner Brands
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" paragraph>
          Trusted partners offering exclusive discounts for students
        </Typography>
        
        <Grid container spacing={3}>
          {partnerBrands.map((brand) => (
            <Grid item key={brand.id} xs={6} sm={4} md={2}>
              <PartnerBrandCard brand={brand} />
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* How It Works Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          How to Redeem Offers
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Avatar 
                sx={{ 
                  width: 60, 
                  height: 60, 
                  bgcolor: theme.palette.primary.main, 
                  margin: '0 auto 16px' 
                }}
              >
                1
              </Avatar>
              <Typography variant="h6" gutterBottom>
                Browse & Save
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Browse through available offers and save the ones you're interested in. Filter by category or location to find relevant deals.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Avatar 
                sx={{ 
                  width: 60, 
                  height: 60, 
                  bgcolor: theme.palette.primary.main, 
                  margin: '0 auto 16px' 
                }}
              >
                2
              </Avatar>
              <Typography variant="h6" gutterBottom>
                Copy Coupon Code
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Click on the offer you want to redeem and copy the coupon code. Make sure to check the validity period and terms of the offer.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Avatar 
                sx={{ 
                  width: 60, 
                  height: 60, 
                  bgcolor: theme.palette.primary.main, 
                  margin: '0 auto 16px' 
                }}
              >
                3
              </Avatar>
              <Typography variant="h6" gutterBottom>
                Redeem & Enjoy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Use the coupon code during checkout on the partner's website or mention it when visiting their store. Enjoy your discount!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      
      {/* Newsletter Subscription */}
      <Paper sx={{ p: 4, mt: 6, bgcolor: theme.palette.primary.light, color: theme.palette.primary.contrastText }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h5" gutterBottom>
              Never Miss a Deal!
            </Typography>
            <Typography variant="body1" paragraph>
              Subscribe to our newsletter to receive the latest offers and exclusive deals directly in your inbox.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                placeholder="Your Email Address"
                variant="outlined"
                size="small"
                sx={{ 
                  bgcolor: 'white',
                  borderRadius: 1,
                }}
              />
              <Button variant="contained" color="secondary">
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Offers;