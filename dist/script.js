"use strict";
const cores = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black",
    "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral",
    "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey",
    "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon",
    "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink",
    "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
    "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink",
    "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue",
    "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink",
    "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue",
    "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed",
    "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip",
    "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue",
    "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
    "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
    "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
var vidas = 5;
var resposta;
const vetorCores = new Array(10);
var corCorreta;
function iniciar() {
    gerarCores();
    do {
        var resposta = prompt("Em qual cor eu estou pensando?\n\n" + vetorCores.join(", ") + "\n\n" + "Vida Restantes " + vidas);
        var res = document.querySelector('#res');
        if (resposta == null || res == null) {
            return;
        }
        if (resposta.trim() === '') {
            alert('A resposta não pode ser vazia!');
        }
        else if (resposta.toLowerCase() == corCorreta.toLowerCase()) {
            alert("Parabéns, você acertou!");
            document.body.style.background = resposta;
            res.innerHTML = 'Pressione F5 para reiniciar.';
            vidas = 0;
        }
        else {
            vidas--;
            if (vidas > 0) {
                alert('Resposta errada!\n\nDica: A sua cor está alfabeticamente' + (resposta.toLowerCase() > corCorreta.toLowerCase() ? " DEPOIS " : " ANTES ") + 'que a minha\n\nPor favor, tente novamente!');
            }
            else {
                alert(`Você perdeu!\n\nA resposta era "${corCorreta}".`);
                res.innerHTML = 'F5 para reiniciar.';
            }
        }
    } while (vidas != 0);
}
function gerarCores() {
    for (var i = 0; i < vetorCores.length; i++) {
        do {
            var aux = cores[Math.floor(Math.random() * cores.length)];
        } while (vetorCores.includes(aux));
        vetorCores[i] = aux;
    }
    vetorCores.sort();
    corCorreta = vetorCores[Math.floor(Math.random() * vetorCores.length)];
    console.log(corCorreta);
}
