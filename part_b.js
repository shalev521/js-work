//תרגיל 5
// function calculateOrderTotal(unitPrice,quantity){
//     return unitPrice*quantity;
// }
// const ordertotal=calculateOrderTotal(35,4);
// console.log(ordertotal);
// console.log(calculateOrderTotal(80,6));
// console.log(calculateOrderTotal(30,7));

// function calculateOrderTotal2(unitPrice, quantity) {
//   console.log(unitPrice * quantity);//לא החזירו את החישוב
// }

// const result = calculateOrderTotal2(20, 3);
// console.log(result);
//תרגיל 6
// function getLetterGrade(grade){
//     if(grade>=90 && grade<=100){
//         return 'A';
//     }
//     if(grade>=80 && grade<=89){
//         return 'B';
//     }
//     if(grade>=70 && grade<=79){
//         return 'C';
//     }
//     if(grade>=60 && grade<=69){
//         return 'D';
//     }
//     if(grade>=0 && grade<=59){
//         return 'F';
//     }
//     if(grade>100 || grade<0){
//         return"Invalid grade";
//     }
    
// }
// console.log(getLetterGrade(101))
// console.log(getLetterGrade(48))
// console.log(getLetterGrade(70))
// console.log(getLetterGrade(83))
// console.log(getLetterGrade(95))
//תרגיל 7
// function greet(namee) {
//   return `Hello, ${namee}`;
// }

// function calculateArea(width, height) {
//   return width * height;
// }

// const greet2 = (namee) => {
//     return `Hello, ${namee}`;
// }
// const calculateArea2 = (width, height) =>{
//     return width * height;
// }
// const a =greet2 ("shalev");
// const b =calculateArea2(24,14);
// console.log(a,b);


// const calculateArea3 = (width, height) =>width*height;
// const greet3 = (namee) => `Hello, ${namee}`;

//תרגיל 8
// const calculateDiscountedPrice = (price,discountPercent) => price-(price*(discountPercent/100));
// console.log(calculateDiscountedPrice(50,50))
// const isExpensive = (price)=>(price>500)? "true" : "false";
// console.log(isExpensive(499));

// const square = number => number * number;
//   console.log(square(4));
// console.log(square(2));
// console.log(square(6));

// תרגיל 9
// const product = {
//   id: 1,
//   namee: "Laptop",
//   price: 999,
//   inStock: true 
// };

// const getProductSummary = (p) => `${p.namee} - ${p.price} NIS`;
// console.log(getProductSummary(product));

// const getAvailability = (product) => product.inStock? "Available" : "Unavailable";
// console.log(getAvailability(product));

