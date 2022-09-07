import { observer } from 'mobx-react-lite';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../styles/toolbar.scss';
import Brush from '../tools/brush';
import Circle from '../tools/circle';
import Eraser from '../tools/eraser';
import Line from '../tools/line';
import Rect from '../tools/rect';

const Toolbar = observer(() => {

  const changeColor = (e) => {
    const color = e.target.value;
    toolState.setFillColor(color);
    toolState.setStrokeColor(color);
  }

  return (
    <div className="toolbar">
      <button className='toolbar__btn brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas))}></button>
      <button className='toolbar__btn rect' onClick={() => toolState.setTool(new Rect(canvasState.canvas))}></button>
      <button className='toolbar__btn circle' onClick={() => toolState.setTool(new Circle(canvasState.canvas))}></button>
      <button className='toolbar__btn eraser' onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}></button>
      <button className='toolbar__btn line' onClick={() => toolState.setTool(new Line(canvasState.canvas))}></button>
      <input type='color' onChange={changeColor} style={{ margin: '0 5px' }} />
      <button className='toolbar__btn undo' onClick={() => canvasState.undo()}></button>
      <button className='toolbar__btn redo' onClick={() => canvasState.redo()}></button>
      <button className='toolbar__btn save'></button>
    </div>
  )
})

export default Toolbar;