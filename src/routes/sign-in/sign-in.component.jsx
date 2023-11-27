import {
    signInWithGoogle,
    createUserDocumentFromAuth,
  } from "../../utils/firebase/firebase.utils";
  
  const SignIn = () => {
    const logGoogleUser = async () => {
      try {
        const { user } = await signInWithGoogle();
        await createUserDocumentFromAuth(user);
      } catch (error) {
        console.error('Error signing in with Google', error);
      }
    };
  
    return (
      <div className="sign-in">
        <h1>Sign In</h1>
        <button onClick={logGoogleUser}>Sign In With Google</button>
      </div>
    );
  };
  
  export default SignIn;
  