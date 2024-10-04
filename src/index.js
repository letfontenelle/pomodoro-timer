import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Importando os hooks necessários do React
import { useState, useEffect } from 'react'
// Importando componentes UI personalizados
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
// Importando ícones do Lucide
import { PlayIcon, PauseIcon, FlagIcon, RefreshCwIcon, ArrowLeftIcon } from 'lucide-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
