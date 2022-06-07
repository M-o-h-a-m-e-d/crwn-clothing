import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Hello from Sign-in</h1>
      <button onClick={logGoogleUser}>sign in with Google</button>
    </div>
  );
}

export default SignIn;
