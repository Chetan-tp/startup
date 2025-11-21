import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function RegisterSelectionPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleStudentRegister = () => {
    navigate('/register/student');
  };

  const handleOwnerRegister = () => {
    navigate('/register/owner');
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: '100%',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
              <PersonAddIcon fontSize="large" />
            </Avatar>
            <Typography component="h1" variant="h3" gutterBottom align="center">
              Join Our Community
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center" sx={{ maxWidth: 600 }}>
              Choose your registration type to get started with finding the perfect accommodation or listing your property
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {/* Student Registration Card */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
                onClick={handleStudentRegister}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    <SchoolIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Student
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Looking for accommodation near your college or university? Find the perfect place to stay during your studies.
                  </Typography>
                  
                  <Box sx={{ mt: 3, mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      What you get:
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <HomeIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="body2">Browse verified accommodations</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <GroupIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="body2">Find compatible roommates</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <PersonAddIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="body2">Connect with student community</Typography>
                    </Box>
                  </Box>
                  
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleStudentRegister}
                  >
                    Register as Student
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Room Owner Registration Card */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
                onClick={handleOwnerRegister}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'secondary.main',
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    <BusinessIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Room Owner
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Have a property to rent? List your rooms and connect with verified students looking for accommodation.
                  </Typography>
                  
                  <Box sx={{ mt: 3, mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      What you get:
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <HomeIcon sx={{ mr: 1, color: 'secondary.main' }} />
                      <Typography variant="body2">List multiple properties</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <GroupIcon sx={{ mr: 1, color: 'secondary.main' }} />
                      <Typography variant="body2">Connect with verified students</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <BusinessIcon sx={{ mr: 1, color: 'secondary.main' }} />
                      <Typography variant="body2">Manage bookings easily</Typography>
                    </Box>
                  </Box>
                  
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleOwnerRegister}
                  >
                    Register as Owner
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{' '}
              <Button
                component={RouterLink}
                to="/login"
                variant="text"
                color="primary"
                sx={{ textTransform: 'none' }}
              >
                Sign in here
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default RegisterSelectionPage;