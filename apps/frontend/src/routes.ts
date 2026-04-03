import { createBrowserRouter } from 'react-router';
import { Dashboard } from './pages/Dashboard'
import { NotFound } from './pages/NotFound'
import { TechAnalysis } from './pages/TechAnalysis'
import { LearningLog } from './pages/LearningLog'
import { Goals } from './pages/Goals'
import { Profile } from './pages/Profile'

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/tech-analysis",
    Component: TechAnalysis,
  },
  {
    path: "/learning-log",
    Component: LearningLog,
  },
  {
    path: "/goals",
    Component: Goals,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/*",
    Component: NotFound,
  },
]);