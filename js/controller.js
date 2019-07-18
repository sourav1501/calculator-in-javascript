document.getElementById('addition').addEventListener('click',(e)=>{
    add();
    e.preventDefault();
})
document.getElementById('subtraction').addEventListener('click',(e)=>{
    sub();
    e.preventDefault();
})
function add(){
    var a = parseInt(document.getElementById('first').value);
    var b = parseInt(document.getElementById('second').value);
    document.getElementById('result').style.display ="block";
    document.getElementById('result').innerHTML = a+b;
}
function sub(){
    var a = parseInt(document.getElementById('first').value);
    var b = parseInt(document.getElementById('second').value);
    document.getElementById('result').style.display ="block";
    document.getElementById('result').innerHTML = a-b;
}