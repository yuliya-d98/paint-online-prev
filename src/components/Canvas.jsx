import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../styles/canvas.scss';
import Brush from '../tools/brush';

const Canvas = observer(() => {
  const canvasRef = useRef()

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, [])

  return (
    <div className="canvas">
      <canvas width={600} height={400} ref={canvasRef} />
    </div>
  )
})

export default Canvas;