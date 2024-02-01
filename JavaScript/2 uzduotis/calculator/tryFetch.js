// fetch('https://www.vinted.lt/catalog?search_text=batai')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error('Error:', error));

// fetch('https://example.com/some/path/to/json')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// var responseClone; // 1
// fetch('https://www.vinted.lt/catalog?search_text=batai')
//   .then(function (response) {
//     responseClone = response.clone(); // 2
//     return response.json();
//   })
//   .then(
//     function (data) {
//       // Do something with data
//     },
//     function (rejectionReason) {
//       // 3
//       console.log(
//         'Error parsing JSON from response:',
//         rejectionReason,
//         responseClone
//       ); // 4
//       responseClone
//         .text() // 5
//         .then(function (bodyText) {
//           console.log(
//             'Received the following instead of valid JSON:',
//             bodyText
//           ); // 6
//         });
//     }
//   );

// let document = fetch('https://www.barbora.lt/');
// let = searchBar = document.getElementsByClassName('b-search');
let searchBar;

document.getElementsByClassName('b-search');
