setInterval(() => {
    document.getElementById('clock').innerHTML ='<img style=" width:5vh;" src="assets/pin.png">' +Date().split(' ')[4]+'<img style=" width:5vh;" src="assets/pin.png">';
}, 1000);

function hey() {
    document.getElementById('date').innerHTML ='<img style=" width:5vh;" src="assets/pin.png">' + Date().split(' ')[2] + ' ' + Date().split(' ')[1] + ' ' + Date().split(' ')[3]+'<img style=" width:5vh; "src="assets/pin.png">' ;
}
