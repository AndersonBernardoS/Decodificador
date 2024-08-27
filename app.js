// Função para validar o texto inserido
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; // Permite apenas letras minúsculas e espaços
    return regex.test(texto); // Retorna true se o texto estiver válido
}

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
    const textoEntrada = document.getElementById("texto__entrada").value.trim(); // Obtém o texto inserido pelo usuário e remove espaços em branco

    // Verificar se o texto é inválido
    if (!validarTexto(textoEntrada)) { 
        alert("Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.");
        return;
    }
    
    if (textoEntrada === "") {
        // Se o campo de texto estiver vazio, exibe a mensagem inicial e esconde o resultado
        document.getElementById("mensagem_inicial").style.display = "block";
        document.getElementById("resultado").style.display = "none";
        return; 
    }

    let resultado;
    if (acao === 'codificar') {
        resultado = codificar(textoEntrada); // Codifica o texto
    } else if (acao === 'descodificar') {
        resultado = descodificar(textoEntrada); // Descodifica o texto
    }

    // Esconde a mensagem inicial e mostra o resultado
    document.getElementById("mensagem_inicial").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.querySelector("#resultado p").innerHTML = `${resultado}`;
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