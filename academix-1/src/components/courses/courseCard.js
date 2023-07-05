import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '../../../node_modules/@mui/material/index';
import logo from '../../assets/images/users/avatar-1.png';

export default function CourseCard(props) {
  const { course } = props;
  const value = 3;

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" alt="green iguana" height="100" image={logo} />
        <CardContent pb={4}>
          <Typography variant="body2" color="text.secondary">
            {/* Software Engineering */}
            {course.category}
          </Typography>
          <Typography variant="h6" component="div">
            {/* Fundamentals of Software Engineering */}
            {course.title}
          </Typography>
          <Rating name="read-only" value={value} size="small" readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CourseCard.propTypes = {
  course: PropTypes.object.isRequired
};
