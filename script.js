const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");

window.addEventListener("load",() => centimeter.focus());

centimeter.addEventListener("input", ()=>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value = "";
});

inch.addEventListener("input", ()=>{
    centimeter.value = (inch.value * 10).toFixed(4);
    if(!inch.value) centimeter.value = "";
});

Meter.addEventListener("input", ()=>{
    Meter.value = (inch.value * 10).toFixed(4);
    if(!Meter.value) centimeter.value = "";
});

inch2.addEventListener("input", ()=>{
    inch2.value = (inch2.value * 10).toFixed(4);
    if(!inch2.value) centimeter.value = "";
});