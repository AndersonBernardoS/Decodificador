// Função para codificar a mensagem
function codificar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Função para descodificar a mensagem
function descodificar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Função que oculta a mensagem inicial e exibe o resultado
function imagemInicial(acao) {
    const textoEntrada = document.getElementById("texto__entrada").value; // Obtém o texto inserido pelo usuário
    let resultado;

    if (acao === 'codificar') {
        resultado = codificar(textoEntrada); // Codifica o texto
    } else if (acao === 'descodificar') {
        resultado = descodificar(textoEntrada); // Descodifica o texto
    }

    document.getElementById("mensagem_inicial").style.display = "none"; // Esconde a mensagem inicial
    document.getElementById("resultado").style.display = "block"; // Mostra o resultado
    document.querySelector("#resultado p").innerHTML = `<b>Texto:</b> ${resultado}`; // Insere o texto codificado/descodificado na tag <p>
}

//Função de Copiar o texto resultante
function copiarTexto() {
    const textoResultado = document.querySelector('.resultado__texto');

    const textarea = document.createElement('textarea');
    textarea.value = textoResultado.textContent;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    alert('Texto copiado para a área de transferência!');
}
