import { useState } from "react"
import Navbar from "./componenets/Navbar"
import NewsBody from "./componenets/NewsBody"
import LoadingBar from "react-top-loading-bar"


const pageSize=15
const App = () => {
  const [category, setCategory] = useState("general")
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <LoadingBar
        color='#95caf9'
        height={3}
        progress={progress}

      />
      <NewsBody category={category} pagesize={pageSize} setprogress={setProgress} />
    </div>
  )
}

export default App


