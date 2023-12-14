let get_tal1 = document.querySelector("#tal1");
let get_tal2 = document.querySelector("#tal2");
let svar =  document.querySelector("#svar");

function plus(){
    console.log("plus");
    const tal1 = parseInt(get_tal1.value);
    const tal2 = parseInt(get_tal2.value);
    svar.value=tal1+tal2;
}
function minus(){
    const tal1 = parseInt(get_tal1.value);
    const tal2 = parseInt(get_tal2.value);
    svar.value=tal1-tal2;
}
function multiplikation(){
    const tal1 = parseInt(get_tal1.value);
    const tal2 = parseInt(get_tal2.value);
    svar.value=tal1*tal2;
}
function division(){
    const tal1 = parseInt(get_tal1.value);
    const tal2 = parseInt(get_tal2.value);
    svar.value=tal1/tal2;
}