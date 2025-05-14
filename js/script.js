function parseNumero(valor) {
    return parseFloat(valor.replace(',', '.'));
}

function calcular() {
    const largura = parseNumero(document.getElementById('largura').value);
    const altura = parseNumero(document.getElementById('altura').value);
    const unidadeLargura = document.getElementById('unidadeLargura').value;
    const unidadeAltura = document.getElementById('unidadeAltura').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const valorM2 = parseNumero(document.getElementById('valor').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (isNaN(largura) || largura < 0.01 || isNaN(altura) || altura < 0.01 || isNaN(quantidade) || quantidade < 1 || isNaN(valorM2) || valorM2 < 0) {
        resultado.innerHTML = '<span class="aviso">Por favor, preencha todos os campos corretamente.</span>';
        return;
    }

    const larguraEmMetros = unidadeLargura === 'cm' ? largura / 100 : largura;
    const alturaEmMetros = unidadeAltura === 'cm' ? altura / 100 : altura;

    let area = larguraEmMetros * alturaEmMetros;
    let areaTotal = area * quantidade;
    let valorFinal;

    let mensagem = `Área total: ${areaTotal.toFixed(2).replace('.', ',')} m²<br>`;

    if (areaTotal < 0.5) {
        valorFinal = 0.5 * valorM2;
        mensagem += '<span class="aviso">Metragem mínima de 0,5 m² aplicada.</span><br>';
        mensagem += `Valor final: R$ ${valorFinal.toFixed(2).replace('.', ',')}`;
    } else {
        valorFinal = areaTotal * valorM2;
        mensagem += `Valor final: R$ ${valorFinal.toFixed(2).replace('.', ',')}`;
    }

    resultado.innerHTML = mensagem;
}