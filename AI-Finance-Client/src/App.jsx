import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing React Router
import { ThemeProvider } from "./components/ThemeProvider"; // ThemeProvider to handle dark/light mode
import Navbar from "./components/Navbar"; // Navbar for navigation
import BudgetPlanning from "./components/BudgetPlanning"; // BudgetPlanning component
import ExpenseTracking from "./components/ExpenseTracking"; // ExpenseTracking component
import InvestmentRecommendations from "./components/InvestmentRecommendations"; // InvestmentRecommendations component
import SavingGoals from "./components/SavingGoals"; // SavingGoals component
import SpendingInsights from "./components/SpendingInsights"; // SpendingInsights component

function App() {
  return (
    // Wrapping the entire app in the ThemeProvider to manage themes
    <ThemeProvider>
      <Router>
        {/* Navbar for navigation */}
        <Navbar />

        {/* Define Routes to render different pages */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<h1>Welcome to AI Finance</h1>} />
            <Route path="/budget-planning" element={<BudgetPlanning />} />
            <Route path="/expense-tracking" element={<ExpenseTracking />} />
            <Route path="/investment-recommendations" element={<InvestmentRecommendations />} />
            <Route path="/savings-goals" element={<SavingGoals />} />
            <Route path="/spending-insights" element={<SpendingInsights />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
