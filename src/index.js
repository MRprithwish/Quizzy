import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Signup from './Signup';
import Base from './Base';
import Com from './Com';
import Data from './Data';
import About from './About';
import Create from './Create';
import Fgame from './Fgame';
import Qgame from './Qgame';
import Out from './Out';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
import Q6 from './Q6';
import Quiz from './Quiz';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Quiz4 from './Quiz4';
import Quiz5 from './Quiz5';
import G1 from './G1';
import G2 from './G2';
import G3 from './G3';
import G5 from './G5';
import G6 from './G6';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "Signup",
    element: <Signup/>,
  },
  {
    path: "Base",
    element: <Base/>,
  },
  {
    path: "Com",
    element: <Com/>,
  },
  {
    path: "Data",
    element: <Data/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Create",
    element: <Create/>,
  },
  {
    path: "Fgame",
    element: <Fgame/>,
  },
  {
    path: "Qgame",
    element: <Qgame/>,
  },
  {
    path: "Out",
    element: <Out/>,
  },
  {
    path: "Q1",
    element: <Q1/>,
  },
  {
    path: "Q2",
    element: <Q2/>,
  },

  {
    path: "Q3",
    element: <Q3/>,
  },

  {
    path: "Q4",
    element: <Q4/>,
  },

  {
    path: "Q5",
    element: <Q5/>,
  },
  {
    path: "Q6",
    element: <Q6/>,
  },
  {
    path: "Quiz",
    element: <Quiz/>,
  },
  {
    path: "Quiz1",
    element: <Quiz1/>,
  },
  {
    path: "Quiz2",
    element: <Quiz2/>,
  },
  {
    path: "Quiz3",
    element: <Quiz3/>,
  },
  {
    path: "Quiz4",
    element: <Quiz4/>,
  },
  {
    path: "Quiz5",
    element: <Quiz5/>,
  },
  {
    path: "G1",
    element: <G1/>,
  },
  {
    path: "G2",
    element: <G2/>,
  },
  {
    path: "G3",
    element: <G3/>,
  },
  {
    path: "G5",
    element: <G5/>,
  },
  {
    path: "G6",
    element: <G6/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();