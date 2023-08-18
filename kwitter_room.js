// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDeDB6XgENnXAuuK1JTOaQv7iO7ZggxEtg",
    authDomain: "lets-chat-web-app-e07ec.firebaseapp.com",
    projectId: "lets-chat-web-app-e07ec",
    storageBucket: "lets-chat-web-app-e07ec.appspot.com",
    messagingSenderId: "882430495388",
    appId: "1:882430495388:web:7f5515f7d07112d3307b59"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
});});}

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      
      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}