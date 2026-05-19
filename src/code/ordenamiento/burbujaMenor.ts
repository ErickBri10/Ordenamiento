export function burbujaMenor(A: number[]): number[] {

    // Guardamos el tamaño del arreglo
    const N = A.length;

    // Recorre todo el arreglo varias veces
    for (let i = 0; i < N - 1; i++) {

        // Compara elementos 
        for (let j = 0; j < N - i - 1; j++) {

            // Si el elemento actual es mayor al siguiente
            if (A[j] > A[j + 1]) {

                // Guardamos temporalmente el valor actual
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