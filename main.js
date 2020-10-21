
var time =1;
function myFunc() {
  
  
const audio = new Audio('Journey 01.mp3');
  if (time==1) {
  audio.play();
  time=0;
  }
  
  
  document.getElementById("tobehidden").style.display='none';
  document.getElementById('tobeshown').style.display='block';
  document.getElementById('show').style.display='block';
}
