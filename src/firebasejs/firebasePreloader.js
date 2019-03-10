import firebase from "firebase";
import db from "../firebasejs/firebaseinit";
//import db from "../firebasejs/firebaseinit";

//const uid = firebase.auth().currentUser.uid;
//var user = firebase.auth().currentUser;
var userEmail, teamLead, firstName;

firebase.auth().onAuthStateChanged(user=>{
   /// console.log(user.email);
    this.userEmail = user.email;
    teamLead = db.collection('users').get().then(response=>{
        response.forEach(result=>{
         const  firstName = result.data().firstName,
            teamLead = result.data().teamLead
            userEmail = user.uid
            

            
        })
       
    })
    console.log(firstName)
    
})

console.log(userEmail)

//console.log(uid)
//console.log(firebase.auth().currentUser.uid);

//const userId = firebase.auth().currentUser.uid


// var userDocRef = db.collection("users")

// userDocRef.get().then(function (doc)
// {
//     if (doc.exists)
//     {
//         console.log("Something is there")
//     } else
//     {
//         console.log("Some problem bro")
//     }
// }).catch(err =>
// {
//     console.log(err.message)
// })
