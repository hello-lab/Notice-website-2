setInterval(() => {
    document.getElementById('clock').innerHTML ='<img  class="pin"  src="assets/pin.png">' +Date().split(' ')[4]+'<img  class="pin"  src="assets/pin.png">';
}, 1000);

function hey() {
    el=document.documentElement
    el.requestFullscreen.call(el)
    const month = {
        Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12
      };

    k=Date().split(' ')[1]
    d=month[k]
    if (d<10)
        d="0"+d

    document.getElementById('date').innerHTML ='<img  class="pin"  src="assets/pin.png">' + Date().split(' ')[2] + '/' + d + '/' + Date().split(' ')[3].substring(2)+'<img  class="pin" src="assets/pin.png">' ;
}
function badtouch(){
    el=document.documentElement
    if (!document.webkitIsFullScreen){
    el.requestFullscreen.call(el)}
    else{
        document.exitFullscreen()
    }
}