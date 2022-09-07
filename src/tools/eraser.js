import Brush from "./brush";

class Eraser extends Brush {
  draw(x, y) {
    this.ctx.lineWidth = 10;
    this.ctx.fillStyle = "white";
    this.ctx.strokeStyle = "white";
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}

export default Eraser;
