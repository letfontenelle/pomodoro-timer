import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface UserRegistrationProps {
  onSubmit: (name: string) => void;
}

export default function UserRegistration({ onSubmit }: UserRegistrationProps) {
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onSubmit(name.trim())
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Bem-vindo ao Pomodoro Timer</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
          <Button type="submit" className="w-full">
            Iniciar Pomodoro
          </Button>
        </form>
      </div>
    </div>
  )
}