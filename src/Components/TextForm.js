import React, {useState} from 'react'

export default function TextForm(props) {

    const handleupclick=()=>{
        // console.log("Button clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text has converted to uppercase!","success");
    }

    const handlelowclick=()=>{
        // console.log("Button clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text has converted to lowercase!","success");
    }

    const handlecopy=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied to clipboard!","success");
    }

    const handleextraspaces=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("Extra spaces are removed!","success");
    }

    const cleartext=()=>{
        // console.log("Button clicked"+text);
        let newText="";
        setText(newText);
        props.showAlert("Your text has been clear!","success");
    }

    const handleonchange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    // const[btntext,setBtntext]=useState("Dark Mode");

    // const[theme,setTheme]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    // const changesmode=()=>{
    //     if(theme.color==='black'){
    //         setTheme({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtntext("Light Mode");
    //     }
    //     else{
    //         setTheme({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }
    // }

    
    const [text, setText]=useState("");
  return (
    <>
    <div className="container" style={{ color: props.mode==='light'?'black':'white'}}>
  <h2>{props.heading}</h2>
  <div className="mb-3">
    <textarea
      className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"
      style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black',}}></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleupclick}>
    Convert to uppercase
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlelowclick}>
    Convert to lowercase
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlecopy}>
    Copy Text
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleextraspaces}>
    Remove The Extra Spaces
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={cleartext}>
    Clear Text
  </button>
</div>

<div className="container my-4" style={{ color: props.mode==='light'?'black':'white'}}>
  <h2>Text summary</h2>
  <p>Your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
  <p>{(0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length).toFixed(2)} minutes required to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to preview this moment!"}</p>
</div>
    </>
  )
}