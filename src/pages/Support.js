import React, { useState } from 'react';
import {
  Avatar,
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
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
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
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ForumIcon from '@mui/icons-material/Forum';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArticleIcon from '@mui/icons-material/Article';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Tab Panel component for the tabbed interface
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`support-tabpanel-${index}`}
      aria-labelledby={`support-tab-${index}`}
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

function Support() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [message, setMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // Sample chat messages
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'system',
      message: 'Welcome to Student Accommodation Support! How can we help you today?',
      timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
    },
    {
      id: 2,
      sender: 'user',
      message: 'Hi, I have a question about the security deposit for a PG I found on your platform.',
      timestamp: new Date(Date.now() - 4 * 60000).toISOString(),
    },
    {
      id: 3,
      sender: 'agent',
      name: 'Priya',
      avatar: 'https://via.placeholder.com/40',
      message: 'Hello! I\'d be happy to help with your question about security deposits. Could you please share which PG you\'re interested in and what specific concerns you have?',
      timestamp: new Date(Date.now() - 3 * 60000).toISOString(),
    },
    {
      id: 4,
      sender: 'user',
      message: 'It\'s the Lakshmi Nivas PG in Chennai. The owner is asking for 3 months of rent as security deposit. Is that standard?',
      timestamp: new Date(Date.now() - 2 * 60000).toISOString(),
    },
    {
      id: 5,
      sender: 'agent',
      name: 'Priya',
      avatar: 'https://via.placeholder.com/40',
      message: 'In Chennai, a security deposit of 2-3 months is fairly standard for PGs and rental apartments. However, you can try to negotiate it down to 2 months if that works better for your budget. Would you like me to provide some negotiation tips or information about your tenant rights regarding security deposits?',
      timestamp: new Date(Date.now() - 1 * 60000).toISOString(),
    },
  ]);
  
  // Sample FAQs
  const faqs = [
    {
      id: 1,
      question: 'How do I find a roommate on the platform?',
      answer: 'To find a roommate, navigate to the "Roommate Finder" section from the main menu. You can set filters based on your preferences like college, budget, lifestyle, etc. Browse through potential roommate profiles and connect with those who match your criteria. You can message them directly through our platform to discuss further details.',
      category: 'Roommates',
    },
    {
      id: 2,
      question: 'What documents do I need to create a rent agreement?',
      answer: 'To create a rent agreement on our platform, you\'ll need: 1) Identity proof (Aadhar Card, PAN Card, or Passport) of both tenant and landlord, 2) Address proof of the rental property, 3) Passport-sized photographs of both parties, 4) Details of the rent, security deposit, and lease duration. Our system will guide you through the process and generate a legally valid agreement that can be digitally signed by both parties.',
      category: 'Legal',
    },
    {
      id: 3,
      question: 'How can I verify if a property listing is genuine?',
      answer: 'All properties listed on our platform undergo a verification process. Look for the "Verified" badge on listings, which indicates our team has confirmed the property details. We also provide virtual tours and multiple photos to help you assess the property. Additionally, you can read reviews from previous tenants and check the landlord\'s rating. If you still have concerns, you can request a video call with the owner through our platform before visiting in person.',
      category: 'Verification',
    },
    {
      id: 4,
      question: 'What is the cancellation policy for bookings?',
      answer: 'Our cancellation policy varies depending on the property and timing of cancellation. Generally, cancellations made more than 7 days before move-in date receive a full refund minus processing fees. Cancellations within 3-7 days receive a 50% refund. Cancellations less than 3 days before move-in typically don\'t qualify for refunds. However, some properties may have their own specific policies, which will be clearly mentioned on their listing page. Always check the specific terms before booking.',
      category: 'Bookings',
    },
    {
      id: 5,
      question: 'How do I report issues with my accommodation?',
      answer: 'If you encounter issues with your accommodation, you can report them through the "Support" section of your account. Click on "Report an Issue", select the property, and describe the problem in detail. Include photos if applicable. Our support team will review your report and contact the property owner on your behalf. For urgent issues like safety concerns or major maintenance problems, you can also use our 24/7 helpline mentioned in the Contact section.',
      category: 'Support',
    },
    {
      id: 6,
      question: 'Are there any discounts for long-term bookings?',
      answer: 'Yes, many properties offer discounts for long-term bookings. Properties with long-term discounts will display this information on their listing page. Typically, bookings of 6 months or more may qualify for 5-10% discounts, while yearly bookings might receive 10-15% off. Additionally, check our "Offers" section regularly for seasonal promotions and special deals. Students can also access exclusive discounts by verifying their student status through our platform.',
      category: 'Pricing',
    },
    {
      id: 7,
      question: 'How does the roommate matching algorithm work?',
      answer: 'Our roommate matching algorithm considers multiple factors including budget range, preferred location, college/university, course of study, lifestyle habits (sleeping patterns, cleanliness, socializing preferences), hobbies, and personal preferences you specify in your profile. The algorithm assigns compatibility scores based on these factors, prioritizing the ones you mark as most important. You\'ll see potential roommates ranked by compatibility percentage, and you can further filter results based on specific criteria that matter most to you.',
      category: 'Roommates',
    },
    {
      id: 8,
      question: 'What safety measures are in place for female students?',
      answer: 'We prioritize safety for female students through several measures: 1) Female-only accommodation options with enhanced security, 2) Verified properties with security features clearly listed, 3) Area safety ratings and reviews from female residents, 4) Option to connect with female roommates only, 5) 24/7 emergency support helpline, 6) Community reviews focusing on safety aspects, and 7) Background verification of property owners. We also provide safety tips specific to each area and encourage reporting of any safety concerns immediately through our platform.',
      category: 'Safety',
    },
  ];
  
  // Sample help articles
  const helpArticles = [
    {
      id: 1,
      title: 'Complete Guide to Finding Student Accommodation',
      excerpt: 'Learn how to use filters, compare properties, schedule visits, and make informed decisions...',
      category: 'Getting Started',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Understanding Rental Agreements: Terms to Look For',
      excerpt: 'Know your rights and responsibilities as a tenant. Important clauses to check before signing...',
      category: 'Legal',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Roommate Etiquette: Setting Ground Rules',
      excerpt: 'Tips for peaceful coexistence with roommates. How to handle shared spaces, visitors, and more...',
      category: 'Roommates',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Safety Tips for Students Living Alone',
      excerpt: 'Essential safety measures for students living independently. Emergency contacts and precautions...',
      category: 'Safety',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Budgeting for Student Accommodation',
      excerpt: 'How to manage your finances while renting. Hidden costs to be aware of and saving tips...',
      category: 'Finance',
      readTime: '10 min read',
    },
    {
      id: 6,
      title: 'Dealing with Maintenance Issues in Rented Accommodation',
      excerpt: 'Steps to follow when facing maintenance problems. How to communicate effectively with landlords...',
      category: 'Maintenance',
      readTime: '6 min read',
    },
  ];
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message
    const newUserMessage = {
      id: chatMessages.length + 1,
      sender: 'user',
      message: message,
      timestamp: new Date().toISOString(),
    };
    
    setChatMessages([...chatMessages, newUserMessage]);
    setMessage('');
    
    // Simulate agent response after a short delay
    setTimeout(() => {
      const newAgentMessage = {
        id: chatMessages.length + 2,
        sender: 'agent',
        name: 'Priya',
        avatar: 'https://via.placeholder.com/40',
        message: 'Thank you for your message. Our support team will get back to you shortly. Is there anything else you would like to know?',
        timestamp: new Date().toISOString(),
      };
      
      setChatMessages(prevMessages => [...prevMessages, newAgentMessage]);
    }, 1000);
  };
  
  const toggleFaq = (id) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };
  
  // Format timestamp for chat messages
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Support & Help Center
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Get assistance with your accommodation queries, technical issues, or connect with our support team
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="support tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab icon={<SupportAgentIcon />} label="Chat Support" />
          <Tab icon={<HelpOutlineIcon />} label="FAQs" />
          <Tab icon={<ArticleIcon />} label="Help Articles" />
          <Tab icon={<PhoneIcon />} label="Contact Us" />
        </Tabs>
      </Box>
      
      {/* Chat Support Tab */}
      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper 
              sx={{ 
                height: 500, 
                display: 'flex', 
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 2,
              }}
              elevation={2}
            >
              {/* Chat Header */}
              <Box sx={{ p: 2, bgcolor: theme.palette.primary.main, color: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src="https://via.placeholder.com/40" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1">Support Agent - Priya</Typography>
                    <Typography variant="caption">Online • Typically replies in 5 minutes</Typography>
                  </Box>
                </Box>
              </Box>
              
              {/* Chat Messages */}
              <Box 
                sx={{ 
                  flexGrow: 1, 
                  p: 2, 
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                {chatMessages.map((msg) => (
                  <Box 
                    key={msg.id} 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    {msg.sender === 'system' && (
                      <Box 
                        sx={{ 
                          bgcolor: theme.palette.grey[100], 
                          p: 2, 
                          borderRadius: 2,
                          maxWidth: '80%',
                        }}
                      >
                        <Typography variant="body2">{msg.message}</Typography>
                      </Box>
                    )}
                    
                    {msg.sender === 'user' && (
                      <Box 
                        sx={{ 
                          bgcolor: theme.palette.primary.main, 
                          color: 'white',
                          p: 2, 
                          borderRadius: 2,
                          borderBottomRightRadius: 0,
                          maxWidth: '80%',
                        }}
                      >
                        <Typography variant="body2">{msg.message}</Typography>
                        <Typography variant="caption" sx={{ display: 'block', textAlign: 'right', mt: 0.5 }}>
                          {formatTimestamp(msg.timestamp)}
                        </Typography>
                      </Box>
                    )}
                    
                    {msg.sender === 'agent' && (
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Avatar src={msg.avatar} sx={{ mr: 1, width: 32, height: 32 }} />
                        <Box 
                          sx={{ 
                            bgcolor: theme.palette.grey[100], 
                            p: 2, 
                            borderRadius: 2,
                            borderBottomLeftRadius: 0,
                            maxWidth: '80%',
                          }}
                        >
                          <Typography variant="subtitle2" color="primary">{msg.name}</Typography>
                          <Typography variant="body2">{msg.message}</Typography>
                          <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                            {formatTimestamp(msg.timestamp)}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
              
              {/* Chat Input */}
              <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs>
                    <TextField
                      fullWidth
                      placeholder="Type your message here..."
                      variant="outlined"
                      value={message}
                      onChange={handleMessageChange}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <AttachFileIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      endIcon={<SendIcon />}
                      onClick={handleSendMessage}
                      disabled={message.trim() === ''}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
              <Typography variant="h6" gutterBottom>
                Quick Help
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Common questions our support team can help with:
              </Typography>
              
              <List sx={{ mt: 2 }}>
                <ListItem button sx={{ borderRadius: 1, mb: 1, bgcolor: theme.palette.grey[50] }}>
                  <ListItemText primary="How do I cancel my booking?" />
                </ListItem>
                <ListItem button sx={{ borderRadius: 1, mb: 1, bgcolor: theme.palette.grey[50] }}>
                  <ListItemText primary="I need to report an issue with my accommodation" />
                </ListItem>
                <ListItem button sx={{ borderRadius: 1, mb: 1, bgcolor: theme.palette.grey[50] }}>
                  <ListItemText primary="How do I contact my landlord?" />
                </ListItem>
                <ListItem button sx={{ borderRadius: 1, mb: 1, bgcolor: theme.palette.grey[50] }}>
                  <ListItemText primary="I need help with my payment" />
                </ListItem>
                <ListItem button sx={{ borderRadius: 1, bgcolor: theme.palette.grey[50] }}>
                  <ListItemText primary="My account has been locked" />
                </ListItem>
              </List>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h6" gutterBottom>
                Operating Hours
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Chat Support:</strong> 24/7
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Phone Support:</strong> 9 AM - 8 PM (Mon-Sat)
              </Typography>
              <Typography variant="body2">
                <strong>Email Response:</strong> Within 24 hours
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* FAQs Tab */}
      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              Frequently Asked Questions
            </Typography>
            
            <TextField
              fullWidth
              placeholder="Search FAQs..."
              variant="outlined"
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Popular Categories
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                <Button variant="outlined" size="small">All</Button>
                <Button variant="outlined" size="small">Roommates</Button>
                <Button variant="outlined" size="small">Legal</Button>
                <Button variant="outlined" size="small">Verification</Button>
                <Button variant="outlined" size="small">Bookings</Button>
                <Button variant="outlined" size="small">Safety</Button>
                <Button variant="outlined" size="small">Pricing</Button>
              </Stack>
            </Box>
            
            {/* FAQ Accordion */}
            <Box>
              {faqs.map((faq) => (
                <Paper 
                  key={faq.id} 
                  sx={{ 
                    mb: 2, 
                    overflow: 'hidden',
                    borderRadius: 2,
                  }}
                  elevation={1}
                >
                  <Box 
                    sx={{ 
                      p: 2, 
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      bgcolor: expandedFaq === faq.id ? theme.palette.primary.light : 'transparent',
                    }}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <Typography variant="subtitle1">
                      {faq.question}
                    </Typography>
                    <IconButton size="small">
                      {expandedFaq === faq.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </Box>
                  
                  {expandedFaq === faq.id && (
                    <Box sx={{ p: 2, pt: 0 }}>
                      <Divider />
                      <Box sx={{ pt: 2 }}>
                        <Typography variant="body2">
                          {faq.answer}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                          <Typography variant="caption" color="text.secondary">
                            Category: {faq.category}
                          </Typography>
                          <Typography variant="caption">
                            Was this helpful? <Button size="small">Yes</Button> <Button size="small">No</Button>
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Paper>
              ))}
            </Box>
            
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="body2" paragraph>
                Can't find what you're looking for?
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => setTabValue(0)}
                startIcon={<SupportAgentIcon />}
              >
                Chat with Support
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }} elevation={2}>
              <Typography variant="h6" gutterBottom>
                Most Popular Questions
              </Typography>
              <List>
                <ListItem button>
                  <ListItemText 
                    primary="How do I find a roommate on the platform?" 
                    secondary="Roommates • 245 views"
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem button>
                  <ListItemText 
                    primary="What documents do I need for a rent agreement?" 
                    secondary="Legal • 198 views"
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem button>
                  <ListItemText 
                    primary="How can I verify if a property listing is genuine?" 
                    secondary="Verification • 176 views"
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem button>
                  <ListItemText 
                    primary="What is the cancellation policy for bookings?" 
                    secondary="Bookings • 154 views"
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem button>
                  <ListItemText 
                    primary="How do I report issues with my accommodation?" 
                    secondary="Support • 132 views"
                  />
                </ListItem>
              </List>
            </Paper>
            
            <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
              <Typography variant="h6" gutterBottom>
                Still Need Help?
              </Typography>
              <Typography variant="body2" paragraph>
                If you can't find the answer to your question, our support team is here to help.
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                      <PhoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="Call Us" 
                    secondary="+91 1800-123-4567 (9 AM - 8 PM)"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="Email Us" 
                    secondary="support@studentaccommodation.com"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#25D366' }}>
                      <WhatsAppIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="WhatsApp" 
                    secondary="+91 9876543210"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Help Articles Tab */}
      <TabPanel value={tabValue} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              Help Articles & Guides
            </Typography>
            
            <Box sx={{ display: 'flex', mb: 3 }}>
              <TextField
                fullWidth
                placeholder="Search articles..."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl sx={{ width: 200, ml: 2 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  defaultValue=""
                >
                  <MenuItem value="">All Categories</MenuItem>
                  <MenuItem value="getting-started">Getting Started</MenuItem>
                  <MenuItem value="legal">Legal</MenuItem>
                  <MenuItem value="roommates">Roommates</MenuItem>
                  <MenuItem value="safety">Safety</MenuItem>
                  <MenuItem value="finance">Finance</MenuItem>
                  <MenuItem value="maintenance">Maintenance</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            <Grid container spacing={3}>
              {helpArticles.map((article) => (
                <Grid item xs={12} sm={6} key={article.id}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="caption" color="text.secondary">
                        {article.category} • {article.readTime}
                      </Typography>
                      <Typography variant="h6" component="h2" gutterBottom>
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {article.excerpt}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, pt: 0 }}>
                      <Button size="small" color="primary">
                        Read Full Article
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button variant="outlined">
                View All Articles
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }} elevation={2}>
              <Typography variant="h6" gutterBottom>
                Popular Articles
              </Typography>
              <List>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.palette.grey[200] }}>
                      <ArticleIcon color="primary" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="How to Negotiate Rent with Landlords" 
                    secondary="Finance • 5 min read"
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.palette.grey[200] }}>
                      <ArticleIcon color="primary" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="10 Questions to Ask Before Signing a Lease" 
                    secondary="Legal • 8 min read"
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.palette.grey[200] }}>
                      <ArticleIcon color="primary" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="First-Time Renter's Checklist" 
                    secondary="Getting Started • 6 min read"
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.palette.grey[200] }}>
                      <ArticleIcon color="primary" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="Understanding Your Rights as a Student Tenant" 
                    secondary="Legal • 10 min read"
                  />
                </ListItem>
              </List>
            </Paper>
            
            <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
              <Typography variant="h6" gutterBottom>
                Video Tutorials
              </Typography>
              <List>
                <ListItem button>
                  <ListItemText 
                    primary="How to Use the Roommate Finder" 
                    secondary="3:45 mins"
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem button>
                  <ListItemText 
                    primary="Creating a Rent Agreement" 
                    secondary="5:20 mins"
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem button>
                  <ListItemText 
                    primary="Virtual Property Tour Guide" 
                    secondary="4:10 mins"
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem button>
                  <ListItemText 
                    primary="Using Location Intelligence" 
                    secondary="6:30 mins"
                  />
                </ListItem>
              </List>
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Button variant="outlined" size="small">
                  View All Videos
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Contact Us Tab */}
      <TabPanel value={tabValue} index={3}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              Have questions or need assistance? Reach out to our support team through any of these channels.
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, height: '100%', borderRadius: 2 }} elevation={2}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 56, height: 56, mb: 2 }}>
                      <PhoneIcon fontSize="large" />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      Call Us
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Speak directly with our support team
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      +91 1800-123-4567
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      9 AM - 8 PM (Mon-Sat)
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, height: '100%', borderRadius: 2 }} elevation={2}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Avatar sx={{ bgcolor: theme.palette.secondary.main, width: 56, height: 56, mb: 2 }}>
                      <EmailIcon fontSize="large" />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      Email Us
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Send us your queries anytime
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      support@studentaccommodation.com
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Response within 24 hours
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, height: '100%', borderRadius: 2 }} elevation={2}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Avatar sx={{ bgcolor: '#25D366', width: 56, height: 56, mb: 2 }}>
                      <WhatsAppIcon fontSize="large" />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      WhatsApp
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Chat with us on WhatsApp
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      +91 9876543210
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Available 24/7
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, height: '100%', borderRadius: 2 }} elevation={2}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Avatar sx={{ bgcolor: theme.palette.info.main, width: 56, height: 56, mb: 2 }}>
                      <ForumIcon fontSize="large" />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      Live Chat
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Chat with our support agents
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="primary"
                      onClick={() => setTabValue(0)}
                    >
                      Start Chat
                    </Button>
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                      Available 24/7
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            
            <Typography variant="h6" gutterBottom>
              Office Address
            </Typography>
            <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
              <Typography variant="body1" paragraph>
                Student Accommodation Pvt. Ltd.
              </Typography>
              <Typography variant="body2" paragraph>
                123 Tech Park, 4th Floor<br />
                Koramangala, Bangalore - 560034<br />
                Karnataka, India
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Office Hours: 9 AM - 6 PM (Mon-Fri)
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Send Us a Message
            </Typography>
            <Typography variant="body1" paragraph>
              Fill out the form below and we'll get back to you as soon as possible.
            </Typography>
            
            <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    required
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Query Type</InputLabel>
                    <Select
                      label="Query Type"
                      defaultValue=""
                    >
                      <MenuItem value="">Select a query type</MenuItem>
                      <MenuItem value="booking">Booking Issue</MenuItem>
                      <MenuItem value="payment">Payment Problem</MenuItem>
                      <MenuItem value="account">Account Related</MenuItem>
                      <MenuItem value="property">Property Inquiry</MenuItem>
                      <MenuItem value="complaint">Complaint</MenuItem>
                      <MenuItem value="feedback">Feedback</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Submit Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Frequently Asked Contact Questions
              </Typography>
              <Paper sx={{ p: 2, borderRadius: 2 }} elevation={1}>
                <Typography variant="subtitle2" gutterBottom>
                  What is your typical response time?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We aim to respond to all inquiries within 24 hours. For urgent matters, please use our live chat or call our support line.
                </Typography>
              </Paper>
              <Paper sx={{ p: 2, borderRadius: 2, mt: 2 }} elevation={1}>
                <Typography variant="subtitle2" gutterBottom>
                  Do you have different contact details for property owners?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Yes, property owners can reach our partner support team at partners@studentaccommodation.com or call our dedicated partner line at +91 1800-789-6543.
                </Typography>
              </Paper>
              <Paper sx={{ p: 2, borderRadius: 2, mt: 2 }} elevation={1}>
                <Typography variant="subtitle2" gutterBottom>
                  How can I escalate an unresolved issue?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  If your issue hasn't been resolved through regular support channels, please email escalations@studentaccommodation.com with your case details and previous communication references.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
}

export default Support;