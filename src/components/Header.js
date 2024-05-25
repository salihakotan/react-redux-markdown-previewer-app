import React from "react";

function Header() {


const handleClick = () => {
    //set value to sample texts
}

  return (
    <div>
      <div className="previewBtnContainer">
        <button onClick={()=> handleClick()} className="samplePreviewBtn">?</button>
      </div>
      <h1>Markdown Previewer</h1>
    </div>
  );
}

export default Header;
