
import { useEffect } from 'react'



function App() {

  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then((res) => res.json())
      .then(data => console.log(data))

  }, [])
  return (
    <>
    </>
  )
}

export default App
