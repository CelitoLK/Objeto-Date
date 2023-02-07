/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras - umDia);
*/

//const data = new Date();  //(2019, 3, 20, 15, 14, 27, 500) ano, mês, dia, hora, minutos, segundos, milésimos de segundo


/*
const data = new Date ('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()+1); //mês começa em 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 = domingo

console.log(data.toString());
*/

//console.log(Date.now());


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    const ms = zeroAEsquerda(data.getMilliseconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}:${ms}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);