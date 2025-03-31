import { useState, ChangeEvent, FormEvent } from "react";

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    email: "user@example.com",
    name: "John Doe",
    address: "123 Example St",
    phone: "555-1234",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      {editing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Address:
            </label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Update
          </button>
        </form>
      ) : (
        <div className="space-y-3">
          <p>
            <strong>Name:</strong> <span className="text-gray-800">{profile.name}</span>
          </p>
          <p>
            <strong>Email:</strong> <span className="text-gray-800">{profile.email}</span>
          </p>
          <p>
            <strong>Address:</strong> <span className="text-gray-800">{profile.address}</span>
          </p>
          <p>
            <strong>Phone:</strong> <span className="text-gray-800">{profile.phone}</span>
          </p>
          <button
            onClick={() => setEditing(true)}
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
