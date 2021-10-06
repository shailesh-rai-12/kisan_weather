import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth,signInWithPopup,GoogleAuthProvider,signOut } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAAVMcJk76_0zwB8-DA_slWV0cX31xBB0",
  authDomain: "kisanapp-1260.firebaseapp.com",
  projectId: "kisanapp-1260",
  storageBucket: "kisanapp-1260.appspot.com",
  messagingSenderId: "132393930351",
  appId: "1:132393930351:web:fa5b8775707ced1fdc479a",
  measurementId: "G-SJ421TDC5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider=new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

angular.module('kisanApp').service('GoogleSign',function(){

        this.googleSignIn = function(){
            
            return signInWithPopup(auth, provider);
        }

        this.googleLogOut = function(){
                return signOut(auth);
        }
    })
    
