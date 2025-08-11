function calcularSoma() {
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
    const soma = numero1 + numero2;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = `A soma é: ${soma}`;
}

document.getElementById("botao-somar").addEventListener("click", calcularSoma);