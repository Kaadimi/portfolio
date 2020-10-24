import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './containers/Landing'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import Footer from './components/Footer/Footer'
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
     <Router style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/projects" exact component={Projects}></Route>
            <Route path="/contact" exact component={Contact}></Route>
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
