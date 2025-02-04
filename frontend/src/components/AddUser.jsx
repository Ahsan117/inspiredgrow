import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AddUser = () => {
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   role: "user",
  // });

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/admin/add-user", user, {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     });
  //     alert("User added successfully!");
  //   } catch (err) {
  //     alert("Failed to add user.");
  //   }
  // };
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("hisargow");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [warehousesGroup, setWarehousesGroup] = useState("System Warehouse");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the user ID and token from session storage
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      alert("User ID or token not found in session storage!");
      return;
    }

    // Construct the request payload
    const userData = {
      userFname: username,
      userfirstName: firstName,
      userlastName: lastName,
      usermobile: mobile,
      useremail: email,
      userRole: role,
      userpassword: password,
      userconfirmPassword: confirmPassword,
      userwarehouse: warehousesGroup,
    };

    try {
      // Make the POST request
      const response = await axios.post(
        `http://127.0.0.1:5000/user/adduser/${userId}`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Pass token in the Authorization header
          },
        }
      );

      alert("User created successfully!");
      console.log("API Response:", response.data);
      setUsername("");
      setFirstName("");
      setLastName("");
      setMobile("");
      setEmail("");
      setRole("hisargow");
      setPassword("");
      setConfirmPassword("");
      setWarehousesGroup("System Warehouse");
    } catch (err) {
      console.error("Error creating user:", err);
      alert("Failed to create user.");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        {/* <div className="p-10">
          <h2>Add User</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button type="submit">Add User</button>
          </form>
        </div> */}
        <div className="w-full p-20">
          <h1 className="text-2xl font-bold mb-6 text-start">Create User</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-20">
              <div className="flex gap-32 w-full">
                {/* Left Column */}
                <div className="space-y-4 w-full">
                  <div>
                    <label
                      htmlFor="username"
                      className="block font-medium mb-2"
                    >
                      Username*
                    </label>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-medium mb-2"
                    >
                      First Name*
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-medium mb-2"
                    >
                      Last Name*
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block font-medium mb-2">
                      Mobile
                    </label>
                    <input
                      id="mobile"
                      type="text"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium mb-2">
                      Email*
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4 w-full">
                  <div>
                    <label htmlFor="role" className="block font-medium mb-2">
                      Role*
                    </label>
                    <select
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    >
                      <option value="hisargow">hisargow</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block font-medium mb-2"
                    >
                      Password*
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block font-medium mb-2"
                    >
                      Confirm Password*
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="warehousesGroup"
                      className="block font-medium mb-2"
                    >
                      Warehouses Group*
                    </label>
                    <input
                      id="warehousesGroup"
                      type="text"
                      value={warehousesGroup}
                      onChange={(e) => setWarehousesGroup(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="warehousesGroup"
                      className="block font-medium mb-2"
                    >
                      Default warehouse*
                    </label>
                    <input
                      id="warehousesGroup"
                      type="text"
                      value={warehousesGroup}
                      onChange={(e) => setWarehousesGroup(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-10">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
