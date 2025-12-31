import React from 'react';
import './App.css';
import imageProfile from './assets/Pic1.jpeg';

const Portafolio = () => {
  // 1. Estilos del contenedor principal
  const containerStyle = {
    backgroundColor: '#0a0e14',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  // 2. Estilos del fondo de cuadrícula (Grid)
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

  // 3. Estilos de la sección inferior (Nombre + Flecha)
  const footerSectionStyle = {
    position: 'absolute',
    bottom: '40px',
    left: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    zIndex: 10,
    color: 'white'
  };

  return (
    <div style={containerStyle}>
      {/* Animación para la flecha */}
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
        `}
      </style>

      {/* FONDO DE CUADRÍCULA */}
      <div style={gridOverlayStyle}></div>

      {/* CONTENIDO CENTRAL */}
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
          <img
            src={imageProfile}
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
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

        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '900px',
          marginTop: '20px'
        }}>
          <Tag color="#e94d89">Web</Tag>
          <Tag color="#d4e94d">Desktop</Tag>
          <Tag color="#ffffff">App Mobiles</Tag>
          <Tag color="#3ecf8e">Bases de datos</Tag>
          <Tag color="#a29bfe">Soporte</Tag>
        </div>
      </div>

      {/* SECCIÓN INFERIOR (NOMBRE Y SCROLL) */}
      <div style={footerSectionStyle}>
        <span style={{
          fontSize: '0.85rem',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          opacity: 0.5,
          fontWeight: '500'
        }}>
          By Cecilia Lara
        </span>

        <div className="animate-bounce-custom" style={{ cursor: 'pointer', opacity: 0.7 }}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

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

export default Portafolio;