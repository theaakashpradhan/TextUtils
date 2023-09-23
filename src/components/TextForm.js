import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Uppercase Button was clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase Button was clicked" , "success");
    }
    const handleLoClick = ()=> {
      console.log("Lowercase Button was clicked." + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("LowerCase Button was clicked" , "success");
    }
    const handleExSpc = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space was removed" , "success");
    }
    const handleCopy = ()=> {
      // var text = document.getElementById("myBox");
      // text.select();
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("Text copied to clipboard" , "success");
    }
    const handleClClick = ()=> {
      console.log("Clear Button was clicked." + text);
      let newText = (' ');
      setText(newText);
      props.showAlert("Text area cleared" , "success");
    }
    const handleOnChange = (event)=> {
        console.log("OnChange.");
        setText(event.target.value);
    }
    
    const [text,setText] = useState(" ");
    // const getWordCount = () => {
    //     // Split the text by whitespace and filter out empty strings
    //     const words = text.trim().split(/\s+/).filter(Boolean);
    //     return words.length;
    // }; 
    
  return (
    <>  <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="5"></textarea>
        </div>  
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>   
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button> 
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExSpc}>Remove Extra Space</button>   
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>   
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear text</button>   
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary:</h2>
      <p>Your input has : {text.split(/\s+/).filter((elements)=>{return elements.length!==0}).length}  words and {text.length} characters.<br></br>
         And it take {0.008*text.split(" ").filter((elements)=>{return elements.length!==0}).length} minutes to read the input words.
      </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!!!"}</p>
    </div>
        
    </> 
    
  )
}
