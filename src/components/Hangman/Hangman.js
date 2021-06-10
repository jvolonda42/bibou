import React, { useRef, useEffect, useState } from 'react'

const Canvas = props => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (props.step === 0) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    switch (props.step % 9) {
      case 1:
        context.strokeStyle = '#444';
        context.lineWidth = 10;
        context.beginPath();
        context.moveTo(175, 225);
        context.lineTo(5, 225);
        context.moveTo(40, 225);
        context.lineTo(25, 5);
        context.lineTo(100, 5);
        context.lineTo(100, 25);
        context.stroke();
        break;

      case 2:
        context.lineWidth = 5;
        context.beginPath();
        context.arc(100, 50, 25, 0, Math.PI * 2, true);
        context.closePath();
        context.stroke();
        break;

      case 3:
        context.beginPath();
        context.moveTo(100, 75);
        context.lineTo(100, 140);
        context.stroke();
        break;

      case 4:
        context.beginPath();
        context.moveTo(100, 85);
        context.lineTo(60, 100);
        context.stroke();
        break;

      case 5:
        context.beginPath();
        context.moveTo(100, 85);
        context.lineTo(140, 100);
        context.stroke();
        break;

      case 6:
        context.beginPath();
        context.moveTo(100, 140);
        context.lineTo(80, 190);
        context.stroke();
        break;

      case 7:
        context.beginPath();
        context.moveTo(82, 190);
        context.lineTo(70, 185);
        context.stroke();
        break;

      case 8:
        context.beginPath();
        context.moveTo(100, 140);
        context.lineTo(125, 190);
        context.stroke();
        break;

      case 0:
        context.beginPath();
        context.moveTo(122, 190);
        context.lineTo(135, 185);
        context.stroke();
        break;

      default:
        break;
    }
    // }, 500)
  }, [props.step])

  useEffect(() => {
    if (props.reset === true) {

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, [props.reset])

  return <canvas height={250} width={250} ref={canvasRef} />
};

export default Canvas;
