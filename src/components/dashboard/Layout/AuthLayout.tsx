// Import statements
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar/Sidebar";
import { sidebarToggle } from "@/utils/toggler";
import BottomNavbar from "../BottomNavbar/Index";
import { Outlet } from "react-router-dom";

// Component definition
const AuthLayout: React.FC = () => {
  const router = useRouter();

  // Function to check if desktop
  const isDesktop = () => document.body.clientWidth > 768;

  // State for sidebar status
  const [sidebarStatus, setSidebarStatus] = useState<boolean>(false);

  // Effect to handle resize event
  useEffect(() => {
    const handleResize = () => {
      setSidebarStatus(isDesktop());
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="adminLayout">
      {/* Sidebar */}
      <Sidebar
        toggle={sidebarToggle}
        className={sidebarStatus ? "" : "mobile"}
      />

      {/* Main Wrapper */}
      <div className="mainWrapper">
        {/* Render child components */}
        <Outlet context={[sidebarToggle]} />
      </div>

      {/* Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
};

export default AuthLayout;
