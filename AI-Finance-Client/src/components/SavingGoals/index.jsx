"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function SavingsGoals() {
  const [goals, setGoals] = useState([
    { id: 1, name: 'Emergency Fund', target: 10000, current: 5000 },
    { id: 2, name: 'Vacation', target: 5000, current: 2000 },
    { id: 3, name: 'New Car', target: 30000, current: 15000 },
  ])
  const [newName, setNewName] = useState('')
  const [newTarget, setNewTarget] = useState('')

  const addGoal = () => {
    if (newName && newTarget) {
      setGoals([...goals, { id: Date.now(), name: newName, target: parseFloat(newTarget), current: 0 }])
      setNewName('')
      setNewTarget('')
    }
  }

  const updateGoal = (id, field, value) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, [field]: parseFloat(value) } : goal
    ))
  }

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id))
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Savings Goals</h1>
      <Card>
        <CardHeader>
          <CardTitle>Add New Savings Goal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input
              placeholder="Goal Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Target Amount"
              value={newTarget}
              onChange={(e) => setNewTarget(e.target.value)}
            />
            <Button onClick={addGoal}>Add Goal</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Current Savings Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {goals.map((goal) => (
              <div key={goal.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{goal.name}</span>
                  <Button variant="destructive" onClick={() => deleteGoal(goal.id)}>Delete</Button>
                </div>
                <div className="flex items-center space-x-4">
                  <Input
                    type="number"
                    value={goal.target}
                    onChange={(e) => updateGoal(goal.id, 'target', e.target.value)}
                    className="w-1/3"
                  />
                  <Input
                    type="number"
                    value={goal.current}
                    onChange={(e) => updateGoal(goal.id, 'current', e.target.value)}
                    className="w-1/3"
                  />
                  <span className="w-1/3 text-right">{`$${goal.current} / $${goal.target}`}</span>
                </div>
                <Progress value={(goal.current / goal.target) * 100} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

