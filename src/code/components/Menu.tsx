import { useState } from 'react'

// Importación de componentes
import Ordenamiento from './Ordenamiento'
import Busqueda from './Busqueda'

// Importación de iconos
import {
  FaSearch,
  FaSortAmountDown
} from "react-icons/fa"

function Menu() {

  // Estado para controlar la sección activa
  const [seccion, setSeccion] = useState<string | null>(null)

  // Si el usuario entra a ordenamiento
  // se renderiza el componente Ordenamiento
  if (seccion === 'ordenamiento') {
    return <Ordenamiento onVolver={() => setSeccion(null)} />
  }

  // Si el usuario entra a búsqueda
  // se renderiza el componente Busqueda
  if (seccion === 'busqueda') {
    return <Busqueda onVolver={() => setSeccion(null)} />
  }

  return (

    // Contenedor principal
    <div
      style={{

        // Altura completa de la pantalla
        height: '100vh',

        // Centrado horizontal y vertical
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // Imagen de fondo
        backgroundImage: 'url("/fondo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        // Oscurece ligeramente la imagen
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundBlendMode: 'darken',

        // Fuente principal
        fontFamily: 'Poppins, sans-serif',
      }}
    >

      {/* Tarjeta principal */}
      <div
        style={{

          // Fondo transparente tipo glassmorphism
          background: 'rgba(255,255,255,0.08)',

          padding: '40px',
          borderRadius: '20px',

          // Efecto blur
          backdropFilter: 'blur(10px)',

          // Sombra de la tarjeta
          boxShadow: '0 10px 40px rgba(0,0,0,0.45)',

          textAlign: 'center',
          width: '320px',
        }}
      >

        {/* Título principal */}
        <h1
          style={{
            color: 'white',
            marginBottom: '30px',
            fontSize: '32px',
          }}
        >
          Proyecto de Algoritmos
        </h1>

        {/* Botón para sección ordenamiento */}
        <button

          // Cambia la sección al hacer clic
          onClick={() => setSeccion('ordenamiento')}

          // Efecto hover al pasar el mouse
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.03)'
          }}

          // Regresa el tamaño normal
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}

          style={{

            width: '100%',
            padding: '14px',
            marginBottom: '15px',

            border: 'none',
            borderRadius: '12px',

            background: '#2563eb',
            color: 'white',

            fontSize: '16px',
            cursor: 'pointer',

            transition: '0.3s',

            // Alinea icono y texto
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >

          {/* Icono */}
          <FaSortAmountDown />

          Ordenamiento
        </button>

        {/* Botón para sección búsqueda */}
        <button

          // Cambia a la sección búsqueda
          onClick={() => setSeccion('busqueda')}

          // Animación 
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.03)'
          }}

          // Regresa tamaño normal
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}

          style={{

            width: '100%',
            padding: '14px',

            border: 'none',
            borderRadius: '12px',

            background: '#7c3aed',
            color: 'white',

            fontSize: '16px',
            cursor: 'pointer',

            transition: '0.3s',

            // Alineación de icono y texto
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >

          {/* Icono */}
          <FaSearch />

          Búsqueda
        </button>

      </div>
    </div>
  )
}

export default Menu