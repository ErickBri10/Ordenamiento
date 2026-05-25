import { useState } from 'react'

// Importación de algoritmos de ordenamiento
import { burbujaMenor } from '../ordenamiento/burbujaMenor'
import { burbujaMayor } from '../ordenamiento/burbujaMayor'
import { seleccion } from '../ordenamiento/seleccion'
import { insercion } from '../ordenamiento/insercion'
import { quickSort } from '../ordenamiento/quickSort'
import { mergeSort } from '../ordenamiento/mergeSort'

// Componente principal de ordenamiento
function Ordenamiento({ onVolver }: { onVolver: () => void }) {

  // Guarda el método seleccionado
  const [metodo, setMetodo] = useState<string | null>(null)

  // Guarda los números escritos por el usuario
  const [input, setInput] = useState<string>("")

  // Guarda el resultado del ordenamiento
  const [resultado, setResultado] = useState<number[]>([])

  // Función principal para ordenar
  function ordenar() {

    // Convierte el texto en arreglo numérico
    const arreglo = input.split(",").map(Number)

    // Ejecuta el método seleccionado
    if (metodo === "Burbuja Menor") {
      setResultado(burbujaMenor(arreglo))
    }

    if (metodo === "Burbuja Mayor") {
      setResultado(burbujaMayor(arreglo))
    }

    if (metodo === "Selección") {
      setResultado(seleccion(arreglo))
    }

    if (metodo === "Inserción") {
      setResultado(insercion(arreglo))
    }

    if (metodo === "Quick Sort") {
      setResultado(quickSort(arreglo))
    }

    if (metodo === "Merge Sort") {
      setResultado(mergeSort(arreglo))
    }
  }

  // Lista de métodos disponibles
  const metodos = [
    "Burbuja Menor",
    "Burbuja Mayor",
    "Selección",
    "Inserción",
    "Quick Sort",
    "Merge Sort"
  ]

  return (

    // Contenedor principal
    <div
      style={{

        // Altura mínima de pantalla
        minHeight: '100vh',

        // Centrado del contenido
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // Imagen de fondo
        backgroundImage: 'url("/fondo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        // Oscurece un poco el fondo
        backgroundColor: 'rgba(0,0,0,0.55)',
        backgroundBlendMode: 'darken',

        // Fuente principal
        fontFamily: 'Arial',

        padding: '20px'
      }}
    >

      {/* Tarjeta principal */}
      <div
        style={{

          // Fondo transparente
          background: 'rgba(255,255,255,0.08)',

          padding: '40px',
          borderRadius: '20px',

          // Efecto blur
          backdropFilter: 'blur(10px)',

          // Sombra de la tarjeta
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',

          width: '450px',
          textAlign: 'center'
        }}
      >

        {/* Título */}
        <h2
          style={{
            color: 'white',
            marginBottom: '25px',
            fontSize: '32px'
          }}
        >
          Ordenamiento
        </h2>

        {/* Botones de métodos */}
        <div
          style={{
            display: 'grid',
            gap: '10px',
            marginBottom: '25px'
          }}
        >

          {/* Recorre todos los métodos */}
          {metodos.map((m) => (

            <button
              key={m}

              // Selecciona el método
              onClick={() => setMetodo(m)}

              style={{

                padding: '12px',

                border: 'none',
                borderRadius: '12px',

                // Cambia color si está seleccionado
                background: metodo === m ? '#2563eb' : '#1e293b',

                color: 'white',
                cursor: 'pointer',

                fontSize: '15px',
                transition: '0.3s'
              }}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Si hay método seleccionado */}
        {metodo && (
          <>

            {/* Muestra el método actual */}
            <h3
              style={{
                color: '#cbd5e1',
                marginBottom: '15px'
              }}
            >
              Método seleccionado: {metodo}
            </h3>

            {/* Input para escribir números */}
            <input
              type="text"

              placeholder="Ejemplo: 10,4,54,12,22,76,8"

              value={input}

              // Guarda lo escrito
              onChange={(e) => setInput(e.target.value)}

              style={{
                width: '100%',
                padding: '14px',

                borderRadius: '12px',
                border: 'none',
                outline: 'none',

                marginBottom: '15px',

                background: '#1e293b',
                color: 'white',

                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />

            {/* Botón ordenar */}
            <button
              onClick={ordenar}

              style={{
                width: '100%',
                padding: '14px',

                border: 'none',
                borderRadius: '12px',

                background: '#10b981',
                color: 'white',

                fontSize: '16px',
                cursor: 'pointer',

                marginBottom: '20px'
              }}
            >
              Ordenar
            </button>
          </>
        )}

        {/* Resultado del algoritmo */}
        {resultado.length > 0 && (
          <div
            style={{
              background: '#0f172a',
              padding: '15px',
              borderRadius: '12px',
              marginBottom: '20px'
            }}
          >

            {/* Texto resultado */}
            <p
              style={{
                color: '#f8fafc',
                margin: 0,
                fontSize: '16px'
              }}
            >
              Resultado:
            </p>

            {/* Arreglo ordenado */}
            <p
              style={{
                color: '#38bdf8',
                marginTop: '10px',
                wordBreak: 'break-word'
              }}
            >
              {resultado.join(", ")}
            </p>
          </div>
        )}

        {/* Botón volver */}
        <button
          onClick={onVolver}

          style={{
            width: '100%',
            padding: '14px',

            border: 'none',
            borderRadius: '12px',

            background: '#ef4444',
            color: 'white',

            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          ← Volver
        </button>

      </div>
    </div>
  )
}

export default Ordenamiento