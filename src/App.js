import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import React, { useEffect } from 'react';
import './App.css';
import { getEvents } from './redux/events';
import Events from './components/Events';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Events />} />
            <Route path="/:id" element={<EventDetails />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
