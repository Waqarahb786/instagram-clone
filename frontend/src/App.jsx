

import Signup from './components/Signup'
import { createBrowserRouter } from 'react-router-dom'


const browserRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      path:'/',
      
    ]
  }
])

function App() {

  

  return (
    <>
      
      <Signup/>
    </>
  )
}

export default App
