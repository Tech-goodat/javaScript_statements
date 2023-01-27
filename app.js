/*conditional statements.
they are four.if, else if, else and switch.
if specifies the code block to be executed if the condition is true.
else if specifies the condition to be executed if the first condition is false.
else specifies the codeblock to be executed if both the first and the second condition is false.
*/
var time=30;

if (time==20){
    document.getElementById(demo).innerHTML = "hello";
}
else if(time< 20){
    document.getElementById(demo).innerHTML = "next time";
}
else{
    document.getElementById(demo).innerHTML = "Vwalla..not true!";
}