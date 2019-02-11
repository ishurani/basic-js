function my_code(){
  alert("welcome to spy test")
var count=0
var first=prompt("Please enter your first name")

var last=prompt("Please enter your last name")
if(first[0]==last[0])
count++;
var age=prompt("please enter your age")
if(age>20&&age<30)
count++;

var height=prompt("please enter your height")
if(height>170)
count++;
var nick=prompt("enter your nick name")
if(nick[nick.length-1]=="y")
count++;
alert("Thankyou so much for your information!")

if(count==4)
console.log("congratulations! you passed the spy test");
else {
  console.log("sorry! nothing for you");
}
var first=0
var last=0
var age=0
var height=0
var nick=0
}
