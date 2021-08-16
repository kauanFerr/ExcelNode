const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Dados Excel');

let dados = [
    {
        "name": "Kauan",
        "Email": "k8.kauan@gmail.com",
        "celular": "(11)945834091"
    },
    {   
        "name": "Kauan2",
        "Email": "k8.kauan@gmail.com2",
        "celular": "(11)945834091"
    } 
   ];

   const nomecolunas = [
        "Name",
        "E-mail" ,
        "Celular"
   ];

let colunaIndex = 1;
nomecolunas.forEach(colunas => {
    ws.cell(1, colunaIndex++).string(colunas);
});

let rowIndex = 2;
dados.forEach(record => {
    let colunaIndex = 1;
    Object.keys(record).forEach(nomecolunas =>{
        ws.cell(rowIndex,colunaIndex++).string(record[nomecolunas])
    });
    rowIndex++;
});

wb.write('Arquivo.xlsx');