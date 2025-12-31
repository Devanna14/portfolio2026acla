import React from 'react';
import './App.css';

const PortfolioHero = () => {
  const containerStyle = {
    backgroundColor: '#0a0e14', 
    minHeight: '100vh',         
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',       // Centra horizontalmente
    justifyContent: 'center',    // Centra verticalmente
    position: 'relative',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif'
  };

  // La cuadrícula (Grid)
  const gridOverlayStyle = {
    position: 'absolute',
    inset: 0,
    // Creamos líneas horizontales y verticales de 1px
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px', // Tamaño de los cuadros
    zIndex: 1
  };

  return (
    <div style={containerStyle}>
      {/* Fondo de cuadrícula */}
      <div style={gridOverlayStyle}></div>

      {/* Contenido centrado (Z-index alto para que esté arriba) */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        
        <p style={{ color: 'white', fontSize: '1.5rem', marginBottom: '-10px', fontStyle: 'italic', opacity: 0.9 }}>
          2026
        </p>
        
        <h1 style={{ 
          color: 'white', 
          fontSize: 'clamp(3rem, 10vw, 8rem)', // Se ajusta al tamaño de pantalla
          fontWeight: 'bold', 
          margin: '10px 0',
          letterSpacing: '-2px' 
        }}>
          Portafolio
        </h1>

        {/* Contenedor de etiquetas (Flex horizontal) */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Tag color="#e94d89">Web</Tag>
          <Tag color="#d4e94d">Desktop</Tag>
          <Tag color="#ffffff">Mobil</Tag>
        </div>
      </div>
    </div>
  );
};

// Componente pequeño para las etiquetas
const Tag = ({ children, color }) => (
  <span style={{
    backgroundColor: color,
    color: 'black',
    padding: '6px 16px',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '700',
    textTransform: 'none'
  }}>
    {children}
  </span>
);

export default PortfolioHero;