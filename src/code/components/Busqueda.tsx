import { useState } from 'react'

// Componente principal de búsqueda
function Busqueda({
  onVolver,
  temaOscuro
}: {
  onVolver: () => void
  temaOscuro: boolean
}) {

  // Guarda el método seleccionado
  const [metodo, setMetodo] = useState<string | null>(null)

  // Guarda el arreglo escrito por el usuario
  const [input, setInput] = useState("")

  // Guarda el número que se quiere buscar
  const [numero, setNumero] = useState("")

  // Guarda el resultado de la búsqueda
  const [resultado, setResultado] = useState("")

  // Métodos disponibles
  const metodos = [
    "Búsqueda Lineal",
    "Búsqueda Binaria"
  ]

  // Función principal para realizar la búsqueda
  function buscar() {

    const arreglo = input.split(",").map(Number)

    const objetivo = Number(numero)

    // BÚSQUEDA LINEAL
    if (metodo === "Búsqueda Lineal") {

      const posicion = arreglo.indexOf(objetivo)

      if (posicion !== -1) {

        setResultado(`Número encontrado en la posición ${posicion}`)

      } else {

        setResultado("Número no encontrado")
      }
    }

    // BÚSQUEDA BINARIA
    if (metodo === "Búsqueda Binaria") {

      const ordenado = [...arreglo].sort((a, b) => a - b)

      let inicio = 0
      let fin = ordenado.length - 1

      let encontrado = false

      while (inicio <= fin) {

        const medio = Math.floor((inicio + fin) / 2)

        if (ordenado[medio] === objetivo) {

          setResultado(`Número encontrado en la posición ${medio}`)

          encontrado = true
          break
        }

        if (ordenado[medio] < objetivo) {

          inicio = medio + 1

        } else {

          fin = medio - 1
        }
      }

      if (!encontrado) {
        setResultado("Número no encontrado")
      }
    }
  }

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

        fontFamily: 'Poppins, sans-serif',

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

          boxShadow: '0 10px 40px rgba(0,0,0,0.45)',

          width: '420px',
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
          Búsqueda
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
                fontSize: '15px'
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
              placeholder="Ejemplo: 5,8,2,1,9,7"

              value={input}

              onChange={(e) => setInput(e.target.value)}

              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
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

            <input
              type="number"
              placeholder="Número a buscar"

              value={numero}

              onChange={(e) => setNumero(e.target.value)}

              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                marginBottom: '20px',

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
              onClick={buscar}

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
              Buscar
            </button>
          </>
        )}

        {resultado && (
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
                  ? '#38bdf8'
                  : '#0369a1',

                margin: 0
              }}
            >
              {resultado}
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

export default Busqueda