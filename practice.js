// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcoxBZKNGUs2w8ji4UTdEjTKDTED1Back",
    authDomain: "kwitter-f91c0.firebaseapp.com",
    databaseURL: "https://kwitter-f91c0-default-rtdb.firebaseio.com",
    projectId: "kwitter-f91c0",
    storageBucket: "kwitter-f91c0.appspot.com",
    messagingSenderId: "457070455388",
    appId: "1:457070455388:web:b17b7cd6b4124cd56e5499"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adddin user"
    });
}