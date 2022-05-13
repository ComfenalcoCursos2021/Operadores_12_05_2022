let x = 10;
let y = 3;
let res = 0;

let sel = document.querySelectorAll("em");
sel[0].insertAdjacentText("beforeend", x);
sel[1].insertAdjacentText("beforeend", y);
sel[2].insertAdjacentText("beforeend", res);

// Significado
res = x + y;
document.body.insertAdjacentHTML("beforeend", `
    <div>
        <b>Significado</b>
    </div>
    <hr>
    <div>
        <em>res = x + y;</em>
        <br>
        <mark>res</mark> : <em>${res}</em>
    </div>
`);

// Abreviado
x += y;
document.body.insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <b>Abreviado</b>
    </div>
    <hr>
    <div>
        <em>x += y;</em>
        <br>
        <mark>x</mark> : <em>${x}</em>
    </div>
`);
