var MyArray = [];
var numOfCircles = 8;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	
  for (var i = 0; i < numOfCircles; i++){
		MyArray[i] = new  RotantingObject(400,400,30+i*30);
		MyArray[i].Step = (i+3)/3
	}
}
 
function draw() {
	background(100,0,100,58);
	
	 for (var i = 0; i < numOfCircles; i++){
	  MyArray[i].UpdateAngle();
	  MyArray[i].Move();
	  MyArray[i].Display();
	 }
	
}

function RotantingObject(CentX,CentY,Diam) {
	this.CentX = CentX;
	this.CentY = CentY;
	this.Ang  = 0;
	this.Diam = Diam;
	this.size = 20;
	this.X = 0;
	this.Y = 0;
	this.Step = 3;
	this.Col = color(0,255,255);
	
	this.UpdateAngle = function() {    //start the method
		this.Ang = (this.Ang + this.Step)%360; 
	}
	
	this.Move = function() {
		angleMode(DEGREES);
		this.X = this.CentX + this.Diam*cos(this.Ang);
		this.Y = this.CentY + this.Diam*sin(this.Ang);
	}
	
	this.Display = function() {
		noStroke();
		fill(this.Col);
		ellipse(this.X,this.Y,this.size,this.size)
	}

}   //Close object
