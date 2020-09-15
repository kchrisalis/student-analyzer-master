// Array Helper Functions

// 1. WRITE YOUR OWN VERSION OF THE INCLUDES METHOD (do not use array.includes)
// Function Name:   includes
// Parameters:      item: the item to search for
//                  anArray: the array to search in
// Purpose:         Search anArray for item.  Return true if item is in anArray, else return false.
// Return Value:    true or false, depending on whether item is in anArray

function includes(item, anArray) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == item) {
            return true;
        }
    }
    return false;
}

// 2. WRITE YOUR OWN VERSION OF MATH.MIN (do not use Math.min)
// Function Name:   minItem
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the minimum value in anArray.
// Return Value:    The minimum value in anArray.

function minItem(anArray) {
    let minGrade = 100;
    for (let i = 0; i < anArray.length; i++) {
        if (minGrade > anArray[i]) {
            minGrade = anArray[i];
        }
        
    }
    return minGrade;
}


// 3. WRITE YOUR OWN VERSION OF MATH.MAX (do not use Math.max)
// Function Name:   maxItem
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the maximum value in anArray.
// Return Value:    The mmaximum value in anArray.

function maxItem(anArray) {
    let maxGrade = 0;
    for (let i = 0; i < anArray.length; i++) {
        if (maxGrade < anArray[i]) {
            maxGrade = anArray[i];
        }
        
    }
    return maxGrade;
}


// 4. WRITE A FUNCTION TO DETERMINE THE AVERAGE OF ARRAY ITEMS
// Function Name:   arrayAverage
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the average of the values in anArray.
// Return Value:    The average of the values in anArray.]

function arrayAverage(anArray) {
    let total = 0;
    for (let i = 0; i < anArray.length; i++) {
        total += anArray[i];
    }
    return (total / anArray.length);
}