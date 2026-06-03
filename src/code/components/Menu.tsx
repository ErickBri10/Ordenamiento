import { useState } from 'react'

// Importación de componentes
import Ordenamiento from './Ordenamiento'
import Busqueda from './Busqueda'

// Importación de iconos
import {
  FaSearch,
  FaSortAmountDown
} from "react-icons/fa"

function Menu({ temaOscuro }: { temaOscuro: boolean }) {

  // Estado para controlar la sección activa
  const [seccion, setSeccion] = useState<string | null>(null)

  // Si el usuario entra a ordenamiento
  if (seccion === 'ordenamiento') {
    return (
      <Ordenamiento
        temaOscuro={temaOscuro}
        onVolver={() => setSeccion(null)}
      />
    )
  }

  // Si el usuario entra a búsqueda
  if (seccion === 'busqueda') {
    return (
      <Busqueda
        temaOscuro={temaOscuro}
        onVolver={() => setSeccion(null)}
      />
    )
  }

  return (

    <div
      style={{

        height: '100vh',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundImage: 'url("/fondo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        backgroundColor: temaOscuro
          ? 'rgba(0,0,0,0.5)'
          : 'rgba(255,255,255,0.30)',

        backgroundBlendMode: temaOscuro
          ? 'darken'
          : 'lighten',

        fontFamily: 'Poppins, sans-serif',
      }}
    >

      <div
        style={{

          background: temaOscuro
            ? 'rgba(255,255,255,0.08)'
            : 'rgba(255,255,255,0.92)',

          padding: '40px',
          borderRadius: '20px',

          backdropFilter: 'blur(10px)',

          boxShadow: '0 10px 40px rgba(0,0,0,0.45)',

          textAlign: 'center',
          width: '320px',
        }}
      >

        <h1
          style={{
            color: temaOscuro
              ? 'white'
              : '#0f172a',

            marginBottom: '30px',
            fontSize: '32px',
          }}
        >
          Proyecto de Algoritmos
        </h1>

        {/* Botón Ordenamiento */}
        <button

          onClick={() => setSeccion('ordenamiento')}

          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.03)'
          }}

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

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >

          <FaSortAmountDown />

          Ordenamiento

        </button>

        {/* Botón Búsqueda */}
        <button

          onClick={() => setSeccion('busqueda')}

          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.03)'
          }}

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

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >

          <FaSearch />

          Búsqueda

        </button>

      </div>
    </div>
  )
}

export default Menu