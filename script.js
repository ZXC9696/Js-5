do {
    var amo = +prompt('Введите количество')
} while (amo == 0);
if (isNaN(amo)){
    amo = 5
}
do {
    var sym = prompt('Символ отступов')
} while (sym=='');
do {
    var las = prompt('Конечный символ')
} while (las=='');
  for (let i=0; i<amo; i++) {
    let row = sym.repeat(i) + las;
    console.log(row);
  }