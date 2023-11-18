const firebaseConfig = {
     apiKey: "AIzaSyAqt8mKhu844tdsJyCMd39zGlBTa_rJsNM",
  authDomain: "atpos-web.firebaseapp.com",
  databaseURL: "https://atpos-web-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "atpos-web",
  storageBucket: "atpos-web.appspot.com",
  messagingSenderId: "277123852413",
  appId: "1:277123852413:web:8e4d264060c97c0bade914",
  measurementId: "G-YSGPPY1WG7"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
function submitForm() {
    const nameRestaurant = document.getElementById("nameRestaurant").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const addressRestaurant = document.getElementById("addressRestaurant").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    // Lưu dữ liệu vào Firebase Realtime Database
    const data = {
        nameRestaurant: nameRestaurant,
        email: email,
        message: message,
        addressRestaurant: addressRestaurant,
        phoneNumber: phoneNumber
    };

    // Sử dụng phương thức set để ghi đè dữ liệu tại đường dẫn 'contacts'
    database.ref('contacts').set(data)
        .then(() => {
            console.log('Form submitted successfully!');
        })
        .catch((error) => {
            console.error('Error submitting form:', error);
        });
}