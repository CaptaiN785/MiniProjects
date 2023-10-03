const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.getElementById("ampm");

const addPadding = (num) => {
    if(num <= 9){
        return "0" + num;
    }
    return num;
}

setInterval(() => {
    const date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sec = date.getSeconds();

    const ap = (hr >= 12) ? 'PM' : 'AM';
    hr %= 12;
    hr = hr ? hr : 12;

    hour.innerHTML = addPadding(hr);
    minute.innerHTML = addPadding(mn);
    second.innerHTML = addPadding(sec);
    ampm.innerHTML = ap;
}, 1000);