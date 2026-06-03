import { useState } from 'react'
import './App.css'
import Menu from './code/components/Menu'

function App() {

  const [mostrarMenu, setMostrarMenu] = useState(false)

  // Estado para controlar el tema
  const [temaOscuro, setTemaOscuro] = useState(true)

  if (!mostrarMenu) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/fondo.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          fontFamily: 'Poppins, sans-serif',
          padding: '20px'
        }}
      >
        <div
          style={{
            background: temaOscuro
              ? 'rgba(15, 23, 42, 0.88)'
              : 'rgba(255,255,255,0.90)',

            backdropFilter: 'blur(12px)',
            padding: '50px',
            borderRadius: '24px',
            textAlign: 'center',

            color: temaOscuro ? 'white' : '#0f172a',

            width: '650px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          }}
        >

          {/* Botón cambiar tema */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
              marginBottom: '25px'
            }}
          >
            <button
              onClick={() => setTemaOscuro(!temaOscuro)}
              style={{
                padding: '8px 14px',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 'bold',
                background: temaOscuro ? '#facc15' : '#1e293b',
                color: temaOscuro ? '#000' : '#fff'
              }}
            >
              {temaOscuro ? '☀️ Cambiar a Claro' : '🌙 Cambiar a Oscuro'}
            </button>
          </div>

          <h1
            style={{
              fontSize: '48px',
              color: temaOscuro ? '#ffffff' : '#0f172a',
              marginBottom: '15px',
              fontWeight: 'bold'
            }}
          >
            Sistema de Algoritmos
          </h1>

          <h2
            style={{
              color: '#60a5fa',
              marginBottom: '25px',
              fontSize: '30px'
            }}
          >
            Ordenamiento y Búsqueda de Datos
          </h2>

          <p
            style={{
              color: temaOscuro ? '#cbd5e1' : '#334155',
              lineHeight: '1.8',
              fontSize: '18px',
              marginBottom: '15px'
            }}
          >
            Proyecto desarrollado para demostrar el funcionamiento
            y comportamiento de distintos algoritmos de ordenamiento
            y búsqueda de datos.
          </p>

          <p
            style={{
              color: temaOscuro ? '#94a3b8' : '#475569',
              fontSize: '16px',
              marginBottom: '30px'
            }}
          >
            Desarrollado por Erick Briseño
          </p>

          <button
            onClick={() => setMostrarMenu(true)}
            style={{
              padding: '15px 40px',
              border: 'none',
              borderRadius: '12px',
              background: '#2563eb',
              color: 'white',
              fontSize: '18px',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            Ingresar
          </button>

        </div>
      </div>
    )
  }

  return <Menu temaOscuro={temaOscuro} />
}

export default App