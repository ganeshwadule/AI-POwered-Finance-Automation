import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recommendations = [
  { name: 'Low-risk ETF', description: 'Diversified fund tracking S&P 500', risk: 'Low', potentialReturn: 'Moderate' },
  { name: 'Tech Growth Stock', description: 'High-growth potential in AI sector', risk: 'High', potentialReturn: 'High' },
  { name: 'Dividend Stock', description: 'Stable company with consistent dividends', risk: 'Low', potentialReturn: 'Low' },
  { name: 'Real Estate Investment Trust', description: 'Exposure to real estate market', risk: 'Moderate', potentialReturn: 'Moderate' },
  { name: 'Green Energy Fund', description: 'Focused on renewable energy companies', risk: 'Moderate', potentialReturn: 'High' },
]

export default function InvestmentRecommendations() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black bg-white inline-block p-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">Investment Recommendations</h1>
      <Card className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <CardHeader className="border-b-4 border-black">
          <CardTitle className="text-2xl font-bold">AI-Generated Investment Ideas</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {recommendations.map((rec) => (
              <div key={rec.name} className="border-4 border-black p-4">
                <h3 className="text-xl font-bold mb-2">{rec.name}</h3>
                <p className="text-lg mb-2">{rec.description}</p>
                <div className="flex justify-between mt-2">
                  <span className="text-lg font-bold">Risk: {rec.risk}</span>
                  <span className="text-lg font-bold">Potential Return: {rec.potentialReturn}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

