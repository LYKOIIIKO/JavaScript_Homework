import Tool from "./Tool";

export default class Line extends Tool {
	mouseDown = false;
	startX = null;
	startY = null;
	endX = null;
	endY = null;

	constructor(canvas) {
		super(canvas);
		this.listen();
	}

	listen() {
		this.canvas.onmousedown = this.mouseDownHandler.bind(this);
		this.canvas.onmouseup = this.mouseUpHandler.bind(this);
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
	}

	mouseUpHandler(e) {
		this.mouseDown = false;
	}

	mouseDownHandler(e) {
		this.mouseDown = true;
		this.startX = e.pageX - e.target.offsetLeft;
		this.startY = e.pageY - e.target.offsetTop;
		this.saved = this.canvas.toDataURL();
	}

	mouseMoveHandler(e) {
		if (this.mouseDown) {
			this.endX = e.pageX - e.target.offsetLeft;
			this.endY = e.pageY - e.target.offsetTop;

			this.draw(this.startX, this.startY, this.endX, this.endY);
		}
	}

	draw(sx, sy, ex, ey) {
		const img = new Image();
		img.src = this.saved;
		img.onload = () => {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.drawImage(
				img,
				0,
				0,
				this.canvas.width,
				this.canvas.height
			);
			this.ctx.beginPath();
			this.ctx.moveTo(sx, sy);
			this.ctx.lineTo(ex, ey);
			this.ctx.stroke();
		};
	}
}
