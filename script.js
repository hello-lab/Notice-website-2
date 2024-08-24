setInterval(() => {
    document.getElementById('clock').innerHTML = Date().split(' ')[4];
}, 1000);

function hey() {
    document.getElementById('date').innerHTML = Date().split(' ')[2] + ' ' + Date().split(' ')[1] + ' ' + Date().split(' ')[3];
}
