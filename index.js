function buttonclick(){
var randomNumber1=Math.floor((Math.random()*6)+1);
//randomNumber=random
var dice1img="images/dice"+randomNumber1+".png";
var randomNumber2=Math.floor((Math.random()*6)+1);
var dice2img="images/dice"+randomNumber2+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",dice1img);
var image2=document.querySelectorAll("img")[1].setAttribute("src",dice2img);  
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
}
document.querySelector("button").addEventListener("click", buttonclick);