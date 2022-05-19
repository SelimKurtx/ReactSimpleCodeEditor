import { useState } from 'react'
import './App.css'
import EditorsPane from './components/EditorsPane/EditorsPane'
import PreviewPane from './components/PreviewPane/PreviewPane'

const App = () => {
  
  const [htmlCode,setHtmlCode] = useState<string>("");
  const [cssCode,setcssCode] = useState<string>("")
  const [jsCode,setjsCode] = useState<string>("")

  return (
    <div className="app container-fluid">
      <div className='row'>
        <EditorsPane 
          htmlCode={htmlCode}
          cssCode={cssCode}
          jsCode={jsCode}
          setHtmlCode={setHtmlCode}
          setcssCode={setcssCode}
          setjsCode={setjsCode}
        />
        <PreviewPane />
      </div>
    </div>
  )
}

export default App
