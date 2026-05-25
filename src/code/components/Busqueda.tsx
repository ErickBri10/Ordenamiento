import { useState } from 'react'

// Componente principal de búsqueda
function Busqueda({ onVolver }: { onVolver: () => void }) {

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

    // Convierte el texto en arreglo numérico
    const arreglo = input.split(",").map(Number)

    // Convierte el número buscado
    const objetivo = Number(numero)

    // ---------------- BÚSQUEDA LINEAL ----------------
    if (metodo === "Búsqueda Lineal") {

      // Busca la posición usando indexOf
      const posicion = arreglo.indexOf(objetivo)

      // Verifica si el número existe
      if (posicion !== -1) {

        // Muestra posición encontrada
        setResultado(`Número encontrado en la posición ${posicion}`)

      } else {

        // Si no existe muestra mensaje
        setResultado("Número no encontrado")
      }
    }

    // ---------------- BÚSQUEDA BINARIA ----------------
    if (metodo === "Búsqueda Binaria") {

      // Ordena el arreglo de menor a mayor
      const ordenado = [...arreglo].sort((a, b) => a - b)

      // Variables para inicio y fin
      let inicio = 0
      let fin = ordenado.length - 1

      // Variable para verificar si se encontró
      let encontrado = false

      // Ciclo principal de búsqueda binaria
      while (inicio <= fin) {

        // Obtiene la mitad del arreglo
        const medio = Math.floor((inicio + fin) / 2)

        // Verifica si encontró el número
        if (ordenado[medio] === objetivo) {

          // Muestra posición encontrada
          setResultado(`Número encontrado en la posición ${medio}`)

          encontrado = true

          // Termina el ciclo
          break
        }

        // Si el valor central es menor
        // busca en la parte derecha
        if (ordenado[medio] < objetivo) {

          inicio = medio + 1

        } else {

          // Busca en la parte izquierda
          fin = medio - 1
        }
      }

      // Si no se encontró el número
      if (!encontrado) {
        setResultado("Número no encontrado")
      }
    }
  }

  return (

    // Contenedor principal
    <div
      style={{

        // Altura mínima de pantalla
        minHeight: '100vh',

        // Centrado de contenido
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // Imagen de fondo
        backgroundImage: 'url("/fondo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        // Oscurece el fondo
        backgroundColor: 'rgba(0,0,0,0.55)',
        backgroundBlendMode: 'darken',

        // Fuente principal
        fontFamily: 'Poppins, sans-serif',

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

          // Sombra
          boxShadow: '0 10px 40px rgba(0,0,0,0.45)',

          width: '420px',
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
          Búsqueda
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
                fontSize: '15px'
              }}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Si hay método seleccionado */}
        {metodo && (
          <>
            <h3
              style={{
                color: '#cbd5e1',
                marginBottom: '15px'
              }}
            >
              Método seleccionado: {metodo}
            </h3>

            {/* Input del arreglo */}
            <input
              type="text"
              placeholder="Ejemplo: 5,8,2,1,9,7"

              value={input}

              // Guarda datos escritos
              onChange={(e) => setInput(e.target.value)}

              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                marginBottom: '15px',
                background: '#1e293b',
                color: 'white',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />

            {/* Input del número a buscar */}
            <input
              type="number"
              placeholder="Número a buscar"

              value={numero}

              // Guarda número escrito
              onChange={(e) => setNumero(e.target.value)}

              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                marginBottom: '20px',
                background: '#1e293b',
                color: 'white',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />

            {/* Botón buscar */}
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

        {/* Resultado */}
        {resultado && (
          <div
            style={{
              background: '#0f172a',
              padding: '15px',
              borderRadius: '12px',
              marginBottom: '20px'
            }}
          >
            <p
              style={{
                color: '#38bdf8',
                margin: 0
              }}
            >
              {resultado}
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

export default Busqueda