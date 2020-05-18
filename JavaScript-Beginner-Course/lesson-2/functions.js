//JavaScript dilinde her fonksiyon bir nesnedir.
/*Varsayılan değer dışında bir fonksiyondan bir değer döndürmek için return ifadesi kullanılmak zorundadır. 
 return değeri olmayan bir fonksiyon varsayılan değeri döndürmektedir.
 Kurucu metod ile oluşturulan nesneler dışındaki tüm fonksiyonlardaki varsayılan değerler undefined türüdür. */
//Anonim Fonksiyonlar
/*
var carpim1 = function (x, y) {
    return x * y;
}
function carpim2(x, y) {
    return x * y;
    }
console.log(carpim1(4,6) +"\n"+carpim2(4,5));
 */
/*
//Örnek: Dizideki değerleri okuma örneği. Anonim fonksiyon ile
var dizi = [12, 25, 85, 45, 74];
//forEach metodu dizideki her değer için okuma yapar
//array.forEach(fonksiyon)
dizi.forEach(function (i) {
    console.log(i);
});
*/

//JavaScript Arrow Fonksiyon /JavaScript Lambda Fonksiyon
//EcmaScript 6 ile javasSript diline dahil olan Arrow Fonksiyonlar ile isimsiz bir fonksiyon tanımlayıp değer döndürme işlemini yapabilirsiniz.
//Yazım Kuralı: En kapsamlı şu şekilde yazabilirsiniz.
//  (param1, param2, …, paramN) => { ifadeler }
/*
//Örnek 1: Basit bir kare alma fonksiyonunu  arrow fonksiyon ile  tanımlama
//tanımlama kısmı
var kareAl = x => x * x;
// x değeri parametre 
//tanımlanan fonksiyonun kullanımı
console.log(kareAl(10));
*/
/*
var dizi=[12,25,85,45,74];
//forEach metodu dizideki her değer için okuma yapar
//array.forEach(fonksiyon)
dizi.forEach(
    (eleman)=>console.log(eleman)
    );

var dizi=[2,44,5,,7,7,65,3,"rffdsfd","fdsfsdf",7,76,43];
dizi.forEach(
    (sayi) =>console.log(sayi)
    
);
*/
/*
//Örnek 3: dizi içindeki 1,2,3 sayılarının karesini alma
var dizi = [1, 2, 3];
var kareal1 = dizi.map(x => x * x);
console.log(kareal1);
// Klasik yöntemle
var kareal2 = dizi.map(function (x) { return x * x });
console.log(kareal2);
*/

//JavaScript String Metotları ve Özellikleri

/*Sık Kullanılan String  Metotları/Özellikleri
Özellik/Metot                Açıklama
length	                     Dizgenin uzunluğunu getirir.
 String.fromCharCode()  	 Unicode değerlerinden oluşan yeni bir dizge döndürür.
charAt()	                 String dizgesi içinde belirtilen sıradaki elemanı getirir.
 charCodeAt()	             UTF-16(65535  karekter) ya göre index numarası girilen karekteri getirir.
 concat()	                 Parametre olarak girilen iki ve daha fazla dizgeyi birleştirip tek bir dizge haline getirir.
 replace()	                 Dizge içinde belirtilen tüm desenlerle eşleşip,  desene göre yeniden oluşturulan yeni bir dizge döndürür.
 search()	                 Dizge içinde düzenli ifadeye göre arama yapar. Eğer eşleşen kayıt bulursa ilk bulduğu index, bulmazsa -1 değerini döndürür.
 slice()	                 Belirtilen başlangıç ve bitiş değerlerine göre dizgeyi parçalar.
 split()	                 İsteğe bağlı ayraç(örn: , ) ile dizgeyi parçalayıp yeni bir dizi oluşturur.
substr()                  	 Bir dizge içinde belirtilen komundan belirli sayıda karakteri alır.
trim()	                     Dizgenin başındaki ve sonudaki boşlukları kaldırır. */

//concat() String dizgesi ile belirtilen yazı yada yazıları birleştirip yeni bir yazı üretir.
 /*
 JSON.parse Kullanımı
JSON biçiminde oluşturulmuş bir veriyi çözüp, javascript biçimine dönüştürmek için JSON.parse metodunu kullanılır.

JSON biçiminden dönüştürülen yapı veri, dizi yada bir nesne olabilir. parse dönüşümü ile  yapı javascript nesnesi olarak doğrudan kullanılabilir hale  gelmiş olur.
 */

var json='{"isim":"Ahmet","soyisim":"Cancan","yas":38,"bilgi":["C#","CSS","PHP"],"site":"https:www.yazilimbilisim.net"}';
       
var veri = JSON.parse(json);   
// veri nesnesinin yapısı
/*
{
    isim: 'Ahmet',
    soyisim: 'Cancan',
    yas: 38,
    bilgi: ['C#', 'CSS', 'PHP'],
    site:"https:www.yazilimbilisim.net"
}
*/
 console.log(veri);
console.log(typeof veri); //https:www.yazilimbilisim.net


    
