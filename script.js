var num1 = Math.floor(Math.random()*6)+1;
var num2 = Math.floor(Math.random()*6)+1;

player1 = document.querySelector("#player1");
player2 = document.querySelector("#player2");
result = document.querySelector("#result");

pl1 = document.querySelector("#pl1");
pl2 = document.querySelector("#pl2");
var path1="images/dice"+num1+".png";

var path2="images/dice"+num2+".png";
// 3CCF4E--green color D61C4E--red
if(num1===num2)
{
    result.innerHTML = "It's A Draw"
}
else if(num1 < num2)
{
    result.innerHTML = "Player 2 Wins <span>&#127881;</span>"
    pl2.style.color="#3CCF4E";
    pl1.style.color="#D61C4E";
}
else if(num1 > num2)
{
    result.innerHTML = "<span>&#127881;</span>  Player 1 Wins";
    pl1.style.color="#3CCF4E";
    pl2.style.color="#D61C4E";
}
player1.setAttribute('src',path1);
player2.setAttribute('src',path2);

