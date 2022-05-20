let A = (prompt("Ingrese el valor de la variable A\n false\n true") == "true") ? true : false;
let B = (prompt("Ingrese el valor de la variable B\n false\n true") == "true") ? true : false;


document.querySelector("#operadorAND").insertAdjacentHTML("beforeend", `
    <tr class="resultado">
        <td>${A}</td>
        <td>${B}</td>
        <td>${A && B}</td>
    </tr>
`);
