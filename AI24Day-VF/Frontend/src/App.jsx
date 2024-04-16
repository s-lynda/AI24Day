import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import AddAdmins from './pages/AddAdmins';
import AddUser from './pages/AddUser';
import AddUser1 from './pages/AddUser1';
import AddUser2 from './pages/AddUser2';
import Calander from './pages/Calander';
import Challenges from './pages/Challenges';
import Challenges1 from './pages/Challenges1';
import Challenges2 from './pages/Challenges2';
import Challenges3 from './pages/Challenges3';
import Challenges4 from './pages/Challenges4';
import CliqueSurOffreDemploi from './pages/CliqueSurOffreDemploi';
import Competitions from './pages/Competitions';
import Dashboard from './pages/Dashboard';
import Dashboard1 from './pages/Dashboard1';
import EditCurrentAccount from './pages/EditCurrentAccount';
import EditCurrentAccount1 from './pages/EditCurrentAccount1';
import EditCurrentAccount2 from './pages/EditCurrentAccount2';
import Group1000001003 from './pages/Group1000001003';
import Group1000001019 from './pages/Group1000001019';
import Leaderboard from './pages/Leaderboard';
import Leaderboard1 from './pages/Leaderboard1';
import Property1Active from './pages/Property1Active';
import Property1Default from './pages/Property1Default';
import Property1Hover from './pages/Property1Hover';
import WebPlatform from './pages/WebPlatform';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/AddAdmins', element: <AddAdmins /> },
{ path: '/AddUser', element: <AddUser /> },
{ path: '/AddUser1', element: <AddUser1 /> },
{ path: '/AddUser2', element: <AddUser2 /> },
{ path: '/Calander', element: <Calander /> },
{ path: '/Challenges', element: <Challenges /> },
{ path: '/Challenges1', element: <Challenges1 /> },
{ path: '/Challenges2', element: <Challenges2 /> },
{ path: '/Challenges3', element: <Challenges3 /> },
{ path: '/Challenges4', element: <Challenges4 /> },
{ path: '/CliqueSurOffreDemploi', element: <CliqueSurOffreDemploi /> },
{ path: '/Competitions', element: <Competitions /> },
{ path: '/Dashboard', element: <Dashboard /> },
{ path: '/Dashboard1', element: <Dashboard1 /> },
{ path: '/EditCurrentAccount', element: <EditCurrentAccount /> },
{ path: '/EditCurrentAccount1', element: <EditCurrentAccount1 /> },
{ path: '/EditCurrentAccount2', element: <EditCurrentAccount2 /> },
{ path: '/Group1000001003', element: <Group1000001003 /> },
{ path: '/Group1000001019', element: <Group1000001019 /> },
{ path: '/Leaderboard', element: <Leaderboard /> },
{ path: '/Leaderboard1', element: <Leaderboard1 /> },
{ path: '/Property1Active', element: <Property1Active /> },
{ path: '/Property1Default', element: <Property1Default /> },
{ path: '/Property1Hover', element: <Property1Hover /> },
{ path: '/WebPlatform', element: <WebPlatform /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}