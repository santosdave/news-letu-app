import React, { useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Divider from "../components/Divider";
function SignIn() {
    const history = useHistory();
    const initialValues = { email: "", password: "" };
    const [values, setValues] = useState(initialValues);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = values;
    if (!email || !password) {
      return setError("Please fill in all fields");
    }

    try {
      setLoading(true);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };
  const handlePassword = async () => {
    setMessage(null);
    setError(null);

    const { email } = values;

    if (!email) {
      return setError("Please enter an email first");
    }

    try {
      setLoading(true);
      setMessage("Successfully sent email reset link");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };
    
    return (
        <div className="p-6 w-full bg-gray-200 hover:shadow-md space-y-6 ">
            <h1 className="text-4xl text-center">SignIn</h1>
            <form className="space-y-6">
            <Input
                name="email"
                type="email"
                placeholder="Enter email address.."
                label="Email address"
                value={values.email}
                handleChange={handleChange}
            />
            <div className="space-y-3">
                <Input
                    name="password"
                    type="password"
                    placeholder="Enter password.."
                    label="Password"
                    value={values.password}
                    handleChange={handleChange}
                />
                <div  onClick={handlePassword}  className="flex justify-end text-sm text-primary cursor-pointer">
                    Forgot password?
                </div>
            </div>
            {message && <div className="text-primary font-semibold">{message}</div>}
            {error && <div className="text-red-600">{error}</div>}
                <Button
                    value="Sign In"
                    type="submit"
                    variant="primary"
                    fullWidth
                    action={handleSubmit}
                    loading={loading}
                />

            </form>
            <Divider text="or"/>
            <Button
                value="Continue with Google"
                type="submit"
                variant="frame"
                fullWidth
            />
            <div className="text-primary text-center">
                Want to become a member? <Link to="/sign-up">Sign Up</Link>
            </div>
        </div>
    )
}

export default SignIn
