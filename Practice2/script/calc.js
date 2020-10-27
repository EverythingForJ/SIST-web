window.onload = function(){
    document.querySelector('#btnInput').addEventListener('click', myinput, false);
}
function myinput(){
    var r = document.myresult;
    var m = document.mymain;
    document.querySelector('#username').innerHTML = m.myname.value;
    
    printmytoday();

    var count = 0;
    if( m.mone.value != 11){
        count ++;
        document.getElementById('idone').style.backgroundColor='red';
        document.getElementById('idone').style.color='white';
    }
    if(m.mtwo.value !=5){
        count ++;
        document.getElementById('idtwo').style.backgroundColor='red';
        document.getElementById('idtwo').style.color='white';
    }
    if(m.mthree.value !=42){
        count ++;
        document.getElementById('idthree').style.backgroundColor='red';
        document.getElementById('idthree').style.color='white';
    }
    if(m.mfour.value !=5){
        count ++;
        document.getElementById('idfour').style.backgroundColor='red';
        document.getElementById('idfour').style.color='white';
    }
    if(m.mfive.value !=11){
        count ++;
        document.getElementById('idfive').style.backgroundColor='red';
        document.getElementById('idfive').style.color='white';
    }
    document.querySelector('#fail').innerHTML = count;

    var total = 100 - count * 20;
    document.querySelector('#finalscore').innerHTML = total + '점';

    document.getElementById('resultmy').style.visibility = "visible";
}

function printmytoday(){
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();
    var now = year + ". " + month + ". " + day + ". ";
    document.querySelector('#mytoday').innerHTML = now;
}