import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Pagination,
  Paper,
  Rating,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedIcon from '@mui/icons-material/Verified';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import KitchenIcon from '@mui/icons-material/Kitchen';
import TvIcon from '@mui/icons-material/Tv';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';

function AccommodationListPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Filter states
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([3000, 25000]);
  const [propertyType, setPropertyType] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');
  const [amenities, setAmenities] = useState({
    wifi: false,
    ac: false,
    laundry: false,
    kitchen: false,
    tv: false,
    furnished: false,
  });
  
  // Sample accommodation data
  const accommodations = [
    {
      id: 1,
      title: 'Modern Studio near Delhi University',
      type: '1BHK',
      price: 12000,
      location: 'North Campus, Delhi',
      distance: '0.5 km from Delhi University',
      image: 'https://via.placeholder.com/300x200',
      rating: 4.5,
      reviews: 28,
      verified: true,
      amenities: ['wifi', 'ac', 'furnished'],
      favorite: false,
    },
    {
      id: 2,
      title: 'Spacious 2BHK with Balcony',
      type: '2BHK',
      price: 18000,
      location: 'Koramangala, Bangalore',
      distance: '1.2 km from Christ University',
      image: 'https://via.placeholder.com/300x200',
      rating: 4.2,
      reviews: 15,
      verified: true,
      amenities: ['wifi', 'ac', 'kitchen', 'tv', 'furnished'],
      favorite: true,
    },
    {
      id: 3,
      title: 'PG with Meals near IIT Bombay',
      type: 'PG',
      price: 9000,
      location: 'Powai, Mumbai',
      distance: '0.8 km from IIT Bombay',
      image: 'https://via.placeholder.com/300x200',
      rating: 4.0,
      reviews: 42,
      verified: true,
      amenities: ['wifi', 'laundry', 'kitchen'],
      favorite: false,
    },
    {
      id: 4,
      title: 'Cozy 1BHK for Students',
      type: '1BHK',
      price: 14000,
      location: 'Viman Nagar, Pune',
      distance: '1.5 km from Symbiosis College',
      image: 'https://via.placeholder.com/300x200',
      rating: 3.8,
      reviews: 19,
      verified: true,
      amenities: ['wifi', 'ac', 'kitchen', 'furnished'],
      favorite: false,
    },
    {
      id: 5,
      title: 'Student PG with AC Rooms',
      type: 'PG',
      price: 8500,
      location: 'Ameerpet, Hyderabad',
      distance: '0.3 km from JNTU',
      image: 'https://via.placeholder.com/300x200',
      rating: 4.1,
      reviews: 33,
      verified: true,
      amenities: ['wifi', 'ac', 'laundry'],
      favorite: false,
    },
    {
      id: 6,
      title: 'Luxury 3BHK for Group Students',
      type: '3BHK',
      price: 24000,
      location: 'Salt Lake, Kolkata',
      distance: '2 km from Jadavpur University',
      image: 'https://via.placeholder.com/300x200',
      rating: 4.7,
      reviews: 12,
      verified: true,
      amenities: ['wifi', 'ac', 'kitchen', 'tv', 'laundry', 'furnished'],
      favorite: true,
    },
  ];

  const handleAmenityChange = (event) => {
    setAmenities({
      ...amenities,
      [event.target.name]: event.target.checked,
    });
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  const toggleFavorite = (id) => {
    // In a real app, this would update the state or call an API
    console.log(`Toggled favorite for accommodation ${id}`);
  };

  // Filter component
  const FiltersComponent = () => (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Filters</Typography>
        {isMobile && (
          <IconButton onClick={toggleMobileFilters}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      <Divider sx={{ mb: 2 }} />

      {/* Location Filter */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Location
        </Typography>
        <TextField
          fullWidth
          placeholder="Search by area, college, or city"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon color="primary" />
              </InputAdornment>
            ),
          }}
          size="small"
        />
      </Box>

      {/* Price Range Filter */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Price Range (₹ per month)
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={3000}
          max={50000}
          step={500}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">₹{priceRange[0]}</Typography>
          <Typography variant="body2">₹{priceRange[1]}</Typography>
        </Box>
      </Box>

      {/* Property Type Filter */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Property Type
        </Typography>
        <FormControl fullWidth size="small">
          <Select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <MenuItem value="all">All Types</MenuItem>
            <MenuItem value="1BHK">1 BHK</MenuItem>
            <MenuItem value="2BHK">2 BHK</MenuItem>
            <MenuItem value="3BHK">3 BHK</MenuItem>
            <MenuItem value="PG">PG/Hostel</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Amenities Filter */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Amenities
        </Typography>
        <FormGroup>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={amenities.wifi}
                    onChange={handleAmenityChange}
                    name="wifi"
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <WifiIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">WiFi</Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={amenities.ac}
                    onChange={handleAmenityChange}
                    name="ac"
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AcUnitIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">AC</Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={amenities.laundry}
                    onChange={handleAmenityChange}
                    name="laundry"
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocalLaundryServiceIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">Laundry</Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={amenities.kitchen}
                    onChange={handleAmenityChange}
                    name="kitchen"
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <KitchenIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">Kitchen</Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={amenities.tv}
                    onChange={handleAmenityChange}
                    name="tv"
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TvIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">TV</Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={amenities.furnished}
                    onChange={handleAmenityChange}
                    name="furnished"
                    size="small"
                  />
                }
                label={<Typography variant="body2">Furnished</Typography>}
              />
            </Grid>
          </Grid>
        </FormGroup>
      </Box>

      {/* More filters can be added here */}

      <Button variant="contained" fullWidth>
        Apply Filters
      </Button>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student Accommodations
      </Typography>

      {/* Search and Sort Bar */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search by property name or location"
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
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                displayEmpty
                startAdornment={
                  <InputAdornment position="start">
                    <SortIcon />
                  </InputAdornment>
                }
              >
                <MenuItem value="recommended">Recommended</MenuItem>
                <MenuItem value="price_low">Price: Low to High</MenuItem>
                <MenuItem value="price_high">Price: High to Low</MenuItem>
                <MenuItem value="rating">Highest Rated</MenuItem>
                <MenuItem value="distance">Nearest to College</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3} sx={{ display: { md: 'none' } }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FilterListIcon />}
              onClick={toggleMobileFilters}
            >
              Filters
            </Button>
          </Grid>
          <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Typography variant="body2">
              {accommodations.length} accommodations found
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        {/* Filters - Desktop */}
        <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Paper sx={{ mb: 3 }}>
            <FiltersComponent />
          </Paper>
        </Grid>

        {/* Filters - Mobile */}
        {isMobile && mobileFiltersOpen && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'background.paper',
              zIndex: 1300,
              overflow: 'auto',
            }}
          >
            <FiltersComponent />
          </Box>
        )}

        {/* Accommodation Listings */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {accommodations.map((accommodation) => (
              <Grid item key={accommodation.id} xs={12} sm={6} lg={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={accommodation.image}
                    alt={accommodation.title}
                  />
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      bgcolor: 'rgba(255, 255, 255, 0.8)',
                      '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                    }}
                    onClick={() => toggleFavorite(accommodation.id)}
                  >
                    {accommodation.favorite ? (
                      <FavoriteIcon color="error" />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="subtitle1" color="primary.main" fontWeight="bold">
                        ₹{accommodation.price}/month
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        bgcolor="primary.main"
                        color="white"
                        px={1}
                        py={0.5}
                        borderRadius={1}
                      >
                        {accommodation.type}
                      </Typography>
                    </Box>
                    <Typography gutterBottom variant="h6" component="h3">
                      {accommodation.title}
                      {accommodation.verified && (
                        <VerifiedIcon color="primary" fontSize="small" sx={{ ml: 1, verticalAlign: 'middle' }} />
                      )}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOnIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                        {accommodation.location}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {accommodation.distance}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={accommodation.rating} precision={0.5} size="small" readOnly />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        ({accommodation.reviews} reviews)
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                      {accommodation.amenities.map((amenity) => {
                        let icon;
                        switch (amenity) {
                          case 'wifi':
                            icon = <WifiIcon fontSize="small" />;
                            break;
                          case 'ac':
                            icon = <AcUnitIcon fontSize="small" />;
                            break;
                          case 'laundry':
                            icon = <LocalLaundryServiceIcon fontSize="small" />;
                            break;
                          case 'kitchen':
                            icon = <KitchenIcon fontSize="small" />;
                            break;
                          case 'tv':
                            icon = <TvIcon fontSize="small" />;
                            break;
                          default:
                            icon = null;
                        }
                        return (
                          icon && (
                            <Box
                              key={amenity}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: 'action.hover',
                                borderRadius: 1,
                                px: 1,
                                py: 0.5,
                                mb: 1,
                              }}
                            >
                              {icon}
                              <Typography variant="caption" sx={{ ml: 0.5 }}>
                                {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                              </Typography>
                            </Box>
                          )
                        );
                      })}
                      {accommodation.amenities.includes('furnished') && (
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: 'action.hover',
                            borderRadius: 1,
                            px: 1,
                            py: 0.5,
                            mb: 1,
                          }}
                        >
                          <Typography variant="caption">Furnished</Typography>
                        </Box>
                      )}
                    </Stack>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      component={RouterLink}
                      to={`/accommodations/${accommodation.id}`}
                    >
                      View Details
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination count={10} color="primary" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AccommodationListPage;