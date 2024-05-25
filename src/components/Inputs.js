import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentTextSelector, helpTextSelector, isShowingHelpSelector, setCurrentText } from '../redux/markdownSlice'
import { marked } from 'marked'


function Inputs() {

    const isShowingHelp = useSelector(isShowingHelpSelector)
    const currentText = useSelector(currentTextSelector)
    const helpText = useSelector(helpTextSelector)


    const dispatch = useDispatch()
    
    const parsedText = marked(!isShowingHelp ? currentText : helpText, { sanitize: true});
    const processedText = {__html:parsedText}

    


  return (
    <div style={{display:"flex"}}>
        <textarea placeholder='enter text' readOnly={isShowingHelp} value={isShowingHelp ? helpText : currentText} onChange={(e)=> dispatch(setCurrentText(e.target.value))} className='textAreaMarkdown entryTextArea'></textarea>
        <div dangerouslySetInnerHTML={processedText}  className='textAreaMarkdown previewTextArea'></div>

    </div>
  )
}

export default Inputs