window.onload = function () {
    getTime();
}

function getTime() {
    var today = new Date();
    var s = today.getSeconds();
  
    document.getElementById('time').innerHTML = s;
    setTimeout(function(){getTime()},1000);

}


//for(let time = 0; time<=90; time++){
//    
//     setTimeout(function(){document.getElementById('time').innerHTML= i},1000)
//}


