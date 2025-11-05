import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { useToast } from '../hooks/use-toast';
import './EventDetails.css';

const EventDetails = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulated API call - will be replaced with real backend later
    setTimeout(() => {
      toast({
        title: "Confirmação recebida!",
        description: "Obrigado por confirmar sua presença."
      });
      setFormData({ name: '', attendance: 'yes' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="details-container">
      <header className="details-header">
        <img 
          src="https://customer-assets.emergentagent.com/job_tech-formatura/artifacts/x6y11q6k_image.png" 
          alt="Colégio Técnico de Bom Jesus"
          className="header-logo"
        />
        <h1 className="header-title">Convite de Formatura — Turma 2025</h1>
      </header>

      <main className="details-main">
        <section className="welcome-section fade-in">
          <h2 className="section-title">Você está convidado!</h2>
          <p className="welcome-text">
            É com muita alegria que convidamos você para celebrar a formatura da 
            <strong> Turma 2025 do Curso Técnico em Informática</strong> do Colégio 
            Técnico de Bom Jesus - UFPI.
          </p>
          <p className="welcome-text">
            Venha comemorar conosco esta conquista especial e fazer parte deste 
            momento inesquecível em nossas vidas.
          </p>
        </section>

        <section className="event-info fade-in-delayed">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon-wrapper">
                <Calendar className="info-icon" />
              </div>
              <div className="info-content">
                <h3 className="info-label">Data</h3>
                <p className="info-value">16 de Dezembro de 2025</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper">
                <Clock className="info-icon" />
              </div>
              <div className="info-content">
                <h3 className="info-label">Horário</h3>
                <p className="info-value">19:30</p>
              </div>
            </div>

            <div className="info-card full-width">
              <div className="info-icon-wrapper">
                <MapPin className="info-icon" />
              </div>
              <div className="info-content">
                <h3 className="info-label">Local</h3>
                <p className="info-value">Auditório da UFPI</p>
                <p className="info-address">Bom Jesus, Piauí</p>
              </div>
            </div>
          </div>

          <Button 
            className="location-button"
            size="lg"
            onClick={() => window.open('https://maps.app.goo.gl/g2Hewyrhuo3s7yuc7', '_blank')}
            aria-label="Abrir localização no Google Maps"
          >
            <MapPin className="button-icon" />
            Ver Localização
          </Button>
        </section>

        <section className="map-section fade-in-delayed-2">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5234!2d-44.3567!3d-9.0789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnNDQuMCJTIDQ0wrAyMScyNC4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Auditório da UFPI em Bom Jesus"
            ></iframe>
          </div>
        </section>

        <section className="rsvp-section fade-in-delayed-3">
          <div className="rsvp-card">
            <div className="rsvp-header">
              <Users className="rsvp-icon" />
              <h2 className="rsvp-title">Confirme sua Presença</h2>
            </div>
            <form onSubmit={handleSubmit} className="rsvp-form">
              <div className="form-group">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <Label>Você irá comparecer?</Label>
                <RadioGroup 
                  value={formData.attendance} 
                  onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                >
                  <div className="radio-item">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="radio-label">Sim, estarei presente</Label>
                  </div>
                  <div className="radio-item">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="radio-label">Não poderei comparecer</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Confirmar Presença'}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="details-footer">
        <p>Colégio Técnico de Bom Jesus - UFPI</p>
        <p>Turma 2025 - Técnico em Informática</p>
      </footer>
    </div>
  );
};

export default EventDetails;