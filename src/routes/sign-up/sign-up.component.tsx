import { ChangeEvent, useState, FormEvent } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { AuthError, AuthErrorCodes } from "firebase/auth";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const userCred = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (userCred) {
        const { user } = userCred;
        console.log(user);
        const userSnapshot = createUserDocumentFromAuth(user, { displayName });
      }
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encountered an error:", error);
      }
    }
  };

  return (
    <div>
      Create an account
      <form onSubmit={handleSubmit}>
        <label>Display name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          onChange={handleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};
export default SignUp;
