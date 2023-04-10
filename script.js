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

const Liter = document.querySelector("#lit"),
Milliliter = document.querySelector("#min");

window.addEventListener("load",() => centimeter.focus());

Liter.addEventListener("input", ()=>{
    Milliliter.value = (Liter.value * 1000).toFixed(2);
    if(!Liter.value) Milliliter.value = "";
});

Milliliter.addEventListener("input", ()=>{
    Liter.value = (Milliliter.value * 0.001).toFixed(2);
    if(!Milliliter.value) Liter.value = "";
});