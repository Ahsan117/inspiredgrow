import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    navigate("/admin-login"); // Redirect to login page
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Admin Panel</h2>
      <div style={styles.links}>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#333",
    color: "white",
    padding: "10px 20px",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "10px",
  },
  logoutBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Navbar;




// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
//       {/* Logo */}
//       <h2 className="text-xl font-semibold">Admin Panel</h2>

//       {/* Logout Button */}
//       <button
//         onClick={handleLogout}
//         className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-all"
//       >
//         Logout
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
