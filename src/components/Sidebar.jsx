import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  BuildingIcon,
  HomeIcon,
  MapIcon,
  PlaneIcon,
  TicketIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", icon: <HomeIcon className="w-5 h-5" />, path: "/" },
  {
    name: "Airports",
    icon: <BuildingIcon className="w-5 h-5" />,
    path: "/airports",
  },
  {
    name: "Flights",
    icon: <PlaneIcon className="w-5 h-5" />,
    path: "/flights",
  },
  {
    name: "My Tickets",
    icon: <TicketIcon className="w-5 h-5" />,
    path: "/tickets",
  },
];

export const Sidebar = ({ className }) => {
  const navigate = useNavigate();

  return (
    <nav
      className={cn(
        "w-60 h-full bg-gray-900 text-white p-4 space-y-4",
        className
      )}
    >
      <h2 className="text-xl font-bold mb-4">AeroWatch</h2>
      {navItems.map((item) => (
        <Button
          key={item.name}
          variant="ghost"
          className="w-full flex items-center gap-2 justify-start text-white hover:bg-gray-700 hover:text-white"
          onClick={() => navigate(item.path)}
        >
          {item.icon} {item.name}
        </Button>
      ))}
    </nav>
  );
};
