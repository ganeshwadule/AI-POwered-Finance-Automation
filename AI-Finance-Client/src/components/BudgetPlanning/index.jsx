"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function BudgetPlanning() {
  const [budgets, setBudgets] = useState([
    { id: 1, category: 'Food', amount: 400, spent: 300 },
    { id: 2, category: 'Rent', amount: 1000, spent: 1000 },
    { id: 3, category: 'Utilities', amount: 200, spent: 150 },
  ])
  const [newCategory, setNewCategory] = useState('')
  const [newAmount, setNewAmount] = useState('')

  const addBudget = () => {
    if (newCategory && newAmount) {
      setBudgets([...budgets, { id: Date.now(), category: newCategory, amount: parseFloat(newAmount), spent: 0 }])
      setNewCategory('')
      setNewAmount('')
    }
  }

  const updateBudget = (id, field, value) => {
    setBudgets(budgets.map(budget => 
      budget.id === id ? { ...budget, [field]: parseFloat(value) } : budget
    ))
  }

  const deleteBudget = (id) => {
    setBudgets(budgets.filter(budget => budget.id !== id))
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Budget Planning</h1>
      <Card>
        <CardHeader>
          <CardTitle>Add New Budget</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input
              placeholder="Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Amount"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
            />
            <Button onClick={addBudget}>Add Budget</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Current Budgets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {budgets.map((budget) => (
              <div key={budget.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{budget.category}</span>
                  <Button variant="destructive" onClick={() => deleteBudget(budget.id)}>Delete</Button>
                </div>
                <div className="flex items-center space-x-4">
                  <Input
                    type="number"
                    value={budget.amount}
                    onChange={(e) => updateBudget(budget.id, 'amount', e.target.value)}
                    className="w-1/3"
                  />
                  <Input
                    type="number"
                    value={budget.spent}
                    onChange={(e) => updateBudget(budget.id, 'spent', e.target.value)}
                    className="w-1/3"
                  />
                  <span className="w-1/3 text-right">{`$${budget.spent} / $${budget.amount}`}</span>
                </div>
                <Progress value={(budget.spent / budget.amount) * 100} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

