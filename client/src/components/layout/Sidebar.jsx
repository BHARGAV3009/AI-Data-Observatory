import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../constants/routes";
import application_icon from "../../assets/application_icon.png";
import {
  IoGridOutline,
  IoCloudUploadOutline,
  IoShieldCheckmarkOutline,
  IoBarChartOutline,
  IoTrendingUpOutline,
  IoBulbOutline,
  IoDocumentTextOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoCloseOutline,
} from "react-icons/io5";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { logout } = useAuth();

  const navItems = [
    {
      name: "Dashboard",
      path: ROUTES.DASHBOARD,
      icon: <IoGridOutline size={20} />,
    },
    {
      name: "Upload Data",
      path: ROUTES.UPLOAD_DATA,
      icon: <IoCloudUploadOutline size={20} />,
    },
    {
      name: "Data Quality",
      path: ROUTES.DATA_QUALITY,
      icon: <IoShieldCheckmarkOutline size={20} />,
    },
    {
      name: "Analytics",
      path: ROUTES.ANALYTICS,
      icon: <IoBarChartOutline size={20} />,
    },
    {
      name: "Forecasting",
      path: ROUTES.FORECASTING,
      icon: <IoTrendingUpOutline size={20} />,
    },
    {
      name: "AI Insights",
      path: ROUTES.AI_INSIGHTS,
      icon: <IoBulbOutline size={20} />,
    },
    {
      name: "Reports",
      path: ROUTES.REPORTS,
      icon: <IoDocumentTextOutline size={20} />,
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-[var(--color-sidebar)] text-white transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={application_icon}
                alt="App Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-lg tracking-wide">AIDO</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <IoCloseOutline size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                  isActive
                    ? "bg-blue-600 text-white font-medium shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        <div className="p-4 border-t border-gray-700">
          <div className="flex flex-col gap-1">
            <NavLink
              to={ROUTES.SETTINGS}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                  isActive
                    ? "bg-gray-700 text-white font-medium"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <IoSettingsOutline size={20} />
              <span>Settings</span>
            </NavLink>
            <button
              onClick={logout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group text-gray-400 hover:bg-gray-800 hover:text-[var(--color-danger)] w-full text-left"
            >
              <IoLogOutOutline size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
