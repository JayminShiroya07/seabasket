import { useRef, useState } from "react";
import user from "../../assets/user.png";

type profileDetails = {
  name : string,
  mobile : number,
  address : string,
  image : string | undefined,
  mail: string
}

export default function Profile() {
  const [profilePhoto, setProfilePhoto] = useState<string | undefined>(user.toString());
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const mobile = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLTextAreaElement>(null);
  const image = useRef<HTMLInputElement>(null);

  function onPhotoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setProfilePhoto(fileReader.result?.toString());
      
    };

    fileReader.readAsDataURL(file);
  }

  function OnFormSubmit(event: React.FormEvent){
    event.preventDefault();
    const updatedProfileDetails : profileDetails = {
      name : name.current!.value,
      mail : email.current!.value,
      mobile : parseInt(mobile.current!.value),
      address : address.current!.value,
      image : profilePhoto?.toString(),
    }
    
    console.log(updatedProfileDetails)
  } 


  return (
    <div className="w-full h-full flex p-6 bg-white shadow-md rounded-lg gap-3">
      {/* user profile photo */}
      <div className="w-1/3 h-full shadow-xl rounded-md flex  flex-col justify-start gap-3">
        <div className="h-1/2 w-full flex justify-center p-3 py-6 flex-col items-center gap-3">
          <img
            src={profilePhoto}
            alt=""
            className="h-full rounded-full drop-shadow-2xl"
          />
        </div>
        {/* user photo */}
        <div className="flex flex-col items-center gap-2">
          <label
            htmlFor="userPhoto"
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Upload Photo
          </label>
          <input
            ref={image}
            id="userPhoto"
            type="file"
            accept=".png, .jpg, .jpeg"
            className="hidden"
            onChange={onPhotoChange}
          />
        </div>
      </div>
      <div className="md:w-2/3 h-full flex shadow-xl flex-col rounded-md overflow-hidden">
        <div className="bg-dark-green flex justify-center items-center text-white flex-col p-4 text-2xl capitalize">
          <h1>user Information</h1>
        </div>
        <form action="" onSubmit={(event) => OnFormSubmit(event)}>
          <div className="h-fit py-9 px-20 flex flex-col gap-4">
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-lg capitalize text-gray-800"
              >
                Username
              </label>
              <input
                ref={name}
                type="text"
                className="border-[1px] border-black rounded-md bg-transparent p-3"
                placeholder="Your Name"
                name="name"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-lg capitalize text-gray-800"
              >
                email
              </label>
              <input
                ref={email}
                type="email"
                className="border-[1px] border-black rounded-md bg-transparent p-3"
                placeholder="Your Email"
                name="mail"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="mobile"
                className="text-lg capitalize text-gray-800"
              >
                mobile number
              </label>
              <input
                ref={mobile}
                type="number"
                className="border-[1px] border-black rounded-md bg-transparent p-3"
                placeholder="Your Mobile Number"
                name="mobile"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="address"
                className="text-lg capitalize text-gray-800"
              >
                Address
              </label>
              <textarea
                ref={address}
                cols={20}
                rows={5}
                className="border-[1px] border-black rounded-md bg-transparent p-3"
                placeholder="Your Address"
                name="address"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <input type="submit" name="reset" className="px-5 border-[1px] rounded-md py-2 w-full bg-dark-green text-white text-lg"></input>
              <input type="reset" name="reset" className="px-5 border-[1px] rounded-md py-2 w-full"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
