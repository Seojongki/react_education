import { useState } from 'react'
import './App.css'
import Navbar2 from './Navbar'
import BasicExample from './Accordion'
import Alert2 from './Alert'
import BreadcrumbExample from './Breadcrumbs'
import UncontrolledExample from './Carousels'
import VariantsExample from './Dropdowns'
import FigureExample from './Figure'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
      <Navbar2 />
      <BasicExample />
      <VariantsExample />
      <FigureExample />

    </>
  )
}

export default App
