
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React Context API ~ State Manegment</h1>
    </UserContextProvider>
  )
}

export default App
