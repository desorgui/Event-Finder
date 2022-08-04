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
import EventDetails from './components/EventDetails';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
      <main>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/:id" element={<EventDetails />} />
        </Routes>
      </main>
    </Router>
    </div>
  );
}

export default App;
