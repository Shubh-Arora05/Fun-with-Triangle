import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Area from './Components/Area.jsx'
import Hypotenuse from './Components/Hypotenuse.jsx';
import Quiz from './Components/Quiz.jsx';
import React from 'react';
import './index.css';

import {ThemeProvider} from "./Context/Context"

const router = createBrowserRouter( [
  {path :"/" , element :<App/>}, 
  {path :"/area" , element :<Area/>},
  {path :"/hypotenuse" , element :<Hypotenuse/>},
  {path :"/quiz" , element :<Quiz/>},

] );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider >
     <RouterProvider router = {router} />
    </ThemeProvider>
  </StrictMode>,
)
