import { motion } from "motion/react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import loginImage from "../assets/other/signup.png";
import { Form, Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAppDispatch } from "../store/slices";
import { signup } from "../store/slices/userSlice";
import { signupModal } from "../data/modals/userModal";
import { toast } from "react-toastify";

export default function Signup() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("username")?.toString().trim() || "";
    const email = formData.get("mail")?.toString().trim() || "";
    const password = formData.get("password")?.toString().trim() || "";
    const cpassword = formData.get("cpassword")?.toString().trim() || "";
    const phoneNumber = formData.get("mobile")?.toString().trim() || "";

    if (!name || !email || !password || !cpassword || !phoneNumber) {
      toast.error("All fields are required.");
      return;
    }

    if (password !== cpassword) {
      toast.error("Password and Comfirm password should be same.");
      return;
    }

    if (phoneNumber.length !== 10) {
      toast.error("Mobile number should be 10 digit long.");
      return;
    }

    const userData: signupModal = {
      name,
      email,
      password,
      phoneNumber,
      status: true,
    };

    //register code
    dispatch(signup({userData}));
    toast.info("User Register Successfully..!");
    navigate("/login")
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
      className="h-[calc(100vh-3.8rem)]  w-full flex flex-col"
    >
      {/* Main container */}
      <div className="flex-grow flex justify-center items-center p-5">
        <motion.div
          initial={{
            x: 100,
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: 100,
          }}
          className="md:w-1/3 w-full md:h-fit flex flex-col justify-between rounded-md border-2 overflow-hidden"
        >
          <div className="bg-primary p-4 text-center font-bold text-3xl text-white font-serif shadow-xl">
            Signup
          </div>
          <Form onSubmit={handleSubmit}>
            <div className="p-3 w-full h-full flex flex-col gap-2 py-5 inner-shadow">
              <Input
                placeHolder="Enter Name"
                label="Name"
                name="username"
                type="text"
              />
              <Input
                placeHolder="Enter email address"
                label="E-mail"
                name="mail"
                type="email"
              />

              <Input
                placeHolder="Enter Password"
                label="Password"
                name="password"
                type="password"
              />
              <Input
                placeHolder="Enter Comfirm Password"
                label="Comfirm Password"
                name="cpassword"
                type="password"
              />
              <Input
                placeHolder="Your Mobile Number"
                label="Mobile Number"
                name={"mobile"}
              />
              <div className="flex w-full gap-1 justify-center items-center">
                <div className="text-center">
                  Already have an account?{" "}
                  <span className="underline">
                    <Link to="../login">Login now</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-primary flex justify-end items-center p-3 gap-2 text-center text-primary shadow-2xl">
              <Button
                className="bg-dark-green border-[1.5px] px-4 py-1 rounded-md text-white"
                name="Signup"
                type="submit"
              />
              <Button
                className="btn-outline border-dark-green bg-white border-[1.5px] px-4 py-1 rounded-md text-primary"
                name="reset"
                type="reset"
              />
            </div>
          </Form>
        </motion.div>
        <motion.div
          initial={{
            rotate: 10,
            x: -200,
            opacity: 0,
          }}
          animate={{
            rotate: 0,
            x: 0,
            opacity: 1,
          }}
          className="hidden w-1/3 md:flex items-end justify-center"
        >
          <img src={loginImage} alt="Login" className="w-full h-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}
