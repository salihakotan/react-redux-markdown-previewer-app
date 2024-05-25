import React, { useState } from 'react'

function Inputs() {

    const [entryText,setEntryText] = useState("")

    


  return (
    <div>
        <textarea value={entryText} onChange={(e)=> setEntryText(e.target.value)} className='textAreaMarkdown entryTextArea'></textarea>
        <textarea value={entryText} disabled className='textAreaMarkdown previewTextArea'></textarea>

    </div>
  )
}

export default Inputs