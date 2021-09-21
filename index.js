var randomNumber=Math.random();
var randomNumber=randomNumber*6;
var randomNumber=Math.floor(randomNumber)+1;


var randImg="images/dice"+randomNumber+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randImg);


var randomNumber2=Math.random();
var randomNumber2=randomNumber2*6;
var randomNumber2=Math.floor(randomNumber2)+1;


var randImg2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randImg2);

if(randomNumber>randomNumber2)
{
	document.querySelector("h1").innerHTML="		&#128681 player 1 won !";
}
else if(randomNumber2>randomNumber)
{
	document.querySelector("h1").innerHTML=" &#128681 player 2 won ! ";
}
else if(randomNumber===randomNumber2)
{
	document.querySelector("h1").innerHTML="match Draw !";
}