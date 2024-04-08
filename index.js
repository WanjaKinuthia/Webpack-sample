//var message = require('./script')
//alert(message);

//console.log("Webpack is Fantastic")
// import './style.css';
import {user,define} from './script.js';
//import image from './images/Wangari-Maathai-2.jpeg';
//import displayImage from './images/Wangari-Maathai-2.jpeg';

//import terry  from /Users/tkinuthia/Downloads/Wangari-Maathai-2.jpeg './images/';

// import image from './images/my-image.png';  // Assuming your image is in an 'images' folder

const imgElement = document.createElement('img');
imgElement.src = image;
document.body.appendChild(imgElement);



console.log("Hello world",user());
console.log("name",define());