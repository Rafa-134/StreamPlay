function cadastrar(){

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let plano = document.getElementById("plano").value;

    let resultado = document.getElementById("resultado");

    // ETAPA 02 - Verificar campos vazios
    if(nome === "" || email === "" || idade === "" || plano === ""){

        resultado.innerHTML = "Preencha todos os campos.";

        resultado.style.color = "red";
        resultado.style.backgroundColor = "#ffd6d6";

        return;
    }

    // ETAPA 03 - Validar idade
    if(parseInt(idade) < 18){

        resultado.innerHTML =
        "Usuários menores de idade não podem criar conta.";

        resultado.style.color = "red";
        resultado.style.backgroundColor = "#ffd6d6";

        return;
    }

    // ETAPA 05 - Resumo do cadastro
    resultado.innerHTML = `
        <h3>===== RESUMO DO CADASTRO =====</h3>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p><strong>Plano:</strong> ${plano}</p>

        <p><strong>Cadastro realizado com sucesso.</strong></p>
    `;

    resultado.style.color = "green";
    resultado.style.backgroundColor = "#d4ffd4";
}

function limparCampos(){

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("plano").value = "";

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";
    resultado.style.backgroundColor = "transparent";
    resultado.style.color = "black";
}