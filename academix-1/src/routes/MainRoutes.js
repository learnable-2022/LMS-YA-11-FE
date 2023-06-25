import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';

// Render Landing age
const LandingPage = Loadable(lazy(() => import('pages/landing')));

// Render - Student dashboard and utility components
import StudentLayout from 'layout/MainLayout/index'; //shared UI
const StudentDashboard = Loadable(lazy(() => import('pages/student/dashboard')));
const Courses = Loadable(lazy(() => import('pages/student/components-overview/CourseList')));

// Render - Instructor dashboard and utility components
import TutorLayout from 'layout/InstructorLayout/index';
import SamplePage from 'pages/tutor/extra-pages/SamplePage';
const TutorDashboard = Loadable(lazy(() => import('pages/tutor/dashboard')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/student/extra-pages/SamplePage')));

// // render - utilities
// const Typography = Loadable(lazy(() => import('pages/student/components-overview/Typography')));
// const Color = Loadable(lazy(() => import('pages/student/components-overview/Color')));
// const Shadow = Loadable(lazy(() => import('pages/student/components-overview/Shadow')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: 'student',
      element: <StudentLayout />,
      children: [
        {
          path: '/student',
          element: <StudentDashboard />
        },
        {
          path: 'overview',
          element: <StudentDashboard />
        },
        {
          path: 'courses',
          element: <Courses />
        }
      ]
    },
    {
      path: 'instructor',
      element: <TutorLayout />,
      children: [
        {
          path: '/instructor',
          element: <TutorDashboard />
        },
        {
          path: 'overview',
          element: <TutorDashboard />
        },
        {
          path: 'courses',
          element: <Courses />
        }
      ]
    },
    {
      path: '*',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
