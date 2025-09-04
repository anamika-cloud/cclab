<!DOCTYPE>
<html>
<head>
<title>factorial</title>
</head>
<body><h2>Factorial Calculator
</h2>
<input type="number" id="num" placeholder="Enter the number">
<button onclick=factcal()>Calculate</button>
<p id="result"> </p>
<script>
function fact(n)
{
if(n===0||n===1) return 1;
let result=n*fact(n);
return result;
}
function factcal()
{
const input=document.getElementById(num).value;
const nu=parseInt(input);
if(isNaN(nu)||nu<0)
{
document.getElementById("result").innerText="Please enter non negative number";
return result;
}
fact(nu);
document.getElementById("result").innerText=" The factorial of ${nu} is ${result}";
}
</script>
</body>
</html>
