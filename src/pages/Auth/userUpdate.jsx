import { getAuth, updateProfile } from "firebase/auth";

function userUpdate(name) {
    const auth = getAuth();
    const userName = name;
    console.log(userName);

    updateProfile(auth.currentUser, {
    displayName: userName, 
    //photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
    // Profile updated!
    // ...
    }).catch((error) => {
    // An error occurred
    // ...
    });
}

export default userUpdate;
