export function insercion(A: number[]): number[] {

    // Recorremos el arreglo desde el segundo dato
    for (let i = 1; i < A.length; i++) {

        // Guardamos el valor actual
        let actual = A[i];

        // Variable para comparar posiciones anteriores
        let j = i - 1;

        // Movemos elementos mayores hacia la derecha
        while (j >= 0 && A[j] > actual) {

            // Desplazamos el elemento
            A[j + 1] = A[j];

            // Retrocedemos una posición
            j--;
        }

        // Insertamos el valor en su posición correcta
        A[j + 1] = actual;
    }

    // Regresamos el arreglo ordenado
    return A;
}