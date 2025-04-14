import { useEffect, useRef, useState } from "react";
import user from "../../assets/user.png";
import { useAppDispatch } from "../../store/slices";
import { fetchProfile, updateProfile } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";
import Button from "../../UI/Button";
import { profileModal } from "../../data/modals/userModal";


export default function Profile() {
  const [profilePhoto, setProfilePhoto] = useState<string | undefined>(
    user.toString()
  );

  const dispatch = useAppDispatch();
  const { profile } = useSelector((state: any) => state?.user);

  useEffect(() => {
    const token = localStorage.getItem("AuthToken") || "";
    dispatch(fetchProfile({ token }));
  }, [dispatch]);

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

  function OnFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("mail")?.toString().trim() || "";
    const phoneNumber = formData.get("mobile")?.toString().trim() || "";
    const profilePic = "https://static.vecteezy.com/system/resources/previews/043/900/708/non_2x/user-profile-icon-illustration-vector.jpg";

    const updatedProfileDetails : profileModal = {
      name,email,phoneNumber,profilePic
    }
    const token = localStorage.getItem("AuthToken") || '';
    dispatch(updateProfile({profileData:updatedProfileDetails,token}))
    // console.log(updatedProfileDetails);
  }

  return (
    <div className="w-full h-full flex flex-col md:flex-row p-6 bg-white shadow-md rounded-lg gap-3">
      {/* user profile photo */}
      <div className="w-full md:w-1/3 h-full shadow-xl rounded-md flex flex-col justify-start gap-3">
        <div className="h-auto md:h-1/2 w-full flex justify-center p-5 py-6 flex-col items-center gap-3">
          <img
            src={profile.profilePic}
            alt=""
            className="h-40 w-40 md:h-50 md:w-50 rounded-full drop-shadow-2xl object-cover"
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
            id="userPhoto"
            type="file"
            accept=".png, .jpg, .jpeg"
            className="hidden"
            onChange={onPhotoChange}
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 h-full flex shadow-xl flex-col rounded-md">
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
                type="text"
                className="border-[1px] border-black rounded-md bg-transparent p-3"
                placeholder="Your Name"
                name="name"
                defaultValue={profile.name}
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
                type="email"
                className="border-[1px] border-black rounded-md bg-transparent p-3"
                placeholder="Your Email"
                name="mail"
                defaultValue={profile.email}

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
                type="text"
                className="border-[1px] border-black rounded-md bg-transparent p-3"
                placeholder="Your Mobile Number"
                name="mobile"
                defaultValue={profile.phoneNumber}
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
                cols={20}
                rows={5}
                className="border-[1px] border-black rounded-md bg-transparent p-3"
                placeholder="Your Address"
                name="address"
                defaultValue={profile.address}
              />
            </div>
            <div className="w-full flex gap-2">
              <Button
                type="submit"
                name="submit"
                className="px-5 border-[1px] rounded-md py-2 w-full bg-dark-green text-white text-lg"
              ></Button>
              <Button
                type="reset"
                name="reset"
                className="px-5 border-[1px] rounded-md py-2 w-full"
              ></Button>
            </div>
            <div className="w-full flex gap-2">
              <Button
                type="button"
                name="changePassword"
                className="px-5 border-[1px] cursor-pointer rounded-md py-2 w-full bg-warning text-white text-lg"
              >Change Password</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
