let A = Number(prompt("Ingrese el valor de la variable A\n 0 = false\n 1 = true"));
let B = Number(prompt("Ingrese el valor de la variable B\n 0 = false\n 1 = true"));

document.querySelector("#operadorAND").insertAdjacentHTML("beforeend", `
    <tr class="resultado">
        <td>${A}</td>
        <td>${B}</td>
        <td>${A && B}</td>
    </tr>
`);
