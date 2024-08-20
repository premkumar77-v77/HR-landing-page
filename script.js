// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5-pNW3MUoq7BxMLegH_KeDI-1-pxGMpg",
    authDomain: "form-6e317.firebaseapp.com",
    databaseURL: "https://form-6e317-default-rtdb.firebaseio.com",
    projectId: "form-6e317",
    storageBucket: "form-6e317.appspot.com",
    messagingSenderId: "81260372055",
    appId: "1:81260372055:web:f06695e38062ab6da1c312"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Form submission handler
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Retrieve form data
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const collegeMail = document.getElementById('college-mail').value;
    const personalMail = document.getElementById('personal-mail').value;
    const contactNumber = document.getElementById('contact-number').value;

    // Write data to Firebase Realtime Database
    const newUserRef = ref(database, 'users/' + name); // You could use a unique ID instead of 'name'
    set(newUserRef, {
        name: name,
        department: department,
        collegeMail: collegeMail,
        personalMail: personalMail,
        contactNumber: contactNumber
    })
    .then(() => {
        alert('Sign-up successful!');
        document.getElementById('signup-form').reset(); // Reset the form
    })
    .catch((error) => {
        alert('Error: ' + error.message);
    });
});
