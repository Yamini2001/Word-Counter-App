import './App.css';
import NavigationBar from './Components/NavigationBar';
import Card from './Components/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './NavbarComponents/Home'; // Import your home component
import WhyUs from './NavbarComponents/Whyus'; // Import your WhyUs component
import Review from './NavbarComponents/Review'; // Import your Review component
import Login from './NavbarComponents/Login'; // Import your Login component

function App() {
  return (
    <Router> {/* Wrap your entire application with Router */}
      <div className="container">
        <NavigationBar />
        <Routes>
          <Route path="/" exact component={Home} /> {/* Define routes for different components */}
          <Route path="/why-us" component={WhyUs} />
          <Route path="/review" component={Review} />
          <Route path="/login" component={Login} />
        </Routes>
        <Card />
      </div>
    </Router>
  );
}

export default App;
