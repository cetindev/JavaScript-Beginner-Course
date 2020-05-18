/*Boolean: Mantıksal varlığı ifade eder. İki tip değer içerebilir true ve false
Null: Tam olarak null değerini taşıyan veri türüdür.
Undefined: Değişken tanımlanmış ama değer atanmamış ise değişken içindeki değer undefined dir
Number: EcmaScript standartlarına göre 64bit işaretli tek sayı tipi vardır. Tam yada ondalıklı sayılar number tipi ile ifade edilmektedir. 
Ek olarak +Infinity, -Infinity, and NaN (not-a-number) olmak üzere 3 tane özel sembolik değer vardır.
String: JavaScript dizge üzerinde metinsel verileri temsil etmek için kullandığı veri tipidir.
Dizgedeki her öğe 16 bitlik işaretsiz integer bir referansı vardır. Dizgedeki ilk elemanın index numarası 0 dır.
Dizgedeki diğer değerler için index numarası 1 artarak devam eder.
Özetle: Metinsel bir ifade karakterlerden oluşan bir dizi olarak nitelendirilir.
Symbol ( ECMAScript 6): EcmaScript 6 standartı ile tanımlanmış bir tipdir. Nesne değeri için benzersiz ve sabit bir değeri ifade eder.
Object: Bellekteki belirli bir nesnenin referansını(yolunu) tutmak için kullanılan tiptir. Dizi, Fonksiyon ve Nesneler bu tip ile ifade edilir.

 */
var sayi = 5;
var x, y = 8, z;
var aktif = true;
var ondalikli = 5.4;
var deger = "merhaba";

// console.log(sayi);

// Sayılar
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof (42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; //  "Not-A-Number"
typeof Number(1) === 'number';


// String
typeof "" === 'string';
typeof "bla" === 'string';
typeof String("abc") === 'string';


// Boolean
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean';


// Semboller
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'


// Undefined
typeof undefined === 'undefined';
typeof tanimlanmisKullanilmamisDegisken === 'undefined';
typeof tanimlanmamisDegisken === 'undefined';


// Nesneler
typeof { a: 1 } === 'object';
typeof [1, 2, 4] === 'object';

console.log(
    typeof new Date() === 'object'
);

typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String("abc") === 'object';


// Fonksiyonlar
typeof function () { } === 'function';
typeof class C { } === 'function';
typeof Math.sin === 'function';