/* 1. Menyusun Barisan Bintang */
var rows1 = 5;
for(var i=0; i<rows1; i++)
    console.log('*');

/* 2. Menyusun Barisan Bintang Dengan Nested Looping */
var rows2 = 5;
var output;

for(var i=0; i<rows2; i++) {
    output = '';
    for(var j=0; j<rows2; j++)
        output += '*';
    console.log(output);
}

/* 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping */
var rows2 = 5;
var output;

for(var i=0; i<rows2; i++) {
    output = '';
    for(var j=0; j<=i; j++)
        output += '*';
    console.log(output);
}