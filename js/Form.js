class Form {
  constructor() {
    this.input=createInput("empty");
    this.playbutton=createButton("start");
    this.titleImage=createImg("assets/title.png");
    this.greeting=createElement("h3");
  }
setElementPosition(){
  this.titleImage.position(120,100);
  this.input.position(width/2-100,hieght/2-80);
  this.playbutton.position(width/2-100,hieght/2-20);
  this.greeting.position(width/2-100,hieght/2-100);
}
hide(){
this.input.hide()
this.playbutton.hide()
}
handleMousePressed(){
this.playbutton.mousePressed(()=>{
  this.input.hide()
  this.playbutton.hide()
  var message = `HEY ${this.input.value()} wait for your opponent`
  this.greeting.html(message)
})
}
display(){
this.setElementPosition()
this. handleMousePressed()
}}
