// import React, {useState} from 'react'

export default function About(props) {

    // const [mystyle,setMyStyle]=useState(
    //     {
    //         color: 'black',
    //         backgroundColor: 'white'
    //     }
    // )

    // const [btntext,setBtntext]=useState("Dark Mode");

    // const toggleStyle=()=>{
    //     if(mystyle.color==='black'){
    //         setMyStyle(
    //             {
    //                 color: 'white',
    //                 backgroundColor: 'black'
    //             }
    //         )
    //         setBtntext("Light Mode");
    //     }
    //     else{
    //         setMyStyle(
    //             {
    //                 color: 'black',
    //                 backgroundColor: 'white'
    //             }
    //         )
    //         setBtntext("Dark Mode");
    //     }
    // }
    
  return (
    <>
    <div className='container' style={{ color: props.mode==='light'?'black':'white'}}>
        <h1 className='my-4'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black',}}>
    <h2 className="accordion-header">
      <button style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black',}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutils gives you a way to analyze your text quickly & efficiently.<br></br>Be it word count, character count or clear text.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black',}}>
    <h2 className="accordion-header">
      <button style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black',}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutils is a free character counter tool that provides instant character count & word count also converts your text to klowercase or uppercase as you want
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black',}}>
    <h2 className="accordion-header">
      <button style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black',}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software works in any type of web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera<br></br>It suits to count characters in facebook, blog, books, excel documents, pdf documents, essays, etc.
      </div>
    </div>
  </div>
</div>
{/* <div className="container" my-4>
        <button type="button" class="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
    </div> */}
    </div>
    </>
  )
}