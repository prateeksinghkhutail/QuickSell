import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    wallet: "",
    referral: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch profile data from the API when the component mounts
    const fetchProfileData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/profile"); // Replace with actual API endpoint
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileData({ ...profileData, image: e.target.files[0] });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    // Create a FormData object for image upload
    const formData = new FormData();
    formData.append("image", profileData.image);
    formData.append("name", profileData.name);
    formData.append("email", profileData.email);
    formData.append("phone", profileData.phone);
    formData.append("location", profileData.location);
    formData.append("wallet", profileData.wallet);
    formData.append("referral", profileData.referral);

    try {
      const response = await fetch("http://localhost:8000/api/profile/update", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Profile updated successfully!");
        setIsEditing(false);
      } else {
        console.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="font-std mb-10  rounded-2xl bg-gray-100 p-10 min-h-screen font-normal leading-relaxed text-gray-900 shadow-xl">
      <div className="flex flex-col">
        <div className="flex flex-col items-center mb-5">
          <h2 className="mb-5 text-4xl font-bold text-blue-900">Profile</h2>
          <div className="text-center">
            <img
              src={
                profileData.image
                  ? URL.createObjectURL(profileData.image)
                  : "https://i.pravatar.cc/300" // Default placeholder
              }
              alt="Profile"
              className="rounded-full w-32 h-32 mx-auto border-4 border-indigo-800 mb-4 transition-transform duration-300 hover:scale-105 ring ring-gray-300"
            />
            <input
              type="file"
              name="profile"
              id="upload_profile"
              hidden
              onChange={handleImageChange}
            />
            <label
              htmlFor="upload_profile"
              className="inline-flex items-center"
            >
              <svg
                data-slot="icon"
                className="w-5 h-5 text-blue-700"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
            </label>
          </div>
          <button
            className="bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 ring ring-gray-300 hover:ring-indigo-300"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={profileData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Wallet Amount
            </label>
            <input
              type="number"
              name="wallet"
              value={profileData.wallet}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Referral
            </label>
            <input
              type="text"
              name="referral"
              value={profileData.referral}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              disabled={!isEditing}
            />
          </div>
          {isEditing && (
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
