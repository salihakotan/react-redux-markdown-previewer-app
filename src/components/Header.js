import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isShowingHelpSelector, showHelp } from "../redux/markdownSlice";

function Header() {
  const dispatch = useDispatch();

  const isShowingHelp = useSelector(isShowingHelpSelector)

  const handleClick = () => {
    dispatch(showHelp(!isShowingHelp));
  };

  return (
    <div>
      <div className="previewBtnContainer">
        <button style={{backgroundColor: isShowingHelp ? "#000" : "#034444"}}  onClick={() => handleClick()} className="samplePreviewBtn">
          ?
        </button>
      </div>
      <h1 className="title">Markdown Previewer</h1>
    </div>
  );
}

export default Header;
