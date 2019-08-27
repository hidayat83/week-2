// 1
// Bunyi Hukum II Newton adalah 
// Percepatan sebuah benda akan sebanding dengan gaya yang diberikan pada benda dan berbanding terbalik dengan massa benda. Arah percepatan benda sama dengan arah gaya total yang diberikan pada benda.
// Secara matematis hukum II Newton dirumuskan sebagai berikut: ΣF = m x a

// ΣF = resultan gaya (Newton)

// m = massa benda (kg)

// a = percepatan benda (m/s2)

// Berdasarkan keterangan di atas, buatlah sebuah algoritma / pseudocode untuk menghitung resultan gaya pada sebuah mobil yang memiliki massa benda 600 kg dan ketika didorong oleh tiga orang percepatannya adalah 2 m/s2!

==========================Jawaban =========================================
#algoritma
Hitung Resultan Gaya mobil
1. Masa mobil = 600 kg
2.Kercepatan benda = 2 m/s2
3 Hitung Resultan gaya mobil (massa mobil x Keceptan benda  )
4.tampilkan hasil perhitungan 

#pseuducode
Start
STORE `Massa mobil` with 600
STORE `Kecepatan benda` with 2 m/s2
STORE `Resultan Gaya Mobil` with CALCULATE (Massa mobil  * Kecepatan benda ) / 2 
DISPLAY `Resultan Gaya mobil'
END
===============================================================================
// 2. Tahun Kabisat
// Apa yang kamu ketahui tentang tanggal 29 Februari? Kamu pasti tahu jika suatu tahun memiliki tanggal 29 Februari berarti tahun tersebut merupakan tahun kabisat.

// Dalam kalender Gregorian, tahun kabisat memiliki beberapa kriteria yaitu antara lain:

// Jika tahun habis di bagi 4 dan tidak habis di bagi 100, atau
// Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400
// Buatlah algoritma & pseudocode untuk menentukan apakah suatu tahun merupakan tahun kabisat atau bukan!

===========================Jawaban=============================================
#Algoritma
1.Tentukan Tahun
2.Jika tahun habis di bagi 4 dan tidak habis di bagi 100, Maka cetak " ini bukan Tahun Kabisat "
3.Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400 ,Maka cetak "ini  Tahun Kabisat "

#Pseuducode
START
Store 'Tahun' with any value

if 'Tahun' MOD 4 EQUALS 0 AND 'Tahun' MOD 100 NOT EQUALAS 0 THEN
DISPLAY 'INI BUKAN TAHUN KABISAT'
IF 'Tahun' MOD 4 EQUALS 0 AND 'Tahun' MOD 100 EQUALS 0 AND 'Tahun' MOD 400 EQUALS 0 THEN 
DISPLAY 'INI TAHUN KABISAT'
END
============================================================================================
//3
// Foxie akan mencuci pakaiannya menggunakan mesin cuci. Pakaian yang akan dicuci oleh Foxie sebanyak 20 dan akan dimasukkan ke mesin cuci. Mesin cuci akan dinyalakan jika semua pakaian Foxie sudah masuk ke mesin cuci.

// Bantulah Foxie untuk menghitung jumlah pakaian yang akan dimasukkan ke mesin cuci menggunakan algoritma / pseudocode perulangan!

#ALGORITMA
1.Persiapkan pakaian yang akan dicuci
2.HITUNG pakaian sampai 20 pakaian
3,Masukanlah 20 pakaian ke dalam mesin cuci
4.jika sudah mulailah mencuci pakaian dengan mesin cuci


//START
// STORE "laundry" with 0
// WHILE "laundry" <20
//   ADD "laundry" by 1
  
// DISPLAY "Laundry process"  

// END
===============================================================================
//4
// Seorang guru akan memeriksa kuku siswa-siswinya yang sebanyak 40 orang dengan cara berkeliling kelas. Jika guru menemukan siswa/siswi yang memiliki kuku yang panjang maka guru akan menghukum siswa/siswi tersebut, jika tidak guru akan memuji siswa/siswi tersebut.

#ALGORITMA
//Guru datang ke kelas untuk memotong kuku siswa/inya dengan membawa alat pemoton kuku
//Guru akan memeriksa siswa/i sebanyak 40 orang
//ketika memeriksa kuku siswa/inya,jika kukunya panjang maka  guru akan memotong kuku siswa/i tsb 
//Jika kukunya tidak panjang guru akan memuji siswa/i tsb 
//


//START
// STORE "count" to 0
// WHILE "count" < 40
//   ADD "count" by 1
// DISPLAY "count"
//END