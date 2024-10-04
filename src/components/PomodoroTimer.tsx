import React from 'react';

// Importando os hooks necessários do React
import { useState, useEffect } from 'react'
// Importando componentes UI personalizados
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Switch } from "../components/ui/switch" 
// Importando ícones do Lucide
import { PlayIcon, PauseIcon, FlagIcon, RefreshCwIcon, ArrowLeftIcon } from 'lucide-react'

export default function Component() {
  // Estado para controlar se está no modo de pausa
  const [isBreakMode, setIsBreakMode] = useState(false)
  // Estado para armazenar o tempo inicial do Pomodoro (25 minutos em segundos)
  const [initialPomodoroTime, setInitialPomodoroTime] = useState(25 * 60)
  // Estado para armazenar o tempo inicial da pausa (5 minutos em segundos)
  const [initialBreakTime, setInitialBreakTime] = useState(5 * 60)
  // Estado para armazenar o tempo atual do timer
  const [time, setTime] = useState(initialPomodoroTime)
  // Estado para controlar se o timer está rodando
  const [isRunning, setIsRunning] = useState(false)
  // Estado para armazenar as voltas registradas
  const [laps, setLaps] = useState([])
  // Estado para controlar se o timer terminou
  const [isFinished, setIsFinished] = useState(false)

  // Efeito para gerenciar o timer
  useEffect(() => {
    let interval

    if (isRunning) {
      // Inicia um intervalo que decrementa o tempo a cada segundo
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            // Se o tempo chegar a zero, limpa o intervalo e finaliza o timer
            clearInterval(interval)
            setIsRunning(false)
            setIsFinished(true)
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    }

    // Limpa o intervalo quando o componente é desmontado ou quando isRunning muda
    return () => clearInterval(interval)
  }, [isRunning])

  // Função para iniciar ou pausar o timer
  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  // Função para registrar uma volta
  const recordLap = () => {
    const  lapTime = formatTime(time)
    setLaps([...laps, lapTime])
  }

  // Função para reiniciar o timer
  const restartTimer = () => {
    setTime(isBreakMode ? initialBreakTime : initialPomodoroTime)
    setIsRunning(false)
    setLaps([])
    setIsFinished(false)
  }

  // Função para formatar o tempo em minutos e segundos
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  // Função para lidar com a mudança do tempo do Pomodoro
  const handlePomodoroTimeChange = (e) => {
    const newMinutes = parseInt(e.target.value, 10)
    if (!isNaN(newMinutes) && newMinutes > 0) {
      const newTime = newMinutes * 60
      setInitialPomodoroTime(newTime)
      if (!isBreakMode) setTime(newTime)
    }
  }

  // Função para lidar com a mudança do tempo de pausa
  const handleBreakTimeChange = (e) => {
    const newMinutes = parseInt(e.target.value, 10)
    if (!isNaN(newMinutes) && newMinutes > 0 && newMinutes <= 15) {
      const newTime = newMinutes * 60
      setInitialBreakTime(newTime)
      if (isBreakMode) setTime(newTime)
    }
  }

  // Função para alternar entre o modo Pomodoro e o modo de pausa
  const toggleMode = () => {
    setIsBreakMode(!isBreakMode)
    setTime(isBreakMode ? initialPomodoroTime : initialBreakTime)
    setIsRunning(false)
    setLaps([])
    setIsFinished(false)
  }

  // Função para voltar ao timer após a conclusão
  const handleBackToTimer = () => {
    setIsFinished(false)
    restartTimer()
  }

  // Renderiza a tela de conclusão se o timer terminou
  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Parabéns! 🎉</h2>
          <p className="text-xl mb-6 text-gray-600">Inicie outra sessão de estudo</p>
          <Button onClick={handleBackToTimer} size="lg">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Voltar ao Timer
          </Button>
        </div>
      </div>
    )
  }

  // Renderiza o timer principal
return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        {/* Título dinâmico baseado no modo atual */}
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          {isBreakMode ? "Break Timer" : "Pomodoro Timer"}
        </h1>
        {/* Switch para alternar entre modos Pomodoro e Break */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700">Pomodoro</span>
          <Switch checked={isBreakMode} onCheckedChange={toggleMode} />
          <span className="text-gray-700">Break</span>
        </div>
        {/* Input para ajustar o tempo do timer */}
        <div className="flex items-center justify-center mb-4">
          <Input
            type="number"
            value={isBreakMode ? Math.floor(initialBreakTime / 60) : Math.floor(initialPomodoroTime / 60)}
            onChange={isBreakMode ? handleBreakTimeChange : handlePomodoroTimeChange}
            className="w-20 mr-2 text-center"
            min="1"
            max={isBreakMode ? "15" : ""}
          />
          <span className="text-gray-700">minutos</span>
        </div>
        {/* Exibição do tempo atual */}
        <div className="text-6xl font-bold mb-8 text-center text-gray-700">
          {formatTime(time)}
        </div>
        {/* Botões de controle do timer */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button onClick={toggleTimer} variant="outline" size="lg">
            {isRunning ? <PauseIcon className="mr-2 h-4 w-4" /> : <PlayIcon className="mr-2 h-4 w-4" />}
            {isRunning ? 'Pause' : 'Play'}
          </Button>
          {/* Botão de Lap apenas no modo Pomodoro */}
          {!isBreakMode && (
            <Button onClick={recordLap} variant="outline" size="lg">
              <FlagIcon className="mr-2 h-4 w-4" />
              Lap
            </Button>
          )}
          <Button onClick={restartTimer} variant="outline" size="lg">
            <RefreshCwIcon className="mr-2 h-4 w-4" />
            Restart
          </Button>
        </div>
        {/* Lista de voltas (apenas no modo Pomodoro) */}
        {!isBreakMode && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Laps</h2>
            <ul className="space-y-2 max-h-60 overflow-y-auto">
              {laps.map((lap, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded">
                  Lap {index + 1}: {lap}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}