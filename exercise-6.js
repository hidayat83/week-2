/* 1. Melakukan Looping Menggunakan While */
var indeks = 2;

console.log('LOOPING PERTAMA');
while (indeks<=20) {
    console.log(indeks+' - I love coding');
    indeks += 2;
}
indeks = 20;
console.log('LOOPING KEDUA');
while (indeks>=2) {
    console.log(indeks+' - I will become fullstack developer');
    indeks -= 2;
}

/* 2. Melakukan Looping Menggunakan For */
console.log('LOOPING PERTAMA');
for (var i=1; i<=20; i++)
    console.log(i+' - I love coding');
console.log('LOOPING KEDUA');
for (i=20; i>0; i--)
    console.log(i+' - I will become fullstack developer');

/* 3. Angka Ganjil dan Genap */
//perulangan ganjil genap
for(var i=1; i<=100; i++) {
    if (i%2 === 0)
        console.log('GENAP');
    else
        console.log('GANJIL');
}
//perulangan pertambahan counter 2
for (i=1; i<=100; i+=2) {
    if (i%3 === 0)
        console.log(i+' KELIPATAN 3');
    else
        console.log(''); 
}
//perulangan pertambahan counter 5
for (i=1; i<=100; i+=5) {
    if (i%6 === 0)
        console.log(i+' KELIPATAN 6');
    else
        console.log(''); 
}
//perulangan pertambahan counter 9
for (i=1; i<=100; i+=9) {
    if (i%10 === 0)
        console.log(i+' KELIPATAN 10');
    else
        console.log(''); 
}