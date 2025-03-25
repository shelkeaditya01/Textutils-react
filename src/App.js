import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  };

  return (
    <>
      <Router>
      <Navbar title="Textutils" abouttext="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert} /> */}
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<TextForm heading="Textutils- Word Counter, Character Counter" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;