import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
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
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import WcIcon from '@mui/icons-material/Wc';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MovieIcon from '@mui/icons-material/Movie';
import CodeIcon from '@mui/icons-material/Code';

function RoommateFinder() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Filter states
  const [college, setCollege] = useState('');
  const [gender, setGender] = useState('all');
  const [ageRange, setAgeRange] = useState([18, 30]);
  const [sortBy, setSortBy] = useState('compatibility');
  const [interests, setInterests] = useState({
    music: false,
    sports: false,
    cooking: false,
    movies: false,
    coding: false,
    reading: false,
  });
  
  // Sample roommate profiles
  const roommateProfiles = [
    {
      id: 1,
      name: 'Rahul S.',
      age: 21,
      gender: 'Male',
      college: 'Delhi University',
      course: 'B.Tech Computer Science',
      year: '3rd Year',
      budget: '₹8,000 - ₹12,000',
      location: 'North Campus, Delhi',
      interests: ['Music', 'Gaming', 'Coding'],
      compatibility: 85,
      avatar: 'https://via.placeholder.com/100',
      verified: true,
      about: "Hi, I'm a CS student looking for a roommate who is clean and respects privacy. I usually study late nights and enjoy gaming on weekends.",
    },
    {
      id: 2,
      name: 'Priya M.',
      age: 22,
      gender: 'Female',
      college: 'Bangalore University',
      course: 'MBA Finance',
      year: '1st Year',
      budget: '₹10,000 - ₹15,000',
      location: 'Koramangala, Bangalore',
      interests: ['Reading', 'Travel', 'Cooking'],
      compatibility: 72,
      avatar: 'https://via.placeholder.com/100',
      verified: true,
      about: "MBA student looking for a female roommate. I'm organized, enjoy cooking, and prefer a quiet environment for studying. I'm an early riser.",
    },
    {
      id: 3,
      name: 'Amit K.',
      age: 20,
      gender: 'Male',
      college: 'IIT Bombay',
      course: 'B.Tech Mechanical',
      year: '2nd Year',
      budget: '₹7,000 - ₹10,000',
      location: 'Powai, Mumbai',
      interests: ['Sports', 'Movies', 'Reading'],
      compatibility: 68,
      avatar: 'https://via.placeholder.com/100',
      verified: true,
      about: 'Mechanical engineering student who loves sports and fitness. Looking for a roommate with similar interests. I keep my space clean and organized.',
    },
    {
      id: 4,
      name: 'Sneha R.',
      age: 19,
      gender: 'Female',
      college: 'Christ University',
      course: 'BBA',
      year: '1st Year',
      budget: '₹9,000 - ₹14,000',
      location: 'Koramangala, Bangalore',
      interests: ['Music', 'Dance', 'Movies'],
      compatibility: 91,
      avatar: 'https://via.placeholder.com/100',
      verified: true,
      about: "First-year BBA student looking for a female roommate. I'm sociable, enjoy music and dance. Looking for someone who is friendly and respects personal space.",
    },
    {
      id: 5,
      name: 'Vikram S.',
      age: 23,
      gender: 'Male',
      college: 'IIT Madras',
      course: 'M.Tech Computer Science',
      year: '1st Year',
      budget: '₹10,000 - ₹15,000',
      location: 'Adyar, Chennai',
      interests: ['Coding', 'Reading', 'Chess'],
      compatibility: 78,
      avatar: 'https://via.placeholder.com/100',
      verified: true,
      about: 'M.Tech student who spends most time coding and reading. Looking for a quiet roommate who respects privacy. Non-smoker preferred.',
    },
    {
      id: 6,
      name: 'Neha G.',
      age: 21,
      gender: 'Female',
      college: 'Symbiosis Pune',
      course: 'BBA',
      year: '3rd Year',
      budget: '₹12,000 - ₹18,000',
      location: 'Viman Nagar, Pune',
      interests: ['Travel', 'Cooking', 'Photography'],
      compatibility: 65,
      avatar: 'https://via.placeholder.com/100',
      verified: true,
      about: "I'm a foodie who loves cooking and photography. Looking for a roommate who is clean and organized. I occasionally have friends over for dinner.",
    },
  ];

  const handleInterestChange = (event) => {
    setInterests({
      ...interests,
      [event.target.name]: event.target.checked,
    });
  };

  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
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

      {/* College Filter */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          College
        </Typography>
        <TextField
          fullWidth
          placeholder="Search by college name"
          variant="outlined"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SchoolIcon color="primary" />
              </InputAdornment>
            ),
          }}
          size="small"
        />
      </Box>

      {/* Gender Preference Filter */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Gender Preference
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio size="small" />} label="All" />
            <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
            <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Interests Filter */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Interests
        </Typography>
        <FormGroup>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interests.music}
                    onChange={handleInterestChange}
                    name="music"
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MusicNoteIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">Music</Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interests.sports}
                    onChange={handleInterestChange}
                    name="sports"
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SportsBasketballIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">Sports</Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interests.cooking}
                    onChange={handleInterestChange}
                    name="cooking"
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <RestaurantIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">Cooking</Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interests.movies}
                    onChange={handleInterestChange}
                    name="movies"
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MovieIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">Movies</Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interests.coding}
                    onChange={handleInterestChange}
                    name="coding"
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CodeIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">Coding</Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interests.reading}
                    onChange={handleInterestChange}
                    name="reading"
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocalLibraryIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">Reading</Typography>
                  </Box>
                }
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
        Find Your Perfect Roommate
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Connect with potential roommates based on college, lifestyle, and preferences
      </Typography>

      {/* Search and Sort Bar */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search by name, college, or location"
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
                <MenuItem value="compatibility">Compatibility</MenuItem>
                <MenuItem value="recent">Most Recent</MenuItem>
                <MenuItem value="age_asc">Age: Low to High</MenuItem>
                <MenuItem value="age_desc">Age: High to Low</MenuItem>
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
              {roommateProfiles.length} potential roommates found
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

        {/* Roommate Profiles */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {roommateProfiles.map((profile) => (
              <Grid item key={profile.id} xs={12} sm={6} lg={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ position: 'relative' }}>
                      <Avatar
                        src={profile.avatar}
                        alt={profile.name}
                        sx={{ width: 100, height: 100, mb: 2 }}
                      />
                      {profile.verified && (
                        <VerifiedIcon
                          color="primary"
                          sx={{
                            position: 'absolute',
                            bottom: 10,
                            right: -5,
                            bgcolor: 'white',
                            borderRadius: '50%',
                          }}
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                      }}
                    >
                      {profile.compatibility}%
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {profile.name}, {profile.age}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <WcIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                      <Typography variant="body2">{profile.gender}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <SchoolIcon fontSize="small" color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body2">{profile.college}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {profile.course}, {profile.year}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOnIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {profile.location}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      Budget: {profile.budget}/month
                    </Typography>
                    <Divider sx={{ width: '100%', mb: 2 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                      {profile.about}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom sx={{ textAlign: 'center' }}>
                        Interests
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                        {profile.interests.map((interest, index) => (
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
                              mb: 1,
                            }}
                          >
                            {interest}
                          </Typography>
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                  <Box sx={{ p: 2, mt: 'auto' }}>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Button
                          variant="outlined"
                          fullWidth
                          component={RouterLink}
                          to={`/roommates/${profile.id}`}
                          startIcon={<PersonIcon />}
                        >
                          Profile
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          fullWidth
                          startIcon={<ChatIcon />}
                        >
                          Connect
                        </Button>
                      </Grid>
                    </Grid>
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

export default RoommateFinder;