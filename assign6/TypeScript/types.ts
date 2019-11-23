const price: number = 100; //this is a number
const tax = 20; //Actually can infer number here
const productName = 'pikachu'; //TypeSript can infer it's a string
const isHungry = true; //Boolean

//const weird = tax + isHungry; //can't add number and boolean
//tax.slice(1,5); // Can't slice a number
productName.slice(1,5); //But can sluce a string!
const total = price + tax; //Works!