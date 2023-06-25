// import { useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// assets
import CourseProgressCard from 'components/courses/courseCard';
import { courses } from 'data/courses';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

// eslint-disable-next-line react/prop-types
const ProgressTray = (name) => {
  return (
    <>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">{name}</Typography>
      </Grid>
      {courses.map((course) => (
        <Grid item xs={12} sm={3} md={3} lg={3} key={course.id}>
          <CourseProgressCard course={course} />
        </Grid>
      ))}
    </>
  );
};

export default ProgressTray;
