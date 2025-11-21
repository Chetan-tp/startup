import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  Stack,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              StudentStay
            </Typography>
            <Typography variant="body2">
              Finding the perfect accommodation for students made easy.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link component={RouterLink} to="/accommodations" color="inherit" display="block" sx={{ mb: 1 }}>
              Find Accommodation
            </Link>
            <Link component={RouterLink} to="/roommates" color="inherit" display="block" sx={{ mb: 1 }}>
              Find Roommate
            </Link>
            <Link component={RouterLink} to="/rent-agreement" color="inherit" display="block" sx={{ mb: 1 }}>
              Rent Agreement
            </Link>
            <Link component={RouterLink} to="/community" color="inherit" display="block" sx={{ mb: 1 }}>
              Community
            </Link>
            <Link component={RouterLink} to="/offers" color="inherit" display="block" sx={{ mb: 1 }}>
              Offers & Discounts
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              For Property Owners
            </Typography>
            <Link component={RouterLink} to="/register-property" color="inherit" display="block" sx={{ mb: 1 }}>
              List Your Property
            </Link>
            <Link component={RouterLink} to="/owner-dashboard" color="inherit" display="block" sx={{ mb: 1 }}>
              Owner Dashboard
            </Link>
            <Link component={RouterLink} to="/pricing" color="inherit" display="block" sx={{ mb: 1 }}>
              Pricing
            </Link>
            <Link component={RouterLink} to="/owner-guidelines" color="inherit" display="block" sx={{ mb: 1 }}>
              Guidelines
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Link component={RouterLink} to="/help" color="inherit" display="block" sx={{ mb: 1 }}>
              Help Center
            </Link>
            <Link component={RouterLink} to="/contact" color="inherit" display="block" sx={{ mb: 1 }}>
              Contact Us
            </Link>
            <Link component={RouterLink} to="/safety" color="inherit" display="block" sx={{ mb: 1 }}>
              Safety Center
            </Link>
            <Link component={RouterLink} to="/terms" color="inherit" display="block" sx={{ mb: 1 }}>
              Terms of Service
            </Link>
            <Link component={RouterLink} to="/privacy" color="inherit" display="block" sx={{ mb: 1 }}>
              Privacy Policy
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            © {new Date().getFullYear()} StudentStay. All rights reserved.
          </Typography>
          <Box>
            <Link color="inherit" sx={{ mx: 1 }}>
              Terms
            </Link>
            <Link color="inherit" sx={{ mx: 1 }}>
              Privacy
            </Link>
            <Link color="inherit" sx={{ mx: 1 }}>
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;