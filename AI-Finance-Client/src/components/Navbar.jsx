import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom"; // Use React Router for navigation

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Expense Tracking", href: "/expense-tracking" },
  { name: "Budget Planning", href: "/budget-planning" },
  { name: "Savings Goals", href: "/savings-goals" },
  { name: "Spending Insights", href: "/spending-insights" },
  { name: "Investment Recommendations", href: "/investment-recommendations" },
];

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Branding */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              AI Finance
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Button key={item.name} variant="ghost" asChild>
                  <Link to={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
