// assets
import {
  AntDesignOutlined,
  BarcodeOutlined,
  CommentOutlined,
  BookOutlined,
  CalendarOutlined,
  CalculatorOutlined,
  DatabaseOutlined
} from '@ant-design/icons';

// icons
const icons = {
  BarcodeOutlined,
  AntDesignOutlined,
  CommentOutlined,
  BookOutlined,
  CalendarOutlined,
  CalculatorOutlined,
  DatabaseOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const courses = {
  id: 'courses',
  title: 'Courses Management',
  type: 'group',
  children: [
    {
      id: 'course-catalogue',
      title: 'Courses',
      type: 'item',
      url: 'courses',
      icon: icons.DatabaseOutlined,
      breadcrumbs: false
    },
    {
      id: 'course-mycourses',
      title: 'My Courses',
      type: 'item',
      url: '/my-courses',
      icon: icons.BookOutlined,
      breadcrumbs: false
    },
    {
      id: 'course-calendar',
      title: 'Calendar',
      type: 'item',
      url: '/calendar',
      icon: icons.CalendarOutlined
    },
    {
      id: 'course-resource',
      title: 'Resources',
      type: 'item',
      url: '/resources',
      icon: icons.AntDesignOutlined
    },
    {
      id: 'course-grade',
      title: 'Grade',
      type: 'item',
      url: '/grade',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'course-assignment',
      title: 'Assgnment',
      type: 'item',
      url: '/assignment',
      icon: icons.CalculatorOutlined
    },
    {
      id: 'course-messages',
      title: 'Message',
      type: 'item',
      url: '/messages',
      icon: icons.CommentOutlined
    }
  ]
};

export default courses;
