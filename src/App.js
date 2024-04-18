import React from 'react';
import InputPage from './components/InputPage';
import ReportPage from './components/ReportPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <div className="App" style={{
      backgroundImage: "url('https://cdn.dribbble.com/users/43762/screenshots/1438974/ng-colab-space_night.gif')",
      backgroundSize: "cover", // Adjust size to cover the entire container
      backgroundRepeat: "no-repeat", // Prevent repetition
      backgroundPosition: "center" // Center the image
    }}>
      <div className="bg-lightslategray h-screen font-sans">
        <div className="container mx-auto h-full flex justify-center items-center">
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={InputPage} />
          <Route path="/report" component={ReportPage} />
        </Switch>
      </div>
    </Router>
    </div>
    </div>
    </div>
  );
};

export default App;
