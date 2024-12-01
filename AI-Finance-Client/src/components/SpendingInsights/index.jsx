import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const insights = [
  "You've spent 20% more on dining out this month compared to last month.",
  "Switching to a different electricity provider could save you $50 per month.",
  "Your subscription services total $100 per month. Consider reviewing for unused subscriptions.",
  "You've reached 80% of your entertainment budget this month. Consider reducing spending in this category.",
  "Your grocery spending is 15% lower than last month. Great job on saving!",
]

export default function SpendingInsights() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Spending Insights</h1>
      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {insights.map((insight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-2xl mr-4">💡</span>
                <p>{insight}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

