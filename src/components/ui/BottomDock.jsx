import { Home, Search, User, Settings, Mail } from "lucide-react";

export default function BottomDock() {
  return (
    <nav 
      className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50"
      aria-label="Bottom Navigation"
    >
      <ul className="flex justify-around py-3">
        
        <li className="flex flex-col items-center hover:text-blue-600 transition">
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </li>

        <li className="flex flex-col items-center hover:text-blue-600 transition">
          <Search size={24} />
          <span className="text-xs mt-1">Search</span>
        </li>

        <li className="flex flex-col items-center hover:text-blue-600 transition">
          <Mail size={24} />
          <span className="text-xs mt-1">Messages</span>
        </li>

        <li className="flex flex-col items-center hover:text-blue-600 transition">
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </li>

        <li className="flex flex-col items-center hover:text-blue-600 transition">
          <Settings size={24} />
          <span className="text-xs mt-1">Settings</span>
        </li>

      </ul>
    </nav>
  );
}
