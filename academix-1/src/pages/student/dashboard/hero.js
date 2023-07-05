import React from 'react';

// material-ui
import { Box, Button, Grid, CardMedia, Link, Stack, Typography } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// assets
import avatar from 'assets/images/users/avatar-group.png';

const Hero = () => {
  return (
    <Grid item xs={12} mt={-4} md={12} lg={12}>
      <Stack sx={{ px: 4, py: 5, background: 'linear-gradient(41deg, #641aca 10%, #2f0e60 20%, #641aca 90%)', borderRadius: '5px' }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Box maxWidth={400} pb={2}>
              <Typography variant="h2" color="white" pb={1}>
                Unlock your{' '}
                <Typography component="span" variant="h2" sx={{ border: 'solid 3px #faad15', borderRadius: '60%' }}>
                  Potential,
                </Typography>{' '}
                Embrace Knowledge
              </Typography>
              <Typography variant="body1" color="white">
                Discover a world of endless possibilities with our cutting-edge Learning Management System. Dive into engaging courses,
                interactive resources, and personalized learning paths. Join us today and empower your future!{' '}
              </Typography>
            </Box>
            <Box>
              <Button
                component={Link}
                target="_blank"
                href="https://mantisdashboard.io"
                size="small"
                variant="outlined"
                sx={{ textTransform: 'capitalize', color: 'white', border: '1px solid' }}
              >
                Get started
              </Button>
            </Box>
          </Stack>

          <CardMedia
            component="img"
            image={avatar}
            sx={{ width: 260, height: 200, ml: 2, display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' } }}
          />
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Hero;
