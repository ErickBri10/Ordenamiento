import { useState } from 'react'

// Importación de algoritmos de ordenamiento
import { burbujaMenor } from '../ordenamiento/burbujaMenor'
import { burbujaMayor } from '../ordenamiento/burbujaMayor'
import { seleccion } from '../ordenamiento/seleccion'
import { insercion } from '../ordenamiento/insercion'
import { quickSort } from '../ordenamiento/quickSort'
import { mergeSort } from '../ordenamiento/mergeSort'

// Componente principal de ordenamiento
function Ordenamiento({
  onVolver,
  temaOscuro
}: {
  onVolver: () => void
  temaOscuro: boolean
}) {

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

        backgroundColor: temaOscuro
          ? 'rgba(0,0,0,0.55)'
          : 'rgba(255,255,255,0.30)',

        backgroundBlendMode: temaOscuro
          ? 'darken'
          : 'lighten',

        fontFamily: 'Arial',

        padding: '20px'
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

          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',

          width: '450px',
          textAlign: 'center'
        }}
      >

        <h2
          style={{
            color: temaOscuro
              ? 'white'
              : '#0f172a',

            marginBottom: '25px',
            fontSize: '32px'
          }}
        >
          Ordenamiento
        </h2>

        <div
          style={{
            display: 'grid',
            gap: '10px',
            marginBottom: '25px'
          }}
        >

          {metodos.map((m) => (

            <button
              key={m}

              onClick={() => setMetodo(m)}

              style={{

                padding: '12px',

                border: 'none',
                borderRadius: '12px',

                background: metodo === m
                  ? '#2563eb'
                  : temaOscuro
                    ? '#1e293b'
                    : '#cbd5e1',

                color: temaOscuro
                  ? 'white'
                  : '#0f172a',

                cursor: 'pointer',

                fontSize: '15px',
                transition: '0.3s'
              }}
            >
              {m}
            </button>
          ))}
        </div>

        {metodo && (
          <>

            <h3
              style={{
                color: temaOscuro
                  ? '#cbd5e1'
                  : '#334155',

                marginBottom: '15px'
              }}
            >
              Método seleccionado: {metodo}
            </h3>

            <input
              type="text"

              placeholder="Ejemplo: 10,4,54,12,22,76,8"

              value={input}

              onChange={(e) => setInput(e.target.value)}

              style={{
                width: '100%',
                padding: '14px',

                borderRadius: '12px',
                border: 'none',
                outline: 'none',

                marginBottom: '15px',

                background: temaOscuro
                  ? '#1e293b'
                  : '#e2e8f0',

                color: temaOscuro
                  ? 'white'
                  : '#0f172a',

                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />

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

        {resultado.length > 0 && (
          <div
            style={{
              background: temaOscuro
                ? '#0f172a'
                : '#e2e8f0',

              padding: '15px',
              borderRadius: '12px',
              marginBottom: '20px'
            }}
          >

            <p
              style={{
                color: temaOscuro
                  ? '#f8fafc'
                  : '#0f172a',

                margin: 0,
                fontSize: '16px'
              }}
            >
              Resultado:
            </p>

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