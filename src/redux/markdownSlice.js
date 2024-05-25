import { createSlice } from "@reduxjs/toolkit";


const helpText = `
# Heading 1
## Heading 2
### Heading 3

This is a **bold** text example.

This is an *italic* text example.

- List item 1
- List item 2
- List item 3

[This is a link](https://www.example.com)

\`This is an inline code block\`

\`\`\`
This is a
block code example
\`\`\`
        `;

export const markdownSlice = createSlice({
    name:"markdown",
    initialState: {
        currentText:"",
        helpText,
        isShowingHelp:false,
    },
    reducers:{
        showHelp: (state,action) => {
           state.isShowingHelp = action.payload
        },
        setCurrentText: (state,action) => {
            state.currentText = action.payload
        }
    }
})

export const isShowingHelpSelector = (state) => state.markdown.isShowingHelp
export const currentTextSelector = (state) => state.markdown.currentText
export const helpTextSelector = (state) => state.markdown.helpText




export const {showHelp,setCurrentText} = markdownSlice.actions

export default markdownSlice.reducer