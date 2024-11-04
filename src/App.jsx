import { useSelector } from 'react-redux'

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  const {counter} = useSelector(state => state.counter)

  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        {/* onClick={() => setCount((counter) => counter + 1)} */}
        <button > 
          counter is {counter}
        </button>

      </div>
    </>
  )
}

export default App
