// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCcoxBZKNGUs2w8ji4UTdEjTKDTED1Back",
      authDomain: "kwitter-f91c0.firebaseapp.com",
      projectId: "kwitter-f91c0",
      storageBucket: "kwitter-f91c0.appspot.com",
      messagingSenderId: "457070455388",
      appId: "1:457070455388:web:b17b7cd6b4124cd56e5499"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function login()
{
      localStorage.addItem("user_name");
}