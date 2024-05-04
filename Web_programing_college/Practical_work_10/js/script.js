var SortingLibrary = {
    // Exchange sort
    exchangeSort: function(arr, order) {
        var comparisons = 0;
        var exchanges = 0;

        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                comparisons++;
                if ((order === "asc" && arr[i] > arr[j]) || (order === "desc" && arr[i] < arr[j])) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    exchanges++;
                }
            }
        }

        console.log("Exchange sort - Comparisons:", comparisons, "Exchanges:", exchanges);
    },

    // Selection sort
    selectionSort: function(arr, order) {
        var comparisons = 0;
        var exchanges = 0;

        for (var i = 0; i < arr.length - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < arr.length; j++) {
                comparisons++;
                if ((order === "asc" && arr[j] < arr[minIndex]) || (order === "desc" && arr[j] > arr[minIndex])) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                var temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
                exchanges++;
            }
        }

        console.log("Selection sort - Comparisons:", comparisons, "Exchanges:", exchanges);
    },

    // Insertion sort
    insertionSort: function(arr, order) {
        var comparisons = 0;
        var exchanges = 0;

        for (var i = 1; i < arr.length; i++) {
            var current = arr[i];
            var j = i - 1;

            while (j >= 0 && ((order === "asc" && arr[j] > current) || (order === "desc" && arr[j] < current))) {
                comparisons++;
                arr[j + 1] = arr[j];
                j--;
                exchanges++;
            }

            arr[j + 1] = current;
        }

        console.log("Insertion sort - Comparisons:", comparisons, "Exchanges:", exchanges);
    }
};

// Example usage
var arr = [5, 3, 8, 1, 2, 9, 4, 7, 6];
console.log("Original array:", arr);

SortingLibrary.exchangeSort(arr.slice(), "asc");
SortingLibrary.selectionSort(arr.slice(), "asc");
SortingLibrary.insertionSort(arr.slice(), "asc");
