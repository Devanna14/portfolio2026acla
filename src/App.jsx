function App() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#0a1118] overflow-hidden">

      {/* CAPA DE CUADRÍCULA */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-8xl font-bold tracking-tighter">
          portfolio
        </h1>
        {/* Aquí irían tus etiquetas y stickers */}
      </div>

    </div>
  )
}

export default App