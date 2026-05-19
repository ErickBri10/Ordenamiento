export function burbujaMayor(A: number[]): number[] {

    // Guardamos el tamaño del arreglo
    const N = A.length;

    // Recorremos el arreglo varias veces
    for (let i = 0; i < N - 1; i++) {

        // Comparación de elementos 
        for (let j = 0; j < N - i - 1; j++) {

            // Si el número actual es menor al siguiente
            if (A[j] < A[j + 1]) {

                // Guardamos temporalmente el valor
                let temp = A[j];

                // Intercambiamos posiciones
                A[j] = A[j + 1];

                // Colocamos el valor temporal
                A[j + 1] = temp;
            }
        }
    }

    // Regresa el arreglo ordenado
    return A;
}