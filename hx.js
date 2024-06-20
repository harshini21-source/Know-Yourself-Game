const s=document.getElementById("display");
let p=["cutie","babyy","sweety","lovely","chinnu","chintu","pandu","chitti","puchuk","cherry"]
let c=["kindness", "cruelty","violence","cuteness","beauty","me","my heart","sweetness"]
function rolldice(){
    var k =Math.floor(Math.random()*10);
    s.value= "Your lucky number is "+k;

}
function nickname(){
    s.value = "You got a nickname : " + p[Math.floor(Math.random()*p.length)];
}
function possess(){
    s.value="You possess "+c[Math.floor(Math.random()*c.length)];
}
function quit(){
    s.value="your game is ended";
}