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
import Filter from './components/Filter';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
      <main>
        <Filter />
        <Routes>
          <Route path="/" element={<Events />} />
        </Routes>
      </main>
    </Router>
    </div>
  );
}

export default App;
