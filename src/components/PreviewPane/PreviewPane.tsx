import {FunctionComponent as FC} from 'react'
import IPreviewPane from './IPreviewPane'
import "./PreviewPane.css"

const PreviewPane : FC<IPreviewPane> = ({htmlCode,cssCode,jsCode}) => {
  return (
    <div className='PreviewPane col-md-8'>PreviewPane 
      <p>{htmlCode}</p> <p>{cssCode}</p> <p>{jsCode}</p> {" "}
    </div>
  )
}

export default PreviewPane