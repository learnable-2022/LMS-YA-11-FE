import PropTypes from 'prop-types';

// material-ui
import { Grid, Stack, Typography, CircularProgress, Button, Box } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| CourseProgress CARD,   ||============================== //

export default function CourseProgressCard(props) {
  const { course } = props;

  return (
    <MainCard
      contentSX={{
        p: 2,
        background: '#FBF5FF',
        border: '1px solid #e1e1e5'
      }}
    >
      {/* <CardMedia component="img" alt="green iguana" image={require('../../assets/images/users/avatar-1.png')} /> */}
      <Stack spacing={0.5}>
        <Grid item mb={3}>
          <Typography variant="h4" color="inherit">
            {course.title}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            <Typography component="span" variant="caption" sx={{ color: 'primary' }}>
              12{' '}
            </Typography>
            of
            <Typography component="span" variant="caption" sx={{ color: 'primary' }}>
              {' '}
              50
            </Typography>{' '}
            completed
          </Typography>
        </Grid>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button
            // component={Link}
            target="_blank"
            href="#"
            size="small"
            variant="contained"
          >
            Continue
          </Button>
          <Box sx={{ position: 'relative', display: 'flex' }}>
            <CircularProgress variant="determinate" value={course.progress} sx={{ height: '100px', width: '20px' }} size={40} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="caption" component="div" color="primary">
                {course.progress}%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </MainCard>
  );
}

CourseProgressCard.propTypes = {
  course: PropTypes.object.isRequired
};
