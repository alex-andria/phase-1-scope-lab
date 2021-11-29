// Write your solution in this file!


var customerName = 'bob';
const leastFavoriteCustomer = 'albert';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = 'not albert';
}


