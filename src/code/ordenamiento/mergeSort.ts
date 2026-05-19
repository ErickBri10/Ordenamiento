export function mergeSort(A: number[]): number[] {

    // Si el arreglo tiene un solo elemento ya está ordenado
    if (A.length <= 1) {
        return A;
    }

    // Calculamos la mitad 
    const mitad = Math.floor(A.length / 2);

    // Dividimos en dos partes
    const izquierda = A.slice(0, mitad);
    const derecha = A.slice(mitad);

    // Ordenamos ambas mitades
    return merge(
        mergeSort(izquierda),
        mergeSort(derecha)
    );
}

// Función para unir dos arreglos ordenados
function merge(izquierda: number[], derecha: number[]): number[] {

    // Arreglo donde guardaremos el resultado
    let resultado: number[] = [];

    // Índices para recorrer ambos 
    let i = 0;
    let j = 0;

    // Comparamos elementos de ambos 
    while (i < izquierda.length && j < derecha.length) {

        // Insertamos el menor elemento
        if (izquierda[i] < derecha[j]) {
            resultado.push(izquierda[i]);
            i++;
        } else {
            resultado.push(derecha[j]);
            j++;
        }
    }

    // Agregamos elementos restantes
    return resultado
        .concat(izquierda.slice(i))
        .concat(derecha.slice(j));
}