import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    "Expense Tracking",
    "Budget Planning",
    "Savings Goals",
    "Spending Insights",
    "Investment Recommendations",
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">AI Finance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature}>
            <CardHeader>
              <CardTitle>{feature}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link to={`/${feature.toLowerCase().replace(/\s+/g, "-")}`}>
                  View Details
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
