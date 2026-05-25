export function insercion(A: number[]): number[] {

    // N guarda el tamaño del arreglo
    const N = A.length;

    // Repetir con I desde 1 hasta N
    for (let I = 1; I < N; I++) {

        let AUX = A[I];
        let K = I - 1;

        // Mientras (K >= 0) y (AUX < A[K])
        while (K >= 0 && AUX < A[K]) {

            // Hacer A[K + 1] ← A[K]
            A[K + 1] = A[K];

            // K ← K - 1
            K = K - 1;
        }

        // Hacer A[K + 1] ← AUX
        A[K + 1] = AUX;
    }

    // Regresael arreglo ordenado
    return A;
}