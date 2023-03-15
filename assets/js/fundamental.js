// 1. Statement
console.log("Selamat pagi, Dunia!");


// 2. Komentar
// Ini adalah komentar 1 baris
/* ini adalah komentar
multi
baris */


// 3.Variabel
// Deklarasi Variabel
var nama = " Dwi Putra";
console.log(nama);

let umur = "22";
console.log(umur);

const universitas = "Gunadarma";
console.log(universitas);


// 4.Tipe Data
// Number
let angka = 225;
console.log(angka);
// String
let teks = "Ramadhani";
console.log(teks);
// Boolean
let logic = false;
console.log(logic);
// Array
let buah = ['mangga', 'jeruk', 'apel'];
console.log(buah);
// Symbol
let employee = Symbol('Ramadwpp');
console.log(employee);
console.log(employee.description);
// Object
let profil = {nama: "Ramadhani", umur: 22};
console.log(profil);


// 5.Operator:
// Operator Aritmatika
let a = 120;
let b = 30;
console.log(a + b); // Penjumlahan
console.log(a - b); // Pengurangan
console.log(a * b); // Perkalian
console.log(a / b); // Pembagian
console.log(a % b); // Sisa Bagi
console.log(a ** b); // Pemangkatan

// Operator Perbandingan
let x = 50;
let y = 10;
console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <=  y); // false
console.log(x == y); // false
console.log(x != y); // true

// Operator logika
// A. Logika AND
let p = 25;
let q = 50;
console.log(p && q); // 50
console.log(q && p); // 25
// B. Logika OR
let z = 60;
let v = 30;
console.log(z || v); // 60
console.log(v || z); //30
// C. Logika NOT
let i = true;
let u = false;
console.log(!i); // false
console.log(!u); // true

// Operator Bitwise
let s = 15;
let e = 45;
console.log(s & e); // AND
console.log(s | e); // OR
console.log(s ^ e); // XOR
console.log(s << e); // Shift Left
console.log(s >> e); // Shift Right

// Operator Ternary
let j = 68;
let l = 30;
let hasil = (j > l) ? " j lebih besar dari l" : " l lebih besar dari j";
console.log(hasil); // j lebih besar dari l


// 6. Popup Box
// Alert Box
alert("Hello, Ramadhani Dwi Putra!"); // Alert Box
// Confirm Box
let response = confirm("Apakah anda seorang mahasiswa semester 6?");
alert("Jawabannya: " + response);
// Prompt Box
let balasan = prompt("Apakah anda ingin bermain bola hari ini?");
alert("Jawabannya adalah: " + balasan);


// 7. Kondisi
// If
let jawaban = prompt("12 + 23 =");
if (jawaban == 35) {
    alert("Benar!");
}
// Else
let tanggapan = prompt("47 - 35 =");
if (tanggapan == 12) {
    alert("Correct!");
}else{
    alert("wrong!");
}
// Else If
let jika = prompt("24 * 6 =");
if (jika == 144) {
    alert("True!");
}else if (jika < 144){
    alert("Terlalu Rendah!");
}else{
    alert("Terlalu Besar!");
}

