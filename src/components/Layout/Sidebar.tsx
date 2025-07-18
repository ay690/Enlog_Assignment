import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  CheckSquare,
  Activity,
  Users,
  Settings,
  Zap,
  TrendingUp,
  GitBranch,
  Target,
  Plus,
} from "lucide-react";
import { useAppSelector } from "../../store";
import { type NavigationItem, type Project } from "../../types";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const teamMembers = useAppSelector((state) => state.user.teamMembers);

  const navigationItems: NavigationItem[] = [
    { id: "dashboard", name: "Dashboard", icon: "Home", path: "/" },
    {
      id: "tasks",
      name: "Tasks",
      icon: "CheckSquare",
      path: "/tasks",
      badge: 2,
    },
    { id: "activity", name: "Activity", icon: "Activity", path: "/activity" },
    { id: "customers", name: "Customers", icon: "Users", path: "/customers" },
    { id: "settings", name: "Settings", icon: "Settings", path: "/settings" },
  ];

  const projects: Project[] = [
    { id: "bizconnect", name: "BizConnect", count: 7, icon: "Zap" },
    { id: "growth-hub", name: "Growth Hub", count: 0, icon: "TrendingUp" },
    {
      id: "conversion-path",
      name: "Conversion Path",
      count: 0,
      icon: "GitBranch",
    },
    { id: "marketing", name: "Marketing", count: 0, icon: "Target" },
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      Home: Home,
      CheckSquare: CheckSquare,
      Activity: Activity,
      Users: Users,
      Settings: Settings,
      Zap: Zap,
      TrendingUp: TrendingUp,
      GitBranch: GitBranch,
      Target: Target,
    };
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  return (
    <div className="w-64 bg-white min-h-screen border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">BizLink</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              location.pathname === item.path
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <div className="flex items-center space-x-3">
              {getIcon(item.icon)}
              <span>{item.name}</span>
            </div>
            {item.badge && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                {item.badge}
              </span>
            )}
          </Link>
        ))}

        {/* Projects Section */}
        <div className="pt-6">
          <h3 className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
            Projects
          </h3>
          <div className="space-y-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg cursor-pointer transition-colors"
              >
                <div className="flex items-center space-x-3">
                  {getIcon(project.icon)}
                  <span>{project.name}</span>
                </div>
                {project.count > 0 && (
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {project.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="pt-6">
          <div className="flex items-center justify-between px-3 mb-3">
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Members
            </h3>
            <button className="text-gray-400 hover:text-gray-600">
              <Plus size={16} />
            </button>
          </div>
          <div className="space-y-2">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg cursor-pointer transition-colors"
              >
                <div className="relative w-8 h-8">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  {member.isOnline && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{member.name}</p>
                  <p className="text-xs text-gray-400 truncate">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
