import AddUser from "../components/AddUser";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />
        <div className="p-6 w-full">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Admin Dashboard
          </h2>
          {/* AddUser component should be placed here */}
          <AddUser /> {/* Uncommented to display the AddUser form */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
