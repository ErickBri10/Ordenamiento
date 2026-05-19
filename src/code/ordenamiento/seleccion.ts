export function seleccion(A: number[]): number[] {

    // Recorremos todo 
    for (let i = 0; i < A.length - 1; i++) {

        // Suponemos que el menor es el actual
        let menor = i;

        // Buscamos un elemento más pequeño
        for (let j = i + 1; j < A.length; j++) {

            // Si encontramos un número menor
            if (A[j] < A[menor]) {

                // Actualizamos la posición del menor
                menor = j;
            }
        }

        // Intercambiamos elementos
        let temp = A[i];
        A[i] = A[menor];
        A[menor] = temp;
    }

    // Regresamos ordenado
    return A;
}