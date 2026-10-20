// תרגיל 10
    
// const categories = ["Electronics", "Fashion", "Books", "Home"];
// console.log(categories[0]);
// console.log(categories[categories.length-1]);
// console.log(categories.includes("Books"));

// console.log(categories.indexOf("Fashion"));
// console.log(categories.indexOf("Sports"));  //מחזיר -1 כי הוא לא במערך
// categories.push("Sports");
// const save = categories.pop();
// console.log(save);

// console.log(categories);
// categories.splice(1,1);
// console.log(categories);

//תרגיל 11

// const stockAmounts = [4, 0, 7, 3, 0];
// const calculateTotalStock = (arr) => {
//     let total=0;
//     for (product of arr){
//         total+=product;
//     }
//     return total;
// }
// console.log(calculateTotalStock(stockAmounts));
// const countOutOfStock= (arr) => {
//     let counter=0;
//     for (product of arr){
//       if(product===0){
//         counter++;
//       }
//     } return counter;
// }
// console.log(countOutOfStock(stockAmounts));

// const countOutOfStock2= (arr) => {
//     let counter=0;
//     for (let i=0; i<arr.length;i++){
//       if(arr[i]===0){
//         counter++;
//       }
//     } return counter;
// }
// console.log(countOutOfStock2(stockAmounts));

//תרגיל 12

// const user = {
//   id: 1,
//   firstName: "Dana",
//   lastName: "Levi",
//   age: 17 };

//   console.log(user.firstName,user.age);
// user.age=18;
// user.email="shalevelias@gmail.com";
// console.log(`my name is:${user.firstName} my last name is:${user.lastName} my id is:${user.id} and i am ${user.age} year old`);

// console.log(user.firstName);

//תרגיל 13

// const post = {
//   id: 101,
//   content: "JavaScript practice day",
//   author: {
//     id: 7,
//     name: "Noa",
//     username: "@noa_dev"
//   },
//   comments: [
//     { id: 1, user: "@amit", text: "Good luck!" },
//     { id: 2, user: "@lior", text: "Nice post" }
//   ]
// };

// console.log(post.author.name,post.author.username);
// console.log(post.comments[0].text);
// let counter=0;
// for (comment of post.comments){
//     counter++;
// }
// console.log(counter);

// post.comments.push({ id: 5, user: "@shalev", text: "great post!" });
// console.log(post.comments)
 
// תרגיל 14
// const products = [
//   { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
//   { id: 2, name: "Phone", price: 699, category: "Electronics", inStock: false },
//   { id: 3, name: "Shoes", price: 120, category: "Fashion", inStock: true },
//   { id: 4, name: "Backpack", price: 80, category: "Fashion", inStock: true },
// ];

// for (let product of products) {
//   console.log(`name: ${product.name}. price: ${product.price}. id: ${product.id}`);
// }

// const countInStockProducts = (array) => {
//   let c = 0;
//   for (let product of array) {
//     if (product.inStock == true)
//      {
//        c++;
//      }
//   }
//   return c;
// };

// console.log(countInStockProducts(products));

// const getProductNameById = (array, id) => {
//   for (let product of array) {
//     if (product.id === id)
//       {return product.name;
//     }
//   }
//   return "Product not found.";
// };




// console.log(getProductNameById(products, 94));
// console.log(getProductNameById(products, 2));