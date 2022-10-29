function calculate() {
    // RODADA 1
    const bra1 = parseInt(document.getElementById("BRA1").value, 10);
    const ser1 = parseInt(document.getElementById("SER1").value, 10);

    const sui1 = parseInt(document.getElementById("SUI1").value, 10);
    const cam1 = parseInt(document.getElementById("CAM1").value, 10);

    // RODADA 2
    const cam2 = parseInt(document.getElementById("CAM2").value, 10);
    const ser2 = parseInt(document.getElementById("SER2").value, 10);

    const bra2 = parseInt(document.getElementById("BRA2").value, 10);
    const sui2 = parseInt(document.getElementById("SUI2").value, 10);

    // RODADA 3
    const cam3 = parseInt(document.getElementById("CAM3").value, 10);
    const bra3 = parseInt(document.getElementById("BRA3").value, 10);

    const ser3 = parseInt(document.getElementById("SER3").value, 10);
    const sui3 = parseInt(document.getElementById("SUI3").value, 10);

    // CALCULA PONTOS
    var braPontos = 0;
    var serPontos = 0;
    var suiPontos = 0;
    var camPontos = 0;

    if (bra1 > ser1) {
        // Rodada 1 - Jogo 1
        braPontos += 3;
    } else if (bra1 < ser1) {
        serPontos += 3;
    } else {
        braPontos += 1;
        serPontos += 1;
    }

    if (sui1 > cam1) {
        // Rodada 1 - Jogo 2
        suiPontos += 3;
    } else if (sui1 < cam1) {
        camPontos += 3;
    } else {
        suiPontos += 1;
        camPontos += 1;
    }

    if (cam2 > ser2) {
        // Rodada 2 - Jogo 1
        camPontos += 3;
    } else if (cam2 < ser2) {
        serPontos += 3;
    } else {
        camPontos += 1;
        serPontos += 1;
    }

    if (bra2 > sui2) {
        // Rodada 2 - Jogo 2
        braPontos += 3;
    } else if (bra2 < sui2) {
        suiPontos += 3;
    } else {
        braPontos += 1;
        suiPontos += 1;
    }

    if (cam3 > bra3) {
        // Rodada 3 - Jogo 1
        camPontos += 3;
    } else if (cam3 < bra3) {
        braPontos += 3;
    } else {
        camPontos += 1;
        braPontos += 1;
    }

    if (ser3 > sui3) {
        // Rodada 3 - Jogo 2
        serPontos += 3;
    } else if (ser3 < sui3) {
        suiPontos += 3;
    } else {
        serPontos += 1;
        suiPontos += 1;
    }

    // CALCULA SALDO
    var braSaldo = calculaSaldo(bra1, bra2, bra3, ser1, sui2, cam3);
    var serSaldo = calculaSaldo(ser1, ser2, ser3, bra1, cam2, sui3);
    var suiSaldo = calculaSaldo(sui1, sui2, sui3, cam1, bra2, ser3);
    var camSaldo = calculaSaldo(cam1, cam2, cam3, sui1, ser2, bra3);

    function calculaSaldo(jogo1, jogo2, jogo3, advers1, advers2, advers3) {
        return jogo1 + jogo2 + jogo3 - (advers1 + advers2 + advers3);
    }

    let selecoes = [
        {
            nome: "Sérvia",
            pontos: serPontos,
            saldo: serSaldo,
            bandeira: "./assets/servia.png",
        },
        {
            nome: "Suíça",
            pontos: suiPontos,
            saldo: suiSaldo,
            bandeira: "./assets/suica.png",
        },
        {
            nome: "Brasil",
            pontos: braPontos,
            saldo: braSaldo,
            bandeira: "./assets/brasil.png",
        },
        {
            nome: "Camarões",
            pontos: camPontos,
            saldo: camSaldo,
            bandeira: "./assets/camaroes.png",
        },
    ];

    var aux;
    for (i = 0; i < selecoes.length; i++) {
        for (j = 0; j < selecoes.length - 1; j++) {
            if (selecoes[j].pontos < selecoes[j + 1].pontos) {
                aux = selecoes[j];
                selecoes[j] = selecoes[j + 1];
                selecoes[j + 1] = aux;
            }
            if (selecoes[j].pontos == selecoes[j + 1].pontos) {
                if (selecoes[j].saldo < selecoes[j + 1].saldo) {
                    aux = selecoes[j];
                    selecoes[j] = selecoes[j + 1];
                    selecoes[j + 1] = aux;
                }
            }
        }
    }

    console.log(selecoes)

    // 1ª POSIÇÃO
    document.getElementById("1selecao").innerHTML = selecoes[0].nome;
    document.getElementById("1pontos").innerHTML = selecoes[0].pontos;
    document.getElementById("1saldo").innerHTML = selecoes[0].saldo;
    document.getElementById("1bandeira").src = selecoes[0].bandeira;

    // 2ª POSIÇÃO
    document.getElementById("2selecao").innerHTML = selecoes[1].nome;
    document.getElementById("2pontos").innerHTML = selecoes[1].pontos;
    document.getElementById("2saldo").innerHTML = selecoes[1].saldo;
    document.getElementById("2bandeira").src = selecoes[1].bandeira;

    // 3ª POSIÇÃO
    document.getElementById("3selecao").innerHTML = selecoes[2].nome;
    document.getElementById("3pontos").innerHTML = selecoes[2].pontos;
    document.getElementById("3saldo").innerHTML = selecoes[2].saldo;
    document.getElementById("3bandeira").src = selecoes[2].bandeira;

    // 4ª POSIÇÃO
    document.getElementById("4selecao").innerHTML = selecoes[3].nome;
    document.getElementById("4pontos").innerHTML = selecoes[3].pontos;
    document.getElementById("4saldo").innerHTML = selecoes[3].saldo;
    document.getElementById("4bandeira").src = selecoes[3].bandeira;
}
