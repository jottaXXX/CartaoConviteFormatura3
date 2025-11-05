import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './InviteCard.css';

const InviteCard = () => {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const handleSealClick = () => {
    if (isOpening) return;
    
    setIsOpening(true);
    setShowTooltip(false);

    // Navigate after animation completes
    setTimeout(() => {
      navigate('/detalhes');
    }, 1600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSealClick();
    }
  };

  return (
    <div className="invite-container">
      <div className={`envelope-wrapper ${isOpening ? 'opening' : ''}`}>
        {/* Envelope Back */}
        <div className="envelope-back"></div>
        
        {/* Envelope Flap (Top Triangle) */}
        <div className="envelope-flap-top"></div>
        
        {/* Envelope Front Flaps */}
        <div className="envelope-flap-left"></div>
        <div className="envelope-flap-right"></div>
        
        {/* Seal/Logo Container */}
        <div className="seal-container">
          {showTooltip && !isOpening && (
            <div className="floating-tooltip" role="status" aria-live="polite">
              Clique no selo para abrir
              <div className="tooltip-arrow"></div>
            </div>
          )}
          
          <div
            className={`wax-seal ${isOpening ? 'breaking' : ''}`}
            onClick={handleSealClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Clique para abrir o convite de formatura"
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_tech-formatura/artifacts/x6y11q6k_image.png" 
              alt="Colégio Técnico de Bom Jesus"
              className="seal-logo"
            />
          </div>
        </div>

        {/* Card Inside Envelope */}
        <div className="inner-card">
          <div className="card-content">
            <p className="card-subtitle">Você está convidado(a)</p>
            <h2 className="card-title">Formatura 2025</h2>
            <p className="card-course">Técnico em Informática</p>
            <div className="card-divider"></div>
            <p className="card-date">16 de Dezembro de 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteCard;