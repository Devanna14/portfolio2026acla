import React from 'react';
import './App.css';
import imageProfile from './assets/Pic1.jpeg';

// --- SUB-COMPONENTE PARA LAS TARJETAS DE EXPERIENCIA ---
const ExperienceCard = ({ company, role, date, description, color }) => (
  <div style={{
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '20px',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    cursor: 'default',
    width: '100%',
    maxWidth: '800px',
    backdropFilter: 'blur(5px)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.border = `1px solid ${color}`;
    e.currentTarget.style.transform = 'translateX(10px)';
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.border = `1px solid rgba(255, 255, 255, 0.1)`;
    e.currentTarget.style.transform = 'translateX(0px)';
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
  }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
      <h3 style={{ color: color, margin: 0, fontSize: '1.4rem', fontWeight: '700' }}>
        {role} <span style={{color: '#fff', opacity: 0.5, fontWeight: '400'}}>at {company}</span>
      </h3>
      <span style={{ color: '#fff', opacity: 0.6, fontSize: '0.9rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '20px' }}>
        {date}
      </span>
    </div>
    <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1rem', margin: 0 }}>{description}</p>
  </div>
);

// Sub-componente para las etiquetas
const Tag = ({ children, color }) => (
  <span style={{
    backgroundColor: color,
    color: 'black',
    padding: '8px 20px',
    borderRadius: '10px',
    fontSize: '0.95rem',
    fontWeight: '800',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s ease'
  }}>
    {children}
  </span>
);

const Portafolio = () => {
  // Estilos base para las secciones
  const sectionStyle = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    scrollSnapAlign: 'start', // Punto de anclaje para el scroll
  };

  const gridOverlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    zIndex: 1,
    pointerEvents: 'none'
  };

  return (
    <div style={{ 
      backgroundColor: '#0a0e14', 
      height: '100vh', 
      overflowY: 'scroll', 
      scrollSnapType: 'y mandatory', // Activa el movimiento de un solo golpe
      scrollBehavior: 'smooth'
    }}>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-10px);}
            60% {transform: translateY(-5px);}
          }
          .animate-bounce-custom {
            animation: bounce 2s infinite;
          }
          /* Ocultar barra de scroll para estética limpia */
          div::-webkit-scrollbar { display: none; }
          div { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* --- SECCIÓN 1: HERO --- */}
      <section style={sectionStyle}>
        <div style={gridOverlayStyle}></div>

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
          {/* FOTO CIRCULAR */}
          <div style={{
            width: '200px',
            height: '200px',
            margin: '0 auto 20px auto',
            borderRadius: '50%',
            border: '4px solid #00d2ff', 
            overflow: 'hidden',
            boxShadow: '0 0 25px rgba(0, 210, 255, 0.4)',
          }}>
            <img src={imageProfile} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <p style={{ color: 'white', fontSize: '1.4rem', marginBottom: '-15px', fontStyle: 'italic', opacity: 0.8 }}>
            2026
          </p>

          <h1 style={{
            color: 'white',
            fontSize: 'clamp(3.5rem, 12vw, 9rem)',
            fontWeight: '900',
            margin: '15px 0',
            letterSpacing: '-3px',
            lineHeight: '1'
          }}>
            Portafolio
          </h1>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', marginTop: '20px' }}>
            <Tag color="#e94d89">Web</Tag>
            <Tag color="#d4e94d">Desktop</Tag>
            <Tag color="#ffffff">App Mobiles</Tag>
            <Tag color="#3ecf8e">Bases de datos</Tag>
            <Tag color="#a29bfe">Soporte</Tag>
          </div>
        </div>

        {/* FOOTER HERO */}
        <div style={{ position: 'absolute', bottom: '40px', textAlign: 'center', zIndex: 10, color: 'white' }}>
          <span style={{ fontSize: '0.85rem', letterSpacing: '5px', textTransform: 'uppercase', opacity: 0.5, fontWeight: '500' }}>
            By Cecilia Lara
          </span>
          <div className="animate-bounce-custom" style={{ marginTop: '10px', opacity: 0.7 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 2: EXPERIENCIA --- */}
      <section style={{ ...sectionStyle, justifyContent: 'flex-start', paddingTop: '100px' }}>
        <div style={gridOverlayStyle}></div>
        
        <div style={{ position: 'relative', zIndex: 10, width: '90%', maxWidth: '900px', textAlign: 'center', marginBottom: '100px' }}>
          <h2 style={{ 
            color: 'white', 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
            fontWeight: '800', 
            marginBottom: '50px',
            letterSpacing: '-1px'
          }}>
            My <span style={{ color: '#00d2ff' }}>Experiencia</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ExperienceCard 
              company="Hydraulic Pneumatic Original Parts"
              role="Programador"
              date="Abril 2024 - Present"
              color="#d4e94d"
              description="Desarrollo de software, mejora y optimización de sistemas existentes."
            />
            <ExperienceCard 
              company="LigaElite"
              role="Desarrollador Web"
              date="Julio 2024 - Present"
              color="#e94d89"
              description="Desarrollo y diseño de sistema web para control de jugadores y manejo administrativo."
            />
            <ExperienceCard 
              company="Geeks México"
              role="Asistente TI"
              date="2021 - 2024"
              color="#a29bfe"
              description="Brinde apoyo técnico a usuarios y mantenimiento de equipos. Participe en proyectos de software desarrollando y diseñando sistemas y aplicaciones personalizados de la mano del clente."
            />
            <ExperienceCard 
              company="Desarrollador Web"
              role="CPEMS"
              date="2020 - 2021"
              color="#9bfed5ff"
              description="Diseñe y desarrolle un sistema web para el control de los alumnos y docentes permitiendo un mayor control y manejo de los recursos para los estudiantes."
            />
            <ExperienceCard 
              company="Museo Casa del Rebozo"
              role="Programador aplicación android"
              date="2019 - 2020"
              color="#f72ecbff"
              description="Como parte de mi residencia profesional y proyecto final escolar, desarrolle y diseñe una aplicación android para el museo que permite manejar de forma más optima la información de registros diarios y reduce los tiempos de espera en taquilla."
            />
          </div>
        </div>

        {/* Nombre opcional al final de la experiencia */}
        <div style={{ paddingBottom: '40px', opacity: 0.3, color: 'white', letterSpacing: '2px', fontSize: '0.7rem' }}>
          CECILIA LARA © 2026
        </div>
      </section>
    </div>
  );
};

export default Portafolio;