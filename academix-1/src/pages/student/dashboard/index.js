import { useState, useEffect } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// assets

import CourseProgressCard from 'components/courses/courseProgress';
import CourseTray from './courseTray';
import { courses } from 'data/courses';
import ComponentSkeleton from 'pages/student/components-overview/ComponentSkeleton';
import Hero from './hero';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // const theme = useTheme();
  const subset = courses.slice(0, 3);
  const [greeting, setGreeting] = useState('');

  const setGreetingByTime = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning 👋,');
    } else if (currentHour < 18) {
      setGreeting('Good afternoon 🌞,');
    } else {
      setGreeting('Good evening 🌙,');
    }
  };

  useEffect(() => {
    setGreetingByTime();
  }, []);

  return (
    <ComponentSkeleton>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} md={12} lg={12}>
          {/* Greet */}
          <Typography variant="h3" sx={{ mt: -1 }}>
            {greeting}{' '}
            <Typography component="span" variant="h3" sx={{ color: '#faad15' }}>
              John
            </Typography>
          </Typography>

          {/* <Stack sx={{ px: 4, py: 6, background: [theme.palette.primary.dark] }}> */}
        </Grid>

        {/* Greet */}
        <Hero />

        {/* Progress */}
        <Grid item xs={12} sx={{ mb: -2.25, mt: -2 }}>
          <Typography variant="h5">Course Progress</Typography>
        </Grid>
        {subset.map((course) => (
          <Grid item xs={12} sm={4} md={4} lg={4} key={course.pro}>
            <CourseProgressCard course={course} />
          </Grid>
        ))}

        {/* Courses */}

        <CourseTray name="New courses" />
        <CourseTray name="Popular courses" />
        <CourseTray name="Recommended courses" />
        <CourseTray name="Recommended courses" />

        {/* <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} /> */}
      </Grid>
    </ComponentSkeleton>
  );
};

export default DashboardDefault;
