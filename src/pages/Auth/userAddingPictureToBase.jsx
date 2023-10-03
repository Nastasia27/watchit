import { getAuth, updateProfile } from "firebase/auth";

function userAddingPictureToBase(picture) {
    const auth = getAuth();

    updateProfile(auth.currentUser, {
        photoURL: picture
    }).then(() => {
    // Profile updated!
    // ...
    }).catch((error) => {
    // An error occurred
    // ...
    });
}

export default userAddingPictureToBase;