import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRegister from "./pages/AdminRegister.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import AddUser from "./components/User/AddUser.jsx"; // Moved AddUser under User for better structure
import UserList from "./components/User/UserList.jsx";
import RoleList from "./components/User/RoleList.jsx";
import CreateRoleList from "./components/User/CreateRoleList.jsx"; // Corrected file name
import AddStore from "./components/store/AddStore.jsx";
import StoreView from "./components/store/StoreView.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin/add-user" element={<AddUser />} /> {/* Adjusted route format */}
        <Route path="/admin/user-list" element={<UserList />} />
        <Route path="/admin/role-list" element={<RoleList />} />
        <Route path="/admin/role-create" element={<CreateRoleList />} /> {/* Updated path */}
        <Route path="/store/add" element={<AddStore />} />
        <Route path="/store/view" element={<StoreView />} />
      </Routes>
    </Router>
  );
}

export default App;
