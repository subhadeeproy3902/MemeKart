import "./index.css"
import Button from './Components/Button'
import Meme from './Components/Meme'

function App() {
  return (
    <>
      <div className='p-12 flex flex-col gap-4 items-center justify-center sm:pt-4 sm:px-4'>
        <Meme/>
      </div>

    </>
  )
}

export default App
