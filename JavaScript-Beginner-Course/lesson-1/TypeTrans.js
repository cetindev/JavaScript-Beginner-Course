/*
var  sayi=125;              // typeof deger  -> number
var metin=sayi.toString();  // typeof metin --> string
console.log(typeof metin);

var  sayi2="125";              // typeof deger  -> number
//var metin2=sayi2.parseInt();  // typeof metin --> string
console.log(typeof metin2);
*/

function Hesapla(){
 
    var k1=document.getElementById("kenar1").value;
    var k2=document.getElementById("kenar2").value;
    k1=Number(k1);
    k2=Number(k2);
    var cevre=(k1+k2)*2;
    alert("İki kenarı girilen dikdörtgenin çevresi:"+cevre);
    }
     
    //hesaplama yapması için hesap butonunu seçiyoruz.
    var hesapBtn=document.getElementById("Hesapla");
    //fonksiyonu olaya bağlıyoruz.
    hesapBtn.onclick=Hesapla();
