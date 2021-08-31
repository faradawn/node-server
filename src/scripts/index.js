// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
// requirejs.config({
//   baseUrl: 'scripts',
//   paths: {
//       myapp: '../myapp'
//   },
//   packages : [{ 
//     name : "lodash",
//     location : "../../node_modules/lodash-amd",
// }]
// });

// // Start loading the main app file. Put all of
// // your application logic in there.
// requirejs(['myapp/main']);

// new
console.log('working index js?')

requirejs.config({
  'packages': [
    { 'name': 'lodash', 'location': '../../node_modules/lodash-amd' }
  ]
});

requirejs(["lodash/chunk"], function (chunk) {
  let arr = [1, 2, 3, 4, 5, 6];
  console.log(chunk(arr, 1))
  
});

