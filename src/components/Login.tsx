import { motion } from "motion/react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import loginImage from "../assets/other/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { checkLogin, login } from "../store/slices/userSlice";
import { useAppDispatch } from "../store/slices";
import { useSelector } from "react-redux";

export default function Login() {
  const dispatch = useAppDispatch();
  const {isLoggedIn} = useSelector((state: any) => state?.user);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkLogin());
    
  }, [dispatch]);

  useEffect(()=>{
    if (isLoggedIn) {
      navigate("/");
    }
  },[isLoggedIn])

  async function onUserLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    const username = formData.get("username")?.toString().trim() || "";
    const password = formData.get("password")?.toString().trim() || "";

    const userFormData = new URLSearchParams();

    userFormData.append("username", username);
    userFormData.append("password", password);

    dispatch(login({ userFormData }));

  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      className="min-h-[calc(100vh-3.8rem)] w-full flex flex-col"
    >
      {/* Main container */}
      <div className="flex-grow flex justify-center items-center p-5">
        <motion.div
          initial={{
            rotate: 10,
            x: 200,
            opacity: 0,
          }}
          animate={{
            rotate: 0,
            x: 0,
            opacity: 1,
          }}
          className="hidden md:flex w-1/3 items-end justify-center"
        >
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-auto object-contain"
          />
        </motion.div>
        <motion.div
          initial={{
            x: -100,
          }}
          animate={{
            x: 0,
          }}
          className="md:w-1/3 w-full md:h-[60%] flex flex-col justify-between rounded-lg border border-gray-300 shadow-lg overflow-hidden bg-white"
        >
          <div className="bg-dark-green p-4 text-center font-bold text-3xl text-white font-serif shadow-md">
            Login
          </div>

          <form onSubmit={onUserLogin} className="h-full flex flex-col">
            <div className="p-6 w-full h-full flex flex-col gap-6 py-6">
              <Input
                placeHolder="Enter your email address"
                label="E-mail"
                name="username"
                type="email"
              />

              <Input
                placeHolder="Enter your password"
                label="Password"
                name="password"
                type="password"
              />
              <div className="text-sm text-gray-600">
                Forgot Password?{" "}
                <Link
                  to="../forgot-password"
                  className="underline text-primary"
                >
                  Click here
                </Link>
              </div>
              <div className="flex items-center gap-2 justify-center text-gray-500 text-sm">
                <div className="flex-grow h-[1px] bg-gray-300"></div>
                Or Login With
                <div className="flex-grow h-[1px] bg-gray-300"></div>
              </div>
              <div className="w-full flex justify-center gap-4">
                <Button
                  icon="fa-brands fa-google"
                  className="border-red-500 border rounded-md py-2 px-4 text-red-500 hover:bg-red-100 transition"
                  name="Google"
                />
                <Button
                  icon="fa-brands fa-square-facebook"
                  className="py-2 px-4 border-blue-500 border rounded-md text-blue-500 hover:bg-blue-100 transition"
                  name="Facebook"
                />
              </div>
              <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="../signup" className="underline text-primary">
                  Register now
                </Link>
              </div>
            </div>
            <div className="bg-teal flex justify-end items-center gap-4 p-4 text-white shadow-md">
              <Button
                className="bg-dark-green border px-6 py-2 rounded-md text-white hover:bg-green-700 transition"
                name="Submit"
                type="submit" 
              />
              <Button
                className="btn-outline border-dark-green bg-white border px-6 py-2 rounded-md text-primary hover:bg-gray-100 transition"
                name="Reset"
                type="reset"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
