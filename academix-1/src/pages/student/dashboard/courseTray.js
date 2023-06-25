// import { useState } from 'react';

// material-ui
import { Grid, Divider, Typography, Button } from '@mui/material';
import { CaretDownFilled } from '@ant-design/icons';

// assets
import CourseCard from 'components/courses/courseCard';
import { courses } from 'data/courses';

// const courses = [
//   {
//     id: '2569ce0d517a7f06d3ea1f24',
//     category: 'Music',
//     description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
//     logo: '/assets/logos/logo-dropbox.png',
//     title: 'Dropbox',
//     downloads: '594'
//   },
//   {
//     id: 'ed2b900870ceba72d203ec15',
//     category: 'Health',
//     description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
//     logo: '/assets/logos/logo-medium.png',
//     title: 'Medium Corporation',
//     downloads: '625'
//   },
//   {
//     id: 'a033e38768c82fca90df3db7',
//     category: 'Mathematics',
//     description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
//     logo: '/assets/logos/logo-slack.png',
//     title: 'Slack',
//     downloads: '857'
//   },
//   {
//     id: '1efecb2bf6a51def9869ab0f',
//     category: '04/04/2019',
//     description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
//     logo: '/assets/logos/logo-lyft.png',
//     title: 'Lyft',
//     downloads: '406'
//   },
//   {
//     id: '1ed68149f65fbc6089b5fd07',
//     category: 'Programming',
//     description: 'GitHub is a web-based hosting service for version control of code using Git.',
//     logo: '/assets/logos/logo-github.png',
//     title: 'GitHub',
//     downloads: '835'
//   },
//   {
//     id: '5dab321376eff6177407e887',
//     category: 'Ecommerce',
//     description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
//     logo: '/assets/logos/logo-squarespace.png',
//     title: 'Squarespace',
//     downloads: '835'
//   }
// ];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

// eslint-disable-next-line react/prop-types
const CourseTray = ({ name }) => {
  return (
    <>
      <Grid item xs={12} sx={{ mb: -3.25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant="h5">
          {' '}
          {name}
          <Divider
            sx={{
              // width: 60,
              // minWidth: '10px',
              background: 'linear-gradient(90deg, #732ed1 0%, #732ed1 50%, #faad15 50%, #faad15 100%)',
              borderRadius: '0px 0px 5px 5px',
              color: 'white',
              height: 7
            }}
          />
        </Typography>
        <Button size="medium">
          See all <CaretDownFilled />
        </Button>
      </Grid>
      {courses.map((course) => (
        <Grid item xs={6} sm={3} md={3} lg={3} key={course.id}>
          <CourseCard course={course} />
        </Grid>
      ))}
    </>
  );
};

export default CourseTray;
