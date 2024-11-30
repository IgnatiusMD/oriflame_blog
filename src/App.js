import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './styles/main.scss';
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
