// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

 //purpose is to return true when an array contains digits of a valid credit card num and false when invalid 

const validateCred = (array) => {  
    
    let sumOfDigits = 0;
    let result;
    let greaterThanNine = 0
    
    let i = 0;

    do{
        i++;

        if (i % 2 === 0){ //this is to make sure that we identify every other element in the array
            result = array[array.length-i] * 2; // array[array.length - 1] identifies the last numb on the array
             if(result > 9){
                 greaterThanNine += result - 9;
             }
             else{
                 sumOfDigits += result;
             }
     
         }
         else{
             sumOfDigits += array[array.length - i];
         }

    } while(i < array.length);

    let total = sumOfDigits + greaterThanNine;

    if (total % 10 === 0 ){
        return true;
    }
    else{
        return false;
    }
     
      
} // end of ValidateCred function

//console.log(validateCred(valid2));

// the role of this function is to check through a nested array of credit card numbers for which numbers are invalid and return another nested array of invalid cards.
function findInvalidCards(arNest){
    const invalidCards =[];
    for (let i = 0; i < arNest.length; i++)
    {
       let bool = validateCred(arNest[i]);
        
        if(bool === false){
            
               invalidCards.push(arNest[i]);
            }
    } 
    
     return invalidCards;
} 


/*console.log(batch.length);
console.log(batch[0].length);
console.log(findInvalidCards(batch)); */

// This function has one parameter for a nested array of invalid numbers and returns an array of companies that have mailed out card with invalid numbers:
const idInvalidCardCompanies = (invalidNum) => {
    const invalid = findInvalidCards(invalidNum);
    const companies = [];
    
   for(let i = 0; i < invalid.length; i++)
    {
        
       switch (invalid[i][0]){
           case 3:
               if (companies.indexOf('Amex') === -1){
                companies.push('Amex');
               }
               else{
                   break;
               }
               break;
            case 4:
                if (companies.indexOf('Visa') === -1){
                companies.push('Visa');
               }
               else{
                   break;
               }
                break;
            case 5:
                if (companies.indexOf('MasterCard') === -1){
                companies.push('MasterCard');
               }
               else{
                   break;
               }
                break;
            case 6:
                if (companies.indexOf('Discover') === -1){
                companies.push('Discover');
               }
               else{
                   break;
               }
                break;
            default:
                console.log('Company does not exist.');
                break;
        
       
        }
        

        /*console.log(invalid[i][0]); */

    } 

    return companies;

} // end of idinvalidCardComapnies Function

idInvalidCardCompanies(batch);