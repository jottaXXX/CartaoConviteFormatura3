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
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSealClick();
    }
  };

  return (
    <div className="invite-container">
      <div className="invite-card">
        <p className="invite-subtitle">Você está convidado(a)</p>
        
        <div className="seal-container">
          {showTooltip && !isOpening && (
            <div className="floating-tooltip" role="status" aria-live="polite">
              Clique no selo para abrir o convite
              <div className="tooltip-arrow"></div>
            </div>
          )}
          
          <div
            className={`seal ${isOpening ? 'opening' : ''}`}
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

        <div className="invite-info">
          <h2 className="invite-title">Formatura 2025</h2>
          <p className="invite-course">Técnico em Informática</p>
          <p className="invite-date">16 de Dezembro de 2025</p>
        </div>
      </div>

      {isOpening && (
        <div className="envelope-animation">
          <div className="envelope-base">
            <div className="envelope-flap"></div>
            <div className="envelope-paper"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InviteCard;