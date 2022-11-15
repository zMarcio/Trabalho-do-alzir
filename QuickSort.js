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