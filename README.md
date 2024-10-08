# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

Claro! Vou elaborar uma documentação detalhada sobre como o código do aplicativo Pomodoro Timer foi estruturado.

# Documentação do Aplicativo Pomodoro Timer

## Visão Geral

O aplicativo Pomodoro Timer é uma ferramenta de gerenciamento de tempo baseada na técnica Pomodoro. Ele permite que os usuários alternem entre períodos de foco (Pomodoro) e pausas, com funcionalidades adicionais como registro de voltas e personalização de tempos.

## Estrutura do Projeto

O projeto é estruturado da seguinte forma:

```plaintext
src/
|-- components/
|   |-- ui/
|   |   |-- button.tsx
|   |   |-- input.tsx
|   |   |-- switch.tsx
|   |-- PomodoroTimer.tsx
|   |-- UserRegistration.tsx
|-- App.tsx
|-- index.tsx
|-- index.css
tailwind.config.js
```

### Componentes Principais

1. **PomodoroTimer.tsx**: O componente principal que gerencia a lógica do timer Pomodoro.
2. **UserRegistration.tsx**: Componente para registro do nome do usuário.


### Componentes UI

Os componentes UI personalizados (Button, Input, Switch) são baseados na biblioteca shadcn/ui e estão localizados na pasta `components/ui/`.

## Fluxo de Dados e Funcionalidades

### 1. Registro de Usuário

- O aplicativo inicia com a tela de registro (`UserRegistration.tsx`).
- O usuário insere seu nome e clica em "Iniciar Pomodoro".
- O nome é passado para o componente `PomodoroTimer` através da função `handleUserRegistration`.


### 2. Timer Pomodoro

- O componente `PomodoroTimer` gerencia o estado do timer, incluindo:

- Tempo atual
- Modo (Pomodoro ou pausa)
- Estado de execução (rodando ou pausado)
- Registro de voltas



- Principais funcionalidades:

- Iniciar/Pausar timer
- Alternar entre modo Pomodoro e pausa
- Registrar voltas (apenas no modo Pomodoro)
- Reiniciar timer
- Personalizar duração do Pomodoro e da pausa





### 3. Gerenciamento de Estado

- O estado é gerenciado usando hooks do React (`useState`, `useEffect`).
- Estados principais:

- `isBreakMode`: Controla se está no modo Pomodoro ou pausa
- `time`: Tempo atual do timer
- `isRunning`: Se o timer está rodando ou pausado
- `laps`: Array de voltas registradas
- `userName`: Nome do usuário





### 4. Temporizador

- Implementado usando `setInterval` dentro de um `useEffect`.
- O intervalo é limpo quando o componente é desmontado ou quando o timer é pausado.


### 5. Registro de Voltas

- As voltas são registradas com o tempo atual e o nome do usuário.
- Exibidas em uma lista scrollable abaixo do timer.


### 6. Personalização de Tempo

- Os usuários podem ajustar a duração do Pomodoro e da pausa.
- Implementado com inputs numéricos e funções de manipulação de mudança.


### 7. Tela de Conclusão

- Exibida quando o timer chega a zero.
- Mostra uma mensagem de parabéns personalizada com o nome do usuário.


## Estilização

- Utiliza Tailwind CSS para estilização.
- Classes Tailwind são aplicadas diretamente nos elementos JSX.
- O design é responsivo e centrado, adaptando-se a diferentes tamanhos de tela.


## Considerações de Acessibilidade

- Utiliza elementos semânticos do HTML.
- Inclui textos alternativos para ícones.
- Usa contrastes de cores adequados para melhor legibilidade.


## Possíveis Melhorias Futuras

1. Implementar persistência de dados (ex: localStorage ou backend).
2. Adicionar notificações sonoras ou visuais.
3. Implementar estatísticas de uso.
4. Adicionar temas personalizáveis.


## Conclusão

Este aplicativo Pomodoro Timer oferece uma solução completa e personalizável para gerenciamento de tempo, com uma interface de usuário intuitiva e funcionalidades robustas. A estrutura modular e o uso de componentes React modernos facilitam a manutenção e expansão futura do aplicativo.
