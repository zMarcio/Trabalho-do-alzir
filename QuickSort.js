function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(items, Direita, Esquerda ) {
    var index;
    if (items.length > 1) {
        index = partition(items, Esquerda, Direita);
        if (Esquerda < index - 1) {
            quickSort(items, Esquerda, index - 1);
        }
        if (index < Direita) {
            quickSort(items, index, Direita);
        }
    }
    return items;
}
module.exports = quickSort;