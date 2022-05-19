import {FunctionComponent as FC} from 'react'
import IPreviewPane from './IPreviewPane'
import "./PreviewPane.css"

const PreviewPane : FC<IPreviewPane> = ({} : IPreviewPane) => {
  return (
    <div className='PreviewPane col-md-8'>PreviewPane</div>
  )
}

export default PreviewPane