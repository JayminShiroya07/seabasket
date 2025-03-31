import { motion } from "motion/react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import loginImage from "../assets/other/login.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      className="h-[calc(100vh-3.8rem)]  w-full flex flex-col"
    >
      {/* Main container */}
      <div className="flex-grow flex justify-center items-center p-5">
        <motion.div 
             initial={{
                rotate:10,
                x:200,
                opacity:0
            }}
            animate={{
                rotate:0,
                x:0,
                opacity:1
            }}
            className="hidden w-1/3 md:flex items-end justify-center">
          <img src={loginImage} alt="Login" className="w-full h-full" />
        </motion.div>
        <motion.div
             initial={{
                x : -100
            }}
            animate={{
                x:0
            }}
            className="md:w-1/3 w-full md:h-[55%] flex flex-col justify-between rounded-md border-2 overflow-hidden">
          <div className="bg-primary p-4 text-center font-bold text-3xl text-white font-serif shadow-xl">
            Login
          </div>
          <div className="p-3 w-full h-full flex flex-col gap-2 py-5 inner-shadow">
            <form>
              <Input
                placeHolder="Enter email address"
                label="E-mail"
                name="username"
                type="text"
              />

              <Input
                placeHolder="Enter Password"
                label="Password"
                name="password"
                type="password"
              />
            </form>
            <div className="p-2">
              Forget Password?{" "}
              <span className="underline">
                <a href="#">Click here</a>
              </span>
            </div>
            <div className="flex w-full gap-1 justify-center items-center">
              <div className="w-1/4 md:w-1/3 h-[1px]">
                <hr />
              </div>
              Or Login With
              <div className="w-1/4 md:w-1/3 h-[1px]">
                <hr />
              </div>
            </div>
            <div className="w-full flex justify-center gap-2">
              <Button
                icon="fa-brands fa-google"
                className="border-red-500 border-[0.5px] rounded-md py-2 px-4 text-red-500"
                name="Google"
              />
              <Button
                icon="fa-brands fa-square-facebook"
                className="py-2 px-4 border-blue-500 border-[0.5px] rounded-md text-blue-500"
                name="Google"
              />
            </div>
            <div className="text-center">
              Don't have an account?{" "}
              <span className="underline">
                <Link to="../signup">Register now</Link>
              </span>
            </div>
          </div>
          <div className="bg-primary flex justify-end items-center p-3 gap-2 text-center text-primary shadow-2xl">
            <Button
              className="bg-dark-green border-[1.5px] px-4 py-1 rounded-md text-white"
              name="submit"
              type="submit"
            />
            <Button
              className="btn-outline border-dark-green bg-white border-[1.5px] px-4 py-1 rounded-md text-primary"
              name="reset"
              type="reset"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
