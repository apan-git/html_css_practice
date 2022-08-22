

function time_number(num){
  var base_string = `<ul>`;
  for (i = 0; i < num; i++) {
    var a;
    if (String(i).length < 2) {
      a = `0${i}`;
    } else {
      a = `${i}`;
    }
    base_string += `<li><span>${a}</span></li>`;
  }
  base_string += "</ul>";
  return base_string
}
var hours_laber = document.querySelector(".hours");
hours_laber.innerHTML = time_number(24);
var minutes_laber = document.querySelector(".minutes");
minutes_laber.innerHTML = time_number(60);
var seconds_laber = document.querySelector(".seconds");
seconds_laber.innerHTML = time_number(60);

function dateBase(obj, now){
    var num;
    var numDegress;
    if (obj.className.slice(8) == "hours") {
      num = now.getHours();
      numDegress = num * 100 - 100;
    } else {
      if (obj.className.slice(8) == "seconds") {
        num = now.getSeconds();
      } else {
        num = now.getMinutes();
      }
      numDegress = (num / 60) * 6000;
    }
    return (obj.style.transform = `translateY(-${numDegress}px)`);
}

function setDate(){
    const now = new Date()
    hours = dateBase(hours_laber, now);
    minutes = dateBase(minutes_laber, now);
    seconds = dateBase(seconds_laber,  now);
}

setInterval(setDate, 1000);