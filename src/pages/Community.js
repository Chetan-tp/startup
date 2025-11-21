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
  Link,
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import VerifiedIcon from '@mui/icons-material/Verified';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import StarHalfIcon from '@mui/icons-material/StarHalf';

// Tab Panel component for the tabbed interface
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`community-tabpanel-${index}`}
      aria-labelledby={`community-tab-${index}`}
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

function Community() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [sortBy, setSortBy] = useState('recent');
  const [filterCity, setFilterCity] = useState('');
  
  // Sample posts data
  const posts = [
    {
      id: 1,
      author: {
        name: 'Priya Sharma',
        avatar: 'https://via.placeholder.com/40',
        college: 'Delhi University',
        verified: true,
      },
      date: '2 days ago',
      title: 'Best affordable cafes around North Campus',
      content: "Hey everyone! I've compiled a list of budget-friendly cafes around North Campus that have good food, WiFi, and are great for studying. My top picks are Cafe Coffee Day for their student discounts, Hudson Lane's Cafeteria & Co for the ambiance, and Chaayos for their unlimited chai options...",
      image: 'https://via.placeholder.com/600x300',
      tags: ['Food', 'Delhi', 'Budget', 'Study Spots'],
      likes: 45,
      comments: 12,
      saved: false,
      liked: false,
      type: 'guide',
    },
    {
      id: 2,
      author: {
        name: 'Rahul Verma',
        avatar: 'https://via.placeholder.com/40',
        college: 'IIT Bombay',
        verified: true,
      },
      date: '1 week ago',
      title: 'Review: PG accommodation in Powai',
      content: "I recently moved into a PG in Powai near IIT campus. Here's my honest review: Pros: Walking distance to campus, clean rooms, good food. Cons: Strict curfew (10 PM), limited laundry facilities, and WiFi can be spotty during peak hours. Overall, I'd rate it 3.5/5 for the price of ₹12,000/month...",
      image: 'https://via.placeholder.com/600x300',
      tags: ['Accommodation', 'Mumbai', 'PG', 'Review'],
      likes: 32,
      comments: 8,
      saved: true,
      liked: true,
      type: 'review',
      rating: 3.5,
    },
    {
      id: 3,
      author: {
        name: 'Aditya Patel',
        avatar: 'https://via.placeholder.com/40',
        college: 'Bangalore University',
        verified: false,
      },
      date: '3 days ago',
      title: 'Looking for roommate in Koramangala',
      content: "Hi everyone! I'm a 2nd year BBA student looking for a roommate to share a 2BHK in Koramangala 5th Block. Rent would be around ₹8,000 per person including maintenance. I'm looking for someone who is clean, respects privacy, and doesn't mind occasional guests. DM me if interested!",
      tags: ['Roommate', 'Bangalore', 'Koramangala'],
      likes: 5,
      comments: 3,
      saved: false,
      liked: false,
      type: 'question',
    },
    {
      id: 4,
      author: {
        name: 'Neha Gupta',
        avatar: 'https://via.placeholder.com/40',
        college: 'Symbiosis Pune',
        verified: true,
      },
      date: '5 days ago',
      title: 'Safety tips for female students in Viman Nagar',
      content: 'As a female student who has lived in Viman Nagar for 2 years, I wanted to share some safety tips: 1. Use Ola/Uber at night instead of autos 2. Join WhatsApp groups of your apartment/PG 3. The area near Phoenix mall is well-lit and safe even late evening 4. Avoid shortcuts through the construction areas...',
      image: 'https://via.placeholder.com/600x300',
      tags: ['Safety', 'Pune', 'Female', 'Tips'],
      likes: 78,
      comments: 23,
      saved: false,
      liked: true,
      type: 'guide',
    },
    {
      id: 5,
      author: {
        name: 'Vikram Singh',
        avatar: 'https://via.placeholder.com/40',
        college: 'IIT Madras',
        verified: true,
      },
      date: '2 weeks ago',
      title: 'Review: Budget-friendly PGs in Adyar',
      content: "After staying in 3 different PGs in Adyar over the last year, here's my comparison: Sri Sai PG: Best food but small rooms (₹9,000/month). Lakshmi Nivas: Spacious rooms but average food (₹10,000/month). Adyar Boys Hostel: Most affordable at ₹7,500/month but has curfew and basic facilities...",
      tags: ['Accommodation', 'Chennai', 'PG', 'Budget', 'Review'],
      likes: 41,
      comments: 15,
      saved: false,
      liked: false,
      type: 'review',
      rating: 4,
    },
  ];
  
  // Sample questions data
  const questions = [
    {
      id: 101,
      author: {
        name: 'Arjun Kumar',
        avatar: 'https://via.placeholder.com/40',
        college: 'Delhi University',
      },
      date: '1 day ago',
      title: 'How to handle landlord asking for 3 months deposit?',
      content: 'I found a nice flat near my college but the landlord is asking for 3 months rent as security deposit. Is this normal in Delhi? Can I negotiate it down to 2 months?',
      tags: ['Legal', 'Deposit', 'Delhi'],
      answers: 7,
      upvotes: 12,
    },
    {
      id: 102,
      author: {
        name: 'Meera Joshi',
        avatar: 'https://via.placeholder.com/40',
        college: 'Bangalore University',
      },
      date: '3 days ago',
      title: 'Best mobile network for Koramangala area?',
      content: "I just moved to Koramangala for college and need to get a new SIM card. Which network has the best coverage and data speeds in this area? I'm considering Jio, Airtel, and Vi.",
      tags: ['Bangalore', 'Utilities', 'Advice'],
      answers: 12,
      upvotes: 8,
    },
    {
      id: 103,
      author: {
        name: 'Sanjay Patel',
        avatar: 'https://via.placeholder.com/40',
        college: 'IIT Bombay',
      },
      date: '1 week ago',
      title: 'How to deal with noisy neighbors in PG?',
      content: "My PG neighbors play loud music until midnight which affects my studies. I've talked to them but they don't listen. The PG owner doesn't seem to care much either. Any suggestions on how to handle this situation?",
      tags: ['PG', 'Advice', 'Mumbai'],
      answers: 15,
      upvotes: 24,
    },
    {
      id: 104,
      author: {
        name: 'Kavita Reddy',
        avatar: 'https://via.placeholder.com/40',
        college: 'Christ University',
      },
      date: '2 days ago',
      title: 'Affordable furniture rental options in Bangalore?',
      content: "I'm moving to a semi-furnished apartment and need to rent a bed, study table, and chair. Which furniture rental service is most affordable and reliable in Bangalore? Has anyone used Furlenco or RentoMojo?",
      tags: ['Furniture', 'Bangalore', 'Budget'],
      answers: 6,
      upvotes: 9,
    },
  ];
  
  // Sample local guides data
  const localGuides = [
    {
      id: 201,
      title: 'North Campus Survival Guide',
      author: 'Priya Sharma',
      college: 'Delhi University',
      date: 'Updated 2 months ago',
      excerpt: 'Everything you need to know about living in North Campus - from accommodation options to the best street food spots.',
      image: 'https://via.placeholder.com/300x150',
      likes: 156,
      bookmarks: 89,
      tags: ['Delhi', 'North Campus', 'Comprehensive'],
    },
    {
      id: 202,
      title: 'Koramangala on a Student Budget',
      author: 'Rahul Verma',
      college: 'Christ University',
      date: 'Updated 1 month ago',
      excerpt: 'How to live, eat, and have fun in Koramangala without breaking the bank. Includes cheap eats, free activities, and budget accommodation tips.',
      image: 'https://via.placeholder.com/300x150',
      likes: 132,
      bookmarks: 76,
      tags: ['Bangalore', 'Budget', 'Food'],
    },
    {
      id: 203,
      title: 'Powai Lake Area Guide for Students',
      author: 'Ananya Desai',
      college: 'IIT Bombay',
      date: 'Updated 3 months ago',
      excerpt: 'A comprehensive guide to the Powai area - covering everything from study spots to weekend activities around the lake.',
      image: 'https://via.placeholder.com/300x150',
      likes: 98,
      bookmarks: 54,
      tags: ['Mumbai', 'Powai', 'Activities'],
    },
  ];
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  
  const handleCityFilterChange = (event) => {
    setFilterCity(event.target.value);
  };
  
  // Post Card Component
  const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(post.liked);
    const [saved, setSaved] = useState(post.saved);
    const [likeCount, setLikeCount] = useState(post.likes);
    
    const handleLike = () => {
      if (liked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setLiked(!liked);
    };
    
    const handleSave = () => {
      setSaved(!saved);
    };
    
    return (
      <Card sx={{ mb: 3 }}>
        <CardHeader
          avatar={
            <Box sx={{ position: 'relative' }}>
              <Avatar src={post.author.avatar} alt={post.author.name} />
              {post.author.verified && (
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="subtitle1" component="span">
                {post.author.name}
              </Typography>
            </Box>
          }
          subheader={
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
              <SchoolIcon fontSize="small" sx={{ mr: 0.5, fontSize: 14 }} />
              <Typography variant="caption" color="text.secondary">
                {post.author.college} • {post.date}
              </Typography>
            </Box>
          }
          action={
            <Chip 
              label={post.type === 'review' ? 'Review' : post.type === 'question' ? 'Question' : 'Guide'} 
              size="small" 
              color={post.type === 'review' ? 'secondary' : post.type === 'question' ? 'info' : 'primary'}
              variant="outlined"
            />
          }
        />
        
        <CardContent sx={{ pt: 0 }}>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          
          {post.type === 'review' && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              {[...Array(5)].map((_, index) => (
                <Box key={index} component="span">
                  {index < Math.floor(post.rating) ? (
                    <StarIcon fontSize="small" color="warning" />
                  ) : index < post.rating ? (
                    <StarHalfIcon fontSize="small" color="warning" />
                  ) : (
                    <StarBorderIcon fontSize="small" color="warning" />
                  )}
                </Box>
              ))}
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                {post.rating}/5
              </Typography>
            </Box>
          )}
          
          <Typography variant="body2" color="text.secondary" paragraph>
            {post.content}
          </Typography>
          
          {post.image && (
            <CardMedia
              component="img"
              height="200"
              image={post.image}
              alt={post.title}
              sx={{ borderRadius: 1, mb: 2 }}
            />
          )}
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
            {post.tags.map((tag, index) => (
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
        
        <CardActions sx={{ px: 2, pb: 2 }}>
          <Button 
            size="small" 
            startIcon={liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            onClick={handleLike}
          >
            {likeCount}
          </Button>
          <Button 
            size="small" 
            startIcon={<CommentIcon />}
          >
            {post.comments}
          </Button>
          <Button 
            size="small" 
            startIcon={<ShareIcon />}
          >
            Share
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={handleSave}>
            {saved ? <BookmarkIcon color="primary" /> : <BookmarkBorderIcon />}
          </IconButton>
        </CardActions>
      </Card>
    );
  };
  
  // Question Card Component
  const QuestionCard = ({ question }) => {
    const [upvoted, setUpvoted] = useState(false);
    const [upvoteCount, setUpvoteCount] = useState(question.upvotes);
    
    const handleUpvote = () => {
      if (upvoted) {
        setUpvoteCount(upvoteCount - 1);
      } else {
        setUpvoteCount(upvoteCount + 1);
      }
      setUpvoted(!upvoted);
    };
    
    return (
      <Card sx={{ mb: 3 }}>
        <CardHeader
          avatar={
            <Avatar src={question.author.avatar} alt={question.author.name} />
          }
          title={question.author.name}
          subheader={
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
              <SchoolIcon fontSize="small" sx={{ mr: 0.5, fontSize: 14 }} />
              <Typography variant="caption" color="text.secondary">
                {question.author.college} • {question.date}
              </Typography>
            </Box>
          }
          action={
            <Chip label="Question" size="small" color="info" variant="outlined" />
          }
        />
        
        <CardContent sx={{ pt: 0 }}>
          <Typography variant="h6" gutterBottom>
            {question.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {question.content}
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
            {question.tags.map((tag, index) => (
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
        
        <CardActions sx={{ px: 2, pb: 2 }}>
          <Button 
            size="small" 
            startIcon={upvoted ? <ThumbUpIcon color="primary" /> : <ThumbUpOutlinedIcon />}
            onClick={handleUpvote}
          >
            {upvoteCount}
          </Button>
          <Button 
            size="small" 
            startIcon={<CommentIcon />}
          >
            {question.answers} Answers
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ ml: 'auto' }}
          >
            Answer
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  // Guide Card Component
  const GuideCard = ({ guide }) => {
    return (
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          height="140"
          image={guide.image}
          alt={guide.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            {guide.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Avatar sx={{ width: 24, height: 24, mr: 1 }} />
            <Typography variant="body2">
              {guide.author}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
              • {guide.college}
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
            {guide.date}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {guide.excerpt}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {guide.tags.map((tag, index) => (
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
        <CardActions>
          <Button size="small" startIcon={<FavoriteIcon fontSize="small" />}>
            {guide.likes}
          </Button>
          <Button size="small" startIcon={<BookmarkIcon fontSize="small" />}>
            {guide.bookmarks}
          </Button>
          <Button size="small" color="primary" sx={{ ml: 'auto' }}>
            Read More
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student Community
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Connect with fellow students, share experiences, and get advice about accommodation and college life
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="community tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All Posts" />
          <Tab label="Questions & Answers" />
          <Tab label="Reviews" />
          <Tab label="Local Guides" />
          <Tab label="Saved" />
        </Tabs>
      </Box>
      
      {/* Search and Filter Bar */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              placeholder="Search posts, questions, or guides"
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
              <InputLabel>Filter by City</InputLabel>
              <Select
                value={filterCity}
                label="Filter by City"
                onChange={handleCityFilterChange}
              >
                <MenuItem value="">All Cities</MenuItem>
                <MenuItem value="delhi">Delhi</MenuItem>
                <MenuItem value="mumbai">Mumbai</MenuItem>
                <MenuItem value="bangalore">Bangalore</MenuItem>
                <MenuItem value="pune">Pune</MenuItem>
                <MenuItem value="chennai">Chennai</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortBy}
                label="Sort By"
                onChange={handleSortChange}
                startAdornment={
                  <InputAdornment position="start">
                    <SortIcon fontSize="small" />
                  </InputAdornment>
                }
              >
                <MenuItem value="recent">Most Recent</MenuItem>
                <MenuItem value="popular">Most Popular</MenuItem>
                <MenuItem value="comments">Most Comments</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              fullWidth
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </Paper>
      
      {/* All Posts Tab */}
      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Popular Topics
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                <Chip label="Accommodation" color="primary" variant="outlined" clickable />
                <Chip label="Food" color="primary" variant="outlined" clickable />
                <Chip label="Safety" color="primary" variant="outlined" clickable />
                <Chip label="Budget" color="primary" variant="outlined" clickable />
                <Chip label="Transport" color="primary" variant="outlined" clickable />
                <Chip label="Roommates" color="primary" variant="outlined" clickable />
                <Chip label="Study Spots" color="primary" variant="outlined" clickable />
                <Chip label="Utilities" color="primary" variant="outlined" clickable />
                <Chip label="Weekend Activities" color="primary" variant="outlined" clickable />
              </Box>
            </Paper>
            
            <Paper sx={{ p: 2, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Popular Cities
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button 
                  variant="outlined" 
                  startIcon={<LocationOnIcon />} 
                  sx={{ justifyContent: 'flex-start' }}
                  onClick={() => setFilterCity('delhi')}
                >
                  Delhi
                </Button>
                <Button 
                  variant="outlined" 
                  startIcon={<LocationOnIcon />} 
                  sx={{ justifyContent: 'flex-start' }}
                  onClick={() => setFilterCity('mumbai')}
                >
                  Mumbai
                </Button>
                <Button 
                  variant="outlined" 
                  startIcon={<LocationOnIcon />} 
                  sx={{ justifyContent: 'flex-start' }}
                  onClick={() => setFilterCity('bangalore')}
                >
                  Bangalore
                </Button>
                <Button 
                  variant="outlined" 
                  startIcon={<LocationOnIcon />} 
                  sx={{ justifyContent: 'flex-start' }}
                  onClick={() => setFilterCity('pune')}
                >
                  Pune
                </Button>
                <Button 
                  variant="outlined" 
                  startIcon={<LocationOnIcon />} 
                  sx={{ justifyContent: 'flex-start' }}
                  onClick={() => setFilterCity('chennai')}
                >
                  Chennai
                </Button>
              </Box>
            </Paper>
            
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Community Guidelines
              </Typography>
              <Typography variant="body2" paragraph>
                Our community thrives on respectful and helpful interactions. Please follow these guidelines:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                <Typography component="li" variant="body2" gutterBottom>
                  Be respectful and inclusive to all members
                </Typography>
                <Typography component="li" variant="body2" gutterBottom>
                  Share accurate and honest information
                </Typography>
                <Typography component="li" variant="body2" gutterBottom>
                  Do not share personal contact details publicly
                </Typography>
                <Typography component="li" variant="body2" gutterBottom>
                  Report inappropriate content or behavior
                </Typography>
                <Typography component="li" variant="body2">
                  Help others and contribute positively
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Questions & Answers Tab */}
      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">
                Student Questions
              </Typography>
              <Button variant="contained" startIcon={<AddIcon />}>
                Ask Question
              </Button>
            </Box>
            
            {questions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Popular Question Topics
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                <Chip label="Rent" color="info" variant="outlined" clickable />
                <Chip label="Deposit" color="info" variant="outlined" clickable />
                <Chip label="Roommates" color="info" variant="outlined" clickable />
                <Chip label="Landlord Issues" color="info" variant="outlined" clickable />
                <Chip label="Utilities" color="info" variant="outlined" clickable />
                <Chip label="Maintenance" color="info" variant="outlined" clickable />
                <Chip label="Safety" color="info" variant="outlined" clickable />
                <Chip label="Transport" color="info" variant="outlined" clickable />
                <Chip label="Food" color="info" variant="outlined" clickable />
              </Box>
            </Paper>
            
            <Paper sx={{ p: 2, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                How to Ask Good Questions
              </Typography>
              <Typography variant="body2" paragraph>
                Follow these tips to get helpful answers quickly:
              </Typography>
              <Box component="ol" sx={{ pl: 2, mb: 0 }}>
                <Typography component="li" variant="body2" gutterBottom>
                  Be specific about your problem or query
                </Typography>
                <Typography component="li" variant="body2" gutterBottom>
                  Include relevant details (location, budget, etc.)
                </Typography>
                <Typography component="li" variant="body2" gutterBottom>
                  Keep it concise but complete
                </Typography>
                <Typography component="li" variant="body2" gutterBottom>
                  Use appropriate tags to reach the right audience
                </Typography>
                <Typography component="li" variant="body2">
                  Be respectful and thank those who help
                </Typography>
              </Box>
            </Paper>
            
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Top Contributors
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="subtitle2">Priya Sharma</Typography>
                    <Typography variant="caption" color="text.secondary">
                      Delhi University • 156 answers
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="subtitle2">Rahul Verma</Typography>
                    <Typography variant="caption" color="text.secondary">
                      IIT Bombay • 132 answers
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="subtitle2">Neha Gupta</Typography>
                    <Typography variant="caption" color="text.secondary">
                      Symbiosis Pune • 98 answers
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Reviews Tab */}
      <TabPanel value={tabValue} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">
                Accommodation Reviews
              </Typography>
              <Button variant="contained" startIcon={<AddIcon />}>
                Write Review
              </Button>
            </Box>
            
            {posts.filter(post => post.type === 'review').map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Top Rated Accommodations
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      borderRadius: 1, 
                      bgcolor: 'grey.200', 
                      mr: 1,
                      backgroundImage: 'url(https://via.placeholder.com/60)',
                      backgroundSize: 'cover',
                    }} 
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2">Lakshmi Nivas PG</Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      Adyar, Chennai
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <StarIcon sx={{ color: theme.palette.warning.main, fontSize: 16 }} />
                      <Typography variant="caption" sx={{ ml: 0.5 }}>
                        4.5/5 (24 reviews)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      borderRadius: 1, 
                      bgcolor: 'grey.200', 
                      mr: 1,
                      backgroundImage: 'url(https://via.placeholder.com/60)',
                      backgroundSize: 'cover',
                    }} 
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2">Hudson Lane Hostels</Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      North Campus, Delhi
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <StarIcon sx={{ color: theme.palette.warning.main, fontSize: 16 }} />
                      <Typography variant="caption" sx={{ ml: 0.5 }}>
                        4.3/5 (36 reviews)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      borderRadius: 1, 
                      bgcolor: 'grey.200', 
                      mr: 1,
                      backgroundImage: 'url(https://via.placeholder.com/60)',
                      backgroundSize: 'cover',
                    }} 
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2">Koramangala Student Apartments</Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      Koramangala, Bangalore
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <StarIcon sx={{ color: theme.palette.warning.main, fontSize: 16 }} />
                      <Typography variant="caption" sx={{ ml: 0.5 }}>
                        4.2/5 (18 reviews)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Button size="small">View All Top Rated</Button>
              </Box>
            </Paper>
            
            <Paper sx={{ p: 2, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Review Guidelines
              </Typography>
              <Typography variant="body2" paragraph>
                Help others by writing honest and detailed reviews:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                <Typography component="li" variant="body2" gutterBottom>
                  Be honest and objective in your assessment
                </Typography>
                <Typography component="li" variant="body2" gutterBottom>
                  Include both pros and cons of the accommodation
                </Typography>
                <Typography component="li" variant="body2" gutterBottom>
                  Mention important details like rent, facilities, etc.
                </Typography>
                <Typography component="li" variant="body2" gutterBottom>
                  Add photos if possible (but respect privacy)
                </Typography>
                <Typography component="li" variant="body2">
                  Rate fairly based on value for money
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Local Guides Tab */}
      <TabPanel value={tabValue} index={3}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">
            Student Area Guides
          </Typography>
          <Button variant="contained" startIcon={<AddIcon />}>
            Create Guide
          </Button>
        </Box>
        
        <Grid container spacing={3}>
          {localGuides.map((guide) => (
            <Grid item key={guide.id} xs={12} sm={6} md={4}>
              <GuideCard guide={guide} />
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Featured City Guides
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Delhi Guide"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Delhi for Students
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Comprehensive guide to student life in Delhi
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Mumbai Guide"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Mumbai Student Areas
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Best neighborhoods for students in Mumbai
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Bangalore Guide"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Bangalore Campus Life
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Everything about student life in Bangalore
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Pune Guide"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Pune College Areas
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Best places to live near Pune colleges
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      
      {/* Saved Tab */}
      <TabPanel value={tabValue} index={4}>
        <Box sx={{ textAlign: 'center', py: 5 }}>
          <PersonIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            Sign In to View Saved Items
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Create an account or sign in to view your saved posts, questions, and guides
          </Typography>
          <Button variant="contained" sx={{ mr: 1 }}>
            Sign In
          </Button>
          <Button variant="outlined">
            Create Account
          </Button>
        </Box>
      </TabPanel>
    </Container>
  );
}

export default Community;