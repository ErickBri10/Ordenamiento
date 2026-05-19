export function quickSort(A: number[]): number[] {

    // Si el arreglo tiene un elemento o menos ya está ordenado
    if (A.length <= 1) {
        return A;
    }

    // Elegimos el último elemento
    const pivote = A[A.length - 1];

    // Arreglos para menores y mayores
    const izquierda: number[] = [];
    const derecha: number[] = [];

    // Recorremos el arreglo 
    for (let i = 0; i < A.length - 1; i++) {

        // Si el elemento es menor 
        if (A[i] < pivote) {
            izquierda.push(A[i]);
        } else {

            // Si es mayor o igual va a la derecha
            derecha.push(A[i]);
        }
    }

    // Unimos los arreglos 
    return [
        ...quickSort(izquierda),
        pivote,
        ...quickSort(derecha)
    ];
}