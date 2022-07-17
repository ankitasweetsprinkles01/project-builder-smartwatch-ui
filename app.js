function DateTime(){
    var Today=new Date();
    var Time=Today.getHours() + ":" + Today.getMinutes();
    document.getElementById("time1").innerHTML = Time;
    document.getElementById("time2").innerHTML = Time;

    var Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var WeekDay = Days[Today.getDay()];
    document.getElementById("Days1").innerHTML = WeekDay;
}
DateTime();