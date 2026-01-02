import React from 'react';
import './App.css';
import imageProfile from './assets/Pic1.jpeg';
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

//FOTOS PARA LA GALERIA DE PROYECTOS
import odontologiaImg from './assets/Proyectos/Odontologia - Geeks.jpeg';
import srsImg from './assets/Proyectos/SRS.png';
import lucaTermiImg from './assets/Proyectos/LUCA TERMI.png';
import ligaEliteImg from './assets/Proyectos/LigaElite.jpeg';
import pvGeneralImg from './assets/Proyectos/PVGENERAL.png';
import jjlservicesImg from './assets/Proyectos/JJLServices - Geeks.jpeg';
import covidImg from './assets/Proyectos/COVID - Geeks.jpeg';
import acmeImg from './assets/Proyectos/Acme - Geeks.jpeg';
import cpemsImg from './assets/Proyectos/CPEMS.png';
import sevsImg from './assets/Proyectos/sevs - hpop.jpg';

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
        {role} <span style={{ color: '#fff', opacity: 0.5 }}>at {company}</span>
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
const ProjectCard = ({ title, category, image, color, link }) => (
  <div className="project-card" style={{
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px dashed rgba(255, 255, 255, 0.2)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    width: '100%',
    maxWidth: '350px',
    textAlign: 'left',
    zIndex: 10
  }}>
    <div className="img-container" style={{ width: '100%', height: '200px', overflow: 'hidden', position: 'relative' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
      <h3 style={{ color: 'white', margin: '0 0 10px 0', fontSize: '1.2rem' }}>{title}</h3>
      <a href={link} style={{
        color: color,
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}>
        Ver proyecto <span>→</span>
      </a>
    </div>
  </div>
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

      {/* --- SECCIÓN 1 --- */}
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
              tools={[<FaReact />, <RiNodejsLine />, <PiFileSqlFill />, <FaGitAlt />, <FaGithub />, <SiPostman />, <SiMysql />, <MdAndroid />, <SiPhp />, "Vb.Net"]}
            />
            <ExperienceCard
              company="LigaElite"
              role="Desarrollador Web"
              date="Julio 2024 - Present"
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
              link="#"
            />
            <ProjectCard
              title="Sistema Web: SEVS"
              category="Software Web"
              color="#00d2ff"
              image={sevsImg}
              link="#"
            />
            <ProjectCard
              title="Sistema Web: Liga softball"
              category="Software Web"
              color="#e94d89"
              image={ligaEliteImg}
              link="#"
            />
            <ProjectCard
              title="Sistema SRS"
              category="Desktop App"
              color="#00ffb3ff"
              image={srsImg}
              link="#"
            />
            <ProjectCard
              title="Sistema Desktop: Luca Termi"
              category="Software Desktop"
              color="#d60ebbff"
              image={lucaTermiImg}
              link="#"
            />
            <ProjectCard
              title="Sistema Web: JJL Services"
              category="Software Web"
              color="#e9984dff"
              image={jjlservicesImg}
              link="#"
            />
            <ProjectCard
              title="Sistema Web: Registros pruebas COVID"
              category="Software Web"
              color="#7b92fcff"
              image={covidImg}
              link="#"
            />
            <ProjectCard
              title="Sistema Web: ACME"
              category="Software Web"
              color="#e23779ff"
              image={acmeImg}
              link="#"
            />
            <ProjectCard
              title="Sistema Web: CPEMS"
              category="Software Web"
              color="#4dabe9ff"
              image={cpemsImg}
              link="#"
            />
            <ProjectCard
              title="Sistema Desktop: PV General"
              category="Software Desktop"
              color="#f0ecedff"
              image={pvGeneralImg}
              link="#"
            />
          </div>
        </div>

        <div style={{ paddingBottom: '40px', opacity: 0.3, color: 'white', letterSpacing: '2px', fontSize: '0.7rem', zIndex: 10 }}>
          CECILIA LARA © 2026 • Imaginar, codifica y crear 🤍
        </div>
      </section>
    </div>
  );
};

export default Portafolio;