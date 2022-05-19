import {FunctionComponent as FC} from 'react'
import IEditorsPanel from './IEditorsPane'
import "./EditorsPane.css"
import Editor from './Editor/Editor'

const EditorsPane : FC <IEditorsPanel> = ({
    htmlCode,
    cssCode,
    jsCode,
    setHtmlCode,
    setcssCode,
    setjsCode
}) => {
  return (    
    <div className='EditorsPane col-md-4 position-relative bg-dark px-0'>
      <Editor lang="HTML" code={htmlCode} setCode={setHtmlCode} />
      <Editor lang="CSS" code={cssCode} setCode={setcssCode} />
      <Editor lang="Javascript" code={jsCode} setCode={setjsCode} />
    </div>
  )
}

export default EditorsPane