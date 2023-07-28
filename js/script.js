var convert = document.getElementById('convert');
var reset = document.getElementById('reset');
var change = document.getElementById('change');
document.getElementById("centigrade").style.display = "none";
var flag=0;

convert.onclick=tempConvert;
reset.onclick=clearForm;
change.onclick=changeTo;


function tempConvert(){
    var fahrenheit = document.getElementById('fahrenheit').value;
    var centigrade = document.getElementById('centigrade').value;

    if(fahrenheit !=''){
        centigrade = (parseFloat(fahrenheit)-32) /1.8;
        document.getElementById('result').innerHTML = parseFloat(centigrade).toFixed(1);
    
    }
    else if(centigrade !=''){
        fahrenheit=(parseFloat(centigrade)*1.8) + 32;
        document.getElementById('result').innerHTML = parseFloat(fahrenheit).toFixed(1);
    }
}
function changeTo(){
    if(flag==0){
        document.getElementById("centigrade").style.display = "inline";
        document.getElementById("fahrenheit").style.display = "none";
        document.title ='تبدیل سانتی گراد به فارنهایت';
        document.getElementById("head").innerHTML='تبدیل سانتی گراد به فارنهایت';
        document.getElementById('result').innerHTML='';
        flag++;
    }
    else if(flag==1){
        document.getElementById("centigrade").style.display = "none";
        document.getElementById("fahrenheit").style.display = "inline";
        document.title='تبدیل فارن هایت به سانتی گراد';
        document.getElementById("head").innerHTML='تبدیل فارن هایت به سانتی گراد';
        document.getElementById('result').innerHTML='';
        flag--;
    }
}
function clearForm(){
    document.getElementById('fahrenheit').value = '';
    document.getElementById('centigrade').value = '';
    document.getElementById('result').innerHTML='';
}