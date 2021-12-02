const request = require("request");
const breedName = process.argv[2];
const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`


//With debugging code 
// request(website, (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   //console.log('body:', body)
//   console.log("body:", body);
//   console.log(typeof body)
//   // body is a string. In order to scan this data like a JavaScript object, we need to convert the string version of it into an object first.
//   // this is called deserialization and we can do this by "parsing" the string. 
//     if (error){
//       console.log("something went wrong, try again later!")
//       return
//     }
//     const data = JSON.parse(body);
//     if (data.length === 0){
//       console.log("wrong breed")
//       return 
//     }
//     console.log(data);
//     console.log(typeof data);
//     console.log(data[0]["description"])
   
// })



//Without debugging code
request(website, (error, response, body) => {
  
    if (error){
      console.log("something went wrong, try again later!")
      return
    }
    const data = JSON.parse(body);
    if (data.length === 0){
      console.log("wrong breed")
      return 
    }
    console.log(data[0]["description"])
   
})
