import React from 'react'
import Form from './Components/Form'

const App = () => {
  return (
    <div className="flex w-full h-screen">

      <div className="w-full lg:w-1/2 flex items-center justify-center ">
      <Form />
      </div>

      <div className="hidden relative lg:flex h-full bg-gray-200 w-1/2 items-center justify-center ">
         <div className="w-60 h-60 bg-gradient-to-tr from-blue-500 to-green-500  animate-spin rounded-full "></div>
         <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg "></div>
      </div>

    </div>
  )
}

export default App
