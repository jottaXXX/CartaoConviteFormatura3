import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InviteCard from './pages/InviteCard';
import EventDetails from './pages/EventDetails';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InviteCard />} />
          <Route path="/detalhes" element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;