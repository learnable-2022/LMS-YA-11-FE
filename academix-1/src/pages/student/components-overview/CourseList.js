// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import CourseTray from '../dashboard/courseTray';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

const CourseList = () => (
  <ComponentSkeleton>
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography component="h2" variant="h2">
          Courses
        </Typography>
      </Grid>
      <CourseTray name="New courses" />
    </Grid>
  </ComponentSkeleton>
);

export default CourseList;
