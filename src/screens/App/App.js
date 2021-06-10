import React, { useEffect, useState, useRef } from 'react';
import FailedCount from '../../components/FailedCount';
import Input from '../../components/Input';
import Hint from '../../components/Hint';
import Hangman from '../../components/Hangman';
import HintModal from '../../components/HintModal';
import canvaConfetti from 'canvas-confetti';
import './App.css';

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function App() {
  const [failCount, setFailCount] = useState(parseInt(localStorage.getItem('failCount') || 0));
  const [resetCanvas, setResetCanvas] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const canvasRef = useRef(null);

  const victory = () => {
    const canvas = canvasRef.current;
    var confetti = canvaConfetti.create(canvas, {
      resize: true,
      useWorker: true
    });

    var colors = ['#ebdb34', '#eb9c34'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < Date.now() + (15 * 1000)) {
        requestAnimationFrame(frame);
      }
    }());
  }

  const hints = [
    { hint: '407 filles portant ce prénom sont nées en 2019', breakpoint: 9 },
    { hint: 'La 3è lettre est un E', breakpoint: 27 },
    { hint: 'Ce prénom est célébré le 13 juillet dans la culture chrétienne', breakpoint: 18 },
    { hint: 'La 1è lettre est un C', breakpoint: 36 },
    { hint: 'La 2è lettre est un L', breakpoint: 45 },
    { hint: 'La 4è lettre est un A', breakpoint: 54 },
  ];

  const incrementFailCount = () => {
    // console.log({ failCount, t: failCount % 8 })
    if (failCount !== 0 && (failCount + 1) % 9 === 0) {
      setShowModal(true);
    } else {
      setFailCount(failCount + 1);
      localStorage.setItem('failCount', failCount + 1);
    }
  }

  const popupHelpYes = () => {
    setResetCanvas(true); // @TODO MODAL
    setTimeout(() => setResetCanvas(false), 50);
    setShowModal(false);
    setFailCount(failCount + 1);
    localStorage.setItem('failCount', failCount + 1);
  }

  const popupHelpNo = () => {
    setResetCanvas(true); // @TODO MODAL
    setTimeout(() => setResetCanvas(false), 50);
    setShowModal(false);
    setFailCount(failCount - 8);
    localStorage.setItem('failCount', failCount - 8);
  }

  return (
    <div className="App">
      {/* <FailedCount failCount={failCount} /> */}
      <div style={{ flex:1, minHeight: '100px', fontSize: '22px', padding: '10px 0px 10px 0' }}>
        <Hint hints={hints.filter(h => h.breakpoint <= failCount)} />
      </div>
      <div style={{ flex:1, padding: '0px 0px 30px 0' }}>
        <Input onFail={incrementFailCount} onSuccess={victory} />
      </div>
      <div style={{ flex:1, padding: '10px 0px 10px 0' }}>
        <Hangman step={failCount} reset={resetCanvas} />
      </div>
      <canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} height={window.innerHeight} width={window.innerWidth} ref={canvasRef} />
      {/* <button type="button" onClick={() => {
        setResetCanvas(true); // @TODO MODAL
        setTimeout(() => setResetCanvas(false), 50);
      }}>ACCEPTE HELP</button> */}
      <HintModal popupHelpNo={popupHelpNo} popupHelpYes={popupHelpYes} showModal={showModal} />
      {/* <button type="button" onClick={() => { setFailCount(0); localStorage.setItem('failCount', 0); }} > RESET</button> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
