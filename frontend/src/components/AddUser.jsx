// import { useState } from "react";
// import axios from "axios";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// const AddUser = () => {
//   const [username, setUsername] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("hisargow");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [warehousesGroup, setWarehousesGroup] = useState("System Warehouse");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Get the user ID and token from session storage

//     // Construct the request payload
//     const userData = {
//       userFname: username,
//       userfirstName: firstName,
//       userlastName: lastName,
//       usermobile: mobile,
//       useremail: email,
//       userRole: role,
//       userpassword: password,
//       userconfirmPassword: confirmPassword,
//       userwarehouse: warehousesGroup,
//     };

//     try {
//       // Make the POST request
//       const response = await axios.post(
//         "http://localhost:5000/admiaddinguser/adduserbyadmin",
//         userData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       alert("User created successfully!");
//       console.log("API Response:", response.data);
//       setUsername("");
//       setFirstName("");
//       setLastName("");
//       setMobile("");
//       setEmail("");
//       setRole("hisargow");
//       setPassword("");
//       setConfirmPassword("");
//       setWarehousesGroup("System Warehouse");
//     } catch (err) {
//       console.error("Error creating user:", err);
//       alert("Failed to create user.");
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <Navbar />
//       <div className="flex flex-grow">
//         <Sidebar />

//         <div className="w-full p-20">
//           <h1 className="text-2xl font-bold mb-6 text-start">Create User</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="flex gap-20">
//               <div className="flex gap-32 w-full">
//                 {/* Left Column */}
//                 <div className="space-y-4 w-full">
//                   <div>
//                     <label
//                       htmlFor="username"
//                       className="block font-medium mb-2"
//                     >
//                       Username*
//                     </label>
//                     <input
//                       id="username"
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="firstName"
//                       className="block font-medium mb-2"
//                     >
//                       First Name*
//                     </label>
//                     <input
//                       id="firstName"
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="lastName"
//                       className="block font-medium mb-2"
//                     >
//                       Last Name*
//                     </label>
//                     <input
//                       id="lastName"
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="mobile" className="block font-medium mb-2">
//                       Mobile
//                     </label>
//                     <input
//                       id="mobile"
//                       type="text"
//                       value={mobile}
//                       onChange={(e) => setMobile(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block font-medium mb-2">
//                       Email*
//                     </label>
//                     <input
//                       id="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="space-y-4 w-full">
//                   <div>
//                     <label htmlFor="role" className="block font-medium mb-2">
//                       Role*
//                     </label>
//                     <select
//                       id="role"
//                       value={role}
//                       onChange={(e) => setRole(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     >
//                       <option value="hisargow">hisargow</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block font-medium mb-2"
//                     >
//                       Password*
//                     </label>
//                     <input
//                       id="password"
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="confirmPassword"
//                       className="block font-medium mb-2"
//                     >
//                       Confirm Password*
//                     </label>
//                     <input
//                       id="confirmPassword"
//                       type="password"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="warehousesGroup"
//                       className="block font-medium mb-2"
//                     >
//                       Warehouses Group*
//                     </label>
//                     <input
//                       id="warehousesGroup"
//                       type="text"
//                       value={warehousesGroup}
//                       onChange={(e) => setWarehousesGroup(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="warehousesGroup"
//                       className="block font-medium mb-2"
//                     >
//                       Default warehouse*
//                     </label>
//                     <input
//                       id="warehousesGroup"
//                       type="text"
//                       value={warehousesGroup}
//                       onChange={(e) => setWarehousesGroup(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center gap-4 mt-10">
//               <button
//                 type="submit"
//                 className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddUser;
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AddUser = () => {
  const [formData, setFormData] = useState({
    userName: "",
    FirstName: "",
    LastName: "",
    Mobile: "",
    Email: "",
    Store: "",
    Role: "",
    Password: "",
    WarehouseGroup: "",
    Defaultwarehouse: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        "http://192.168.1.13:5000/admiaddinguser/adduserbyadmin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("User added successfully!");
        // Reset form
        setFormData({
          userName: "",
          FirstName: "",
          LastName: "",
          Mobile: "",
          Email: "",
          Store: "",
          Role: "",
          Password: "",
          WarehouseGroup: "",
          Defaultwarehouse: "",
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />

        <div className="w-full p-20">
          <div>
            {message && <div style={{ color: "green" }}>{message}</div>}
            {error && <div style={{ color: "red" }}>{error}</div>}

            <div className="">
              <h1 className="text-2xl font-bold mb-6 text-start">
                Create User
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="flex gap-20">
                  <div className="flex gap-32 w-full">
                    {" "}
                    {/* Left Column */}
                    <div className="space-y-4 w-full">
                      <div>
                        {" "}
                        <label
                          htmlFor="username"
                          className="block font-medium mb-2"
                        >
                          Username*
                        </label>
                        <input
                          type="text"
                          name="userName"
                          placeholder="UserName"
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          value={formData.userName}
                          onChange={handleChange}
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
                          type="text"
                          name="FirstName"
                          value={formData.FirstName}
                          onChange={handleChange}
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
                          type="text"
                          name="LastName"
                          value={formData.LastName}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="Mobile"
                          className="block font-medium mb-2"
                        >
                          Mobile
                        </label>
                        <input
                          type="text"
                          name="Mobile"
                          value={formData.Mobile}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-medium mb-2"
                        >
                          Email*
                        </label>
                        <input
                          type="text"
                          name="Email"
                          value={formData.Email}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          required
                        />
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-4 w-full">
                      <div>
                        <label className="block font-medium mb-2">Store:</label>
                        <select
                          name="Store"
                          value={formData.Store}
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          onChange={handleChange}
                          required
                        >
                          <option value="SAAS ADMIN">SAAS ADMIN</option>
                          <option value="POS">POS</option>
                          <option value="Keshav demo 1">Keshav demo 1</option>
                          <option value="keshav demo 2">keshav demo 2</option>
                          <option value="grocery on wheels">
                            grocery on wheels
                          </option>
                          <option
                            value="Grocery ON wheels"
                            className="uppercase"
                          >
                            Grocery ON wheels
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-medium mb-2">Role:</label>
                        <select
                          name="Role"
                          value={formData.Role}
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Role</option>
                          <option value="admin">Admin</option>
                          <option value="user">User</option>
                          <option value="manager">Manager</option>
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
                          type="text"
                          name="Password"
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          value={formData.Password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      {/* <div>
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
                  </div> */}
                      <div>
                        <label
                          htmlFor="warehousesGroup"
                          className="block font-medium mb-2"
                        >
                          Warehouses Group*
                        </label>
                        <input
                          type="text"
                          name="WarehouseGroup"
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          value={formData.WarehouseGroup}
                          onChange={handleChange}
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
                          type="text"
                          name="Defaultwarehouse"
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          value={formData.Defaultwarehouse}
                          onChange={handleChange}
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
      </div>
    </div>
  );
};

export default AddUser;
