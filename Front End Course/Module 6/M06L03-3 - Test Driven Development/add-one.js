const addOne = function(numbers) {
    
  return numbers.map(number => number + 1);  
};

module.exports = addOne;






// const functions = {
//   isNull: function() {
//     return null;
//   },
//   checkValue: function(x) {
//     return x;
//   },
//   createUser: function() {
//     const user = { 
//       firstName: 'Brad' 
//     };
//     user['lastName'] = 'Traversy';
//     return user;
//   }
// };

// module.exports = functions;


// const Axios = require("axios");

// const functions = {
//   add: (num1, num2) => num1 + num2,
//   isNull: () => null,
//   checkValue: x => x,
//   createUser: () => {
//     const user = { firstName: "Brad" }
//     user["lastName"] = "Traversy";
//     return user;
//   },
//   fetchUser: () => Axios.get("https://jsonplaceholder.typicode.com/users/1")
//     .then(res => res.data)
//     .catch(err => "error")
// };

// module.exports = functions;
