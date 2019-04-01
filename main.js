var time = document.querySelector("#time");

setInterval(function(){
  time.innerHTML = moment().format("hh:mm:ss a");
});