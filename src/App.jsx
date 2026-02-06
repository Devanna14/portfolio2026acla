import React from 'react';
import './App.css';

// Importar imagen de perfil
import imageProfile from './assets/Pic1.jpeg';

// Importar iconos de react-icons
import { FaReact } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { PiFileSqlFill } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdAndroid } from "react-icons/md";
import { SiPostman } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiCpanel } from "react-icons/si";
import { FcSupport } from "react-icons/fc";
import { FaServer } from "react-icons/fa";

//Iconos para el footer - contacto
import { FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

//FOTOS PARA LA GALERIA DE PROYECTOS
import odontologiaImg from './assets/Proyectos/Odontologia - Geeks.jpeg';
import srsImg from './assets/Proyectos/SRS.png';
import lucaTermiImg from './assets/Proyectos/LUCA TERMI.png';
import ligaEliteImg from './assets/Proyectos/LigaElite.jpeg';
import pvGeneralImg from './assets/Proyectos/PVGENERAL.png';
import jjlservicesImg from './assets/Proyectos/JJLServices - Geeks.jpeg';

//COVID
import covidImg from './assets/Proyectos/COVID - Geeks.jpeg';
import covidImg1 from './assets/Proyectos/CovidGaleria/covid-1.png';

import acmeImg from './assets/Proyectos/Acme - Geeks.jpeg';
import cpemsImg from './assets/Proyectos/CPEMS.png';
import sevsImg from './assets/Proyectos/sevs - hpop.jpg'
import ledherAppImg from './assets/Proyectos/Ledeher app.png'
import mcrAppImg from './assets/Proyectos/mcr scanner.png'
import museoApp from './assets/Proyectos/museo app.png'

//EVENTOS CJR
import eventosCJRImg from './assets/Proyectos/eventosCJR.png'
import eventosCJRImg1 from './assets/Proyectos/eventosCJRGaleria/eventosCJR-1.png'

//LigaElite
import ligaEliteGaleria1 from './assets/Proyectos/LigaEliteGaleria/ligaElite-1.jpeg'
import ligaEliteGaleria2 from './assets/Proyectos/LigaEliteGaleria/ligaElite-2.jpeg'
import ligaEliteGaleria3 from './assets/Proyectos/LigaEliteGaleria/ligaElite-3.jpeg'
import ligaEliteGaleria4 from './assets/Proyectos/LigaEliteGaleria/ligaElite-4.jpeg'

// Sub-componente para las tarjetas de experiencia
const ExperienceCard = ({ company, role, date, description, color, tools = [] }) => (
  <div style={{
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '20px',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    width: '100%',
    maxWidth: '800px',
    backdropFilter: 'blur(5px)'
  }}
    onMouseEnter={(e) => {
      e.currentTarget.style.border = `1px solid ${color}`;
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.border = `1px solid rgba(255, 255, 255, 0.1)`;
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
      <h3 style={{ color: color, margin: 0, fontSize: '1.4rem' }}>
        {role} <span style={{ color: '#fff', opacity: 0.5 }}> - {company}</span>
      </h3>
      <span style={{ color: '#fff', opacity: 0.6, fontSize: '0.9rem' }}>{date}</span>
    </div>

    <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1rem', margin: '0 0 15px 0' }}>
      {description}
    </p>

    {/* SECCIÓN DE ICONOS/HERRAMIENTAS */}
    {tools.length > 0 && (
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
        {tools.map((tool, index) => (
          <span key={index} style={{
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease',
            color: color, // Usamos el color de la tarjeta para los iconos/nombres
            border: `1px solid ${color}44`, // Borde sutil del mismo color
            padding: '4px 10px',
            borderRadius: '6px',
            backgroundColor: 'rgba(0,0,0,0.2)',
            fontWeight: 'bold'
          }}>
            {tool}
          </span>
        ))}
      </div>
    )}
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

// Sub-componente principal cards de galeria
const ProjectCard = ({ title, category, image, color, link, description, gallery = [], onOpenGallery }) => {
  const dashedBorderStyle = {
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='rgba(255, 255, 255, 0.2)' stroke-width='1' stroke-dasharray='10%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
    borderRadius: '24px',
  };

  // Función para manejar el clic en el enlace
  const handleLinkClick = (e) => {
    if (link === '#') {
      e.preventDefault();
      onOpenGallery(gallery, title);
    }
  };

  return (
    <div className="project-card" style={{
      ...dashedBorderStyle,
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      width: '100%',
      maxWidth: '350px',
      textAlign: 'left',
      zIndex: 10,
      position: 'relative',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="img-container" style={{ width: '100%', height: '180px', overflow: 'hidden', position: 'relative' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', opacity: 0.9 }} />
        <div style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          backgroundColor: color,
          color: 'black',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          {category}
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <h3 style={{ color: 'white', margin: '0 0 8px 0', fontSize: '1.2rem', fontWeight: '700' }}>
          {title}
        </h3>

        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.95rem',
          lineHeight: '1.5',
          margin: '0 0 15px 0',
          display: '-webkit-box',
          WebkitLineClamp: '4',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {description}
        </p>

        {/* RENDERIZADO CONDICIONAL DEL LINK */}
        {link ? (
          <a
            href={link}
            onClick={handleLinkClick}
            style={{
              color: color, textDecoration: 'none', fontSize: '0.95rem',
              fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer'
            }}
          >
            {link === '#' ? 'Ver Galería' : 'Ver proyecto'} <span>→</span>
          </a>
        ) : (
          <div style={{
            marginTop: '15px',
            fontSize: '0.95rem',
            color: 'rgba(255, 255, 255, 0.64)',
            fontStyle: 'italic',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Proyecto Interno / Privado
          </div>
        )}
      </div>
    </div>
  );
};

//Sub-componente modal galeria de fotos (proyectos) - pendiente de implementar
const ImageModal = ({ isOpen, onClose, images, title }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  // Cerrar con tecla Escape
  React.useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !images || images.length === 0) return null;

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)',
      zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
      backdropFilter: 'blur(15px)', padding: '10px' // Menos padding en móvil
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

        {/* BOTÓN CERRAR SUPERIOR */}
        <button onClick={onClose} style={{
          position: 'absolute', top: '-60px', right: '10px',
          background: 'none', border: 'none', color: 'white',
          fontSize: '2.5rem', cursor: 'pointer', opacity: 0.7
        }}>&times;</button>

        <h2 style={{
          color: 'white',
          marginBottom: '20px',
          fontSize: 'clamp(1rem, 4vw, 1.8rem)',
          fontWeight: '300',
          padding: '0 20px'
        }}>{title}</h2>

        {/* CONTENEDOR DE IMAGEN Y BOTONES */}
        <div style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          {images.length > 1 && (
            <button
              onClick={prevSlide}
              style={{ ...navButtonStyle, left: '10px' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
            >
              &#10094;
            </button>
          )}

          <img
            src={images[currentIndex]}
            alt="Gallery"
            style={{
              maxWidth: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              borderRadius: '12px',
              userSelect: 'none'
            }}
          />

          {images.length > 1 && (
            <button
              onClick={nextSlide}
              style={{ ...navButtonStyle, right: '10px' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
            >
              &#10095;
            </button>
          )}
        </div>

        {/* INDICADOR DE PÁGINA */}
        <div style={{
          marginTop: '20px',
          color: 'black',
          backgroundColor: '#6f00ffd3',
          padding: '5px 15px',
          borderRadius: '20px',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

//Estilos para los botones de navegación del modal
const navButtonStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  color: 'white',
  border: 'none',
  width: 'clamp(40px, 8vw, 60px)',
  height: 'clamp(40px, 8vw, 60px)',
  cursor: 'pointer',
  fontSize: '1.5rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 20,
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(5px)',
  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
};

const Portafolio = () => {
  // --- NUEVO ESTADO PARA EL MODAL ---
  const [modalConfig, setModalConfig] = React.useState({
    isOpen: false,
    images: [],
    title: ''
  });

  // --- GRUPOS DE IMÁGENES POR PROYECTO ---
  const fotosOdontologia = [odontologiaImg];
  const fotosLigaElite = [ligaEliteGaleria1, ligaEliteGaleria2, ligaEliteGaleria3, ligaEliteGaleria4];
  const fotosCovid = [covidImg, covidImg1];
  const fotosEventosCJR = [eventosCJRImg, eventosCJRImg1];

  const openGallery = (images, title) => {
    setModalConfig({ isOpen: true, images, title });
  };

  const closeGallery = () => {
    setModalConfig({ ...modalConfig, isOpen: false });
  };

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
      linear-gradient(to right, rgba(255, 255, 194, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
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

      {/* --- SECCIÓN 1: HEADER --- */}
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

        {/* FOOTER */}
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
              date="Abril 2024"
              color="#d4e94d"
              description="Desarrollo de software, mejora y optimización de sistemas existentes."
              tools={[<FaReact />, <RiNodejsLine />, <PiFileSqlFill />, <FaGitAlt />, <FaGithub />, <SiPostman />, <SiMysql />, <MdAndroid />, <SiPhp />, "Vb.Net"]}
            />
            <ExperienceCard
              company="LigaElite"
              role="Desarrollador Web"
              date="Julio 2024"
              color="#e94d89"
              description="Desarrollo y diseño de sistema web para control de jugadores y manejo administrativo."
              tools={[<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <SiCpanel />, <FaReact />, <RiNodejsLine />, <SiMysql />, <FaGitAlt />, <FaGithub />, <SiPostman />]}
            />
            <ExperienceCard
              company="Geeks México"
              role="Asistente TI"
              date="2021 - 2024"
              color="#a29bfe"
              description="Brinde apoyo técnico a usuarios y mantenimiento de equipos. Participe en proyectos de software desarrollando y diseñando sistemas y aplicaciones personalizados de la mano del clente."
              tools={[<FcSupport />, <FaServer />, <MdAndroid />, <PiFileSqlFill />, <FaGitAlt />, <FaGithub />, <SiPostman />, <SiMysql />, <SiPhp />, <FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <SiCpanel />, "Vb.Net"]}
            />
            <ExperienceCard
              company="Desarrollador Web"
              role="CPEMS"
              date="2020 - 2021"
              color="#9bfed5ff"
              description="Diseñe y desarrolle un sistema web para el control de los alumnos y docentes permitiendo un mayor control y manejo de los recursos para los estudiantes."
              tools={[<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <SiPhp />, <SiMysql />, <SiCpanel />]}
            />
            <ExperienceCard
              company="Museo Casa del Rebozo"
              role="Programador aplicación android"
              date="2019 - 2020"
              color="#f72ecbff"
              description="Como parte de mi residencia profesional y proyecto final escolar, desarrolle y diseñe una aplicación android para el museo que permite manejar de forma más optima la información de registros diarios y reduce los tiempos de espera en taquilla."
              tools={[<MdAndroid />, <SiPhp />, <SiCpanel />]}
            />
          </div>
        </div>
      </section>

      {/* --- MODAL RENDERIZADO --- */}
      <ImageModal
        isOpen={modalConfig.isOpen}
        onClose={closeGallery}
        images={modalConfig.images}
        title={modalConfig.title}
      />

      {/* --- SECCIÓN 3: PROYECTOS --- */}
      <section style={{ ...sectionStyle, justifyContent: 'flex-start', paddingTop: '80px' }}>
        <div style={gridOverlayStyle}></div>

        <div style={{ position: 'relative', zIndex: 10, width: '90%', maxWidth: '1200px', textAlign: 'center' }}>
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: '800',
            marginBottom: '50px'
          }}>
            Algunos <span style={{ color: '#e94d89' }}>proyectos</span>
          </h2>

          {/* GRID DE GALERÍA */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            justifyItems: 'center',
            paddingBottom: '100px'
          }}>
            <ProjectCard
              title="Sistema Web: Odontología"
              category="Software Web"
              color="#d4e94d"
              image={odontologiaImg}
              description="Sistema web para control de pacientes y citas odontológicas."
              link="#"
              gallery={fotosOdontologia}
              onOpenGallery={openGallery}
            />
            <ProjectCard
              title="Sistema Web: SEVS"
              category="Software Web"
              color="#00d2ff"
              image={sevsImg}
              description="Sistema web interno de la empresa para control y alta de ingresos de cilindros hidraulicos."
            />
            <ProjectCard
              title="Sistema Web: Liga softball"
              category="Software Web"
              color="#e94d89"
              link="#"
              image={fotosLigaElite}
              onOpenGallery={openGallery}
              description="Sistema web para control de equipos, jugadores y temas administrativos para la liga de softball."
            />
            <ProjectCard
              title="Sistema SRS"
              category="Software Desktop"
              color="#00ffb3ff"
              image={srsImg}
              description="Sistema interno de control de material y del proceso interno de los sistemas hidraulicos."
              onOpenGallery={openGallery}
            />
            <ProjectCard
              title="Sistema Desktop: Luca Termi"
              category="Software Desktop"
              color="#d60ebbff"
              image={lucaTermiImg}
              description="Sistema interno para el control, calculo y formatos de los servicios de almacenamiento de gas."
            />
            <ProjectCard
              title="Sistema Web: JJL Services"
              category="Software Web"
              color="#e9984dff"
              image={jjlservicesImg}
              description="Sistema web para el registro de la gestión de la medición y controles volumétricos."
              link="https://jjlservices.com.mx/"
            />
            <ProjectCard
              title="Sistema Web: Registros pruebas COVID"
              category="Software Web"
              color="#7b92fcff"
              image={covidImg}
              description="Sistema web para el control de resultados de pruebas COVID mediante lectores QR."
              link="#"
              gallery={fotosCovid}
              onOpenGallery={openGallery}
            />
            <ProjectCard
              title="Sistema Web: ACME"
              category="Software Web"
              color="#e23779ff"
              image={acmeImg}
              description="Web informativa para la empresa ACME dedicada a la venta y fabricación de cilindros hidraulicos."
              link="https://www.actuadoresdemexico.com/"
            />
            <ProjectCard
              title="APP Android: Mecanica Ledeher"
              category="App Mobile"
              color="#c7e94dff"
              image={ledherAppImg}
              description="Aplicación que permite registrar los servicios a realizar a los vehiculos."
            />
            <ProjectCard
              title="APP Android: MCR Scanner"
              category="App Mobile"
              color="#e9934dff"
              image={mcrAppImg}
              description="Aplicación que permite consultar el inventario de medicamentos mediante el escaneo de códigos de barras."
            />
            <ProjectCard
              title="Sistema Web: Control eventos CJR"
              category="Software Web"
              color="#ac0df7ff"
              image={eventosCJRImg}
              description="Sistema web que permite registrar eventos y se da control de acceso a la instalación mediante codigos QR."
              link="#"
              gallery={fotosEventosCJR}
              onOpenGallery={openGallery}
            />
            <ProjectCard
              title="Sistema Web: CPEMS"
              category="Software Web"
              color="#4dabe9ff"
              image={cpemsImg}
              description="Sistema web para el control, registro de alumnos y de material escolar."
              link="https://www.cpems.edu.mx/index.html"
            />
            <ProjectCard
              title="APP Android: Museo Casa del Rebozo"
              category="App Mobile"
              color="#9c0942ff"
              image={museoApp}
              description="Aplicación que permite registrar visitas diarias al museo para mejor control."
            />
            <ProjectCard
              title="Sistema Desktop: PV General"
              category="Software Desktop"
              color="#f0ecedff"
              image={pvGeneralImg}
              description="Proyecto personal - sistema de control de inventario y punto de venta general."
            />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 4: CONTACTO --- */}
      <section style={{ ...sectionStyle, backgroundColor: '#0a0e14' }}>
        <div style={gridOverlayStyle}></div>

        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '60px 20px',
          maxWidth: '800px',
        }}>

          <h2 style={{
            color: 'white',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: '20px'
          }}>
            ¿Quieres crear <br />
            <span style={{
              color: '#7700ffff',
              textShadow: '0 0 20px rgba(153, 0, 255, 0.5)'
            }}>algo increíble?</span>
          </h2>

          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.2rem',
            marginBottom: '40px',
            maxWidth: '500px',
            margin: '0 auto 40px auto'
          }}>
            Hablemos sobre tu próximo proyecto y trabajemos juntos para hacerlo realidad.
          </p>

          {/* BOTÓN DE CONTACTO */}
          <a
            href="mailto:cecylar14@gmail.com"
            style={{
              display: 'inline-block',
              backgroundColor: '#4de97cff',
              color: 'black',
              padding: '18px 40px',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '800',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(212, 233, 77, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 15px 40px rgba(95, 233, 77, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(95, 233, 77, 0.3)';
            }}
          >
            Contáctame ahora →
          </a>

          {/* REDES SOCIALES ABAJO */}
          <div style={{ marginTop: '60px', display: 'flex', gap: '20px', justifyContent: 'center', opacity: 0.6 }}>
            <a href="https://www.linkedin.com/in/ana-cecilia-lara-alvarado-40768b206" style={{ color: 'white', textDecoration: 'none', fontSize: '1.7rem' }}><FaLinkedin /></a>
            <a href="https://github.com/Devanna14" style={{ color: 'white', textDecoration: 'none', fontSize: '1.7rem' }}><FaGithub /></a>
            <a href="https://www.threads.com/@devanna1406" style={{ color: 'white', textDecoration: 'none', fontSize: '1.7rem' }}><FaSquareThreads /></a>
          </div>
        </div>

        <div style={{ paddingBottom: '40px', opacity: 0.7, color: 'white', letterSpacing: '2px', fontSize: '1rem', zIndex: 10 }}>
          CECILIA LARA © 2026 • Imagina, codifica y crea 🤍
        </div>
      </section>
    </div>
  );
};

export default Portafolio;