/*for – Belirli sayıda komutu bloklar arasında yürütmek için kullanılır.
for/in – dizi yada nesnelerin özelliklerini okumak için kullanılır(diğer dillerdeki foreach ile aynı)
while – şart doğru olduğu sürece bloklar arasındaki kodlar yürütülür.
do/while – en az bir kez olmak üzere şart doğru olduğu sürece bloklar arasındaki kodlar yürütülür.
Yazım Kuralı:
for (ifade1; ifade2; ifade3) {
çalıştırılacak olan kod bloğu
}
ifade1: Döngü başlamadan önce başlangıç değişkeninin tanımlanması(örn: i=0)
ifade2: Döngü çalışma koşulunu göstermektedir.(Örn: i<=100)
ifade3: Başlangıç değişkeninin değişimi(artış/azalış)  (Örn: i++)
 */
function dongu() {
    var sayac = 0;
    for (var i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            sayac++;
            console.log("Sayı: " + i);
        }
    }
    console.log(sayac + " Adet Çİft SAyı vardır...");
}
//dongu();


//While Dongusu
// var i = 0;
// while (i < 10) {
//     console.log("Sayı= " + i);
//     i++;
// }

// var meyveler = ["Elma", "Armut", "Kiraz", "Karpuz"];
// var i = 0;
// var yazi = "";
// //Örnek 2: Dizi elemanlarını while döngüsü ile ekrana yazdırma.
// while (meyveler[i]) {
//     yazi += meyveler[i] + "\n";
//     i++;
// }
// console.log(yazi);

//for-in
/*var nesne = { ad: "Hayri", soyad: "KOÇ", yas: 33 ,Telefon: "026464564"};
for (var anahtar in nesne) {
    console.log("Özellik: " + anahtar + " = " + nesne[anahtar]);
}*/
/*
var nesne = ["İSTANBUL","ANKARA","İZMİR","EDİRNE"];
for (var index in nesne) {
console.log("index : " + index + " = " + nesne[index]);
}
Eğer nesneleri doğrudan okumak istiyorsanız. for…of deyimini kullanmanız gerekmektedir.
var dizi = [10, 20, 30];
for (var nesne of dizi) {
console.log(nesne);
}
*/
/*var sehirler = new Map([[34, "İstanbul",15], [06, "İstanbul",15], [22, "Edirne", 1.5]]);
for (var [plaka, sehir, nufus] of sehirler) {
    console.log(plaka + "=" + sehir + " Nufus: "+nufus);
}
*/
/*
function ornek() {
    for (let arg of arguments) {
    console.log(arg);
    }
    };
    ornek([[34, "İstanbul",15], [06, "İstanbul",15], [22, "Edirne", 1.5]]);
    ornek(2,4,5);
*/
/*
var yazi = "";
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    console.log(yazi+= "sayı= " + i + "\n");
}
*/
/*
var yazi="";
for (i = 0; i < 10; i++) {
if (i === 3 || i === 5 || i===9 ) { continue; }
console.log(yazi+= "sayi " + i + "\n");
}
*/
