const SortLibrary = {
    exchangeSort: function(array, order) {
    let comparisons = 0;
    let exchanges = 0;
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        comparisons++;
        if ((order === 'asc' && array[i] > array[j]) || (order === 'desc' && array[i] < array[j])) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            exchanges++;
        }
        }
    }
    console.log(`Exchange sort: comparisons = ${comparisons}, exchanges = ${exchanges}`);
    return array;
    },
    selectionSort: function(array, order) {
    let comparisons = 0;
    let exchanges = 0;
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
        comparisons++;
        if ((order === 'asc' && array[j] < array[minIndex]) || (order === 'desc' && array[j] > array[minIndex])) {
            minIndex = j;
        }
        }
        if (minIndex !== i) {
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        exchanges++;
        }
    }
    console.log(`Selection sort: comparisons = ${comparisons}, exchanges = ${exchanges}`);
    return array;
    },
    insertionSort: function(array, order) {
    let comparisons = 0;
    let exchanges = 0;
    const n = array.length;
    for (let i = 1; i < n; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && ((order === 'asc' && array[j] > current) || (order === 'desc' && array[j] < current))) {
        comparisons++;
        array[j + 1] = array[j];
        j--;
        exchanges++;
        }
        array[j + 1] = current;
    }
    console.log(`Insertion sort: comparisons = ${comparisons}, exchanges = ${exchanges}`);
    return array;
    },
    shellSort: function(array, order) {
    let comparisons = 0;
    let exchanges = 0;
    const n = array.length;
    let gap = Math.floor(n / 2);
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
        let temp = array[i];
        let j = i;
        while (j >= gap && ((order === 'asc' && array[j - gap] > temp) || (order === 'desc' && array[j - gap] < temp))) {
            comparisons++;
            array[j] = array[j - gap];
            j -= gap;
            exchanges++;
        }
        array[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    console.log(`Shell sort: comparisons = ${comparisons}, exchanges = ${exchanges}`);
    return array;
    },
    quickSort: function(array, order) {
    function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
        if ((order === 'asc' && arr[j] < pivot) || (order === 'desc' && arr[j] > pivot)) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        }
        let temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    function quickSortUtil(arr, low, high) {
        if (low < high) {
        let pi = partition(arr, low, high);
        quickSortUtil(arr, low, pi - 1);
        quickSortUtil(arr, pi + 1, high);
        }
    }
    let comparisons = 0;
    let exchanges = 0;
    const n = array.length;
    quickSortUtil(array, 0, n - 1);
    console.log(`Quick sort: comparisons = ${comparisons}, exchanges = ${exchanges}`);
    return array;
    }
};
// Приклад використання бібліотеки
const array = [5, 3, 8, 1, 9, 2, 7, 4, 6];
console.log("Original array:", array);
SortLibrary.exchangeSort(array.slice(), 'asc');
SortLibrary.selectionSort(array.slice(), 'desc');
SortLibrary.insertionSort(array.slice(), 'asc');
SortLibrary.shellSort(array.slice(), 'desc');
SortLibrary.quickSort(array.slice(), 'asc');