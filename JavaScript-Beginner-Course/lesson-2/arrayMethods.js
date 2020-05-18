/*
concat()	    Çağrıldığı dizi ile metodaa gönderilen dizi yada değerleri ekleyip geriye dizi döndürür.	
every() 	    Dizideki tüm elemenları verilen fonksiyon ile test eder.
        -Geri dönüş değeri false bulana kadar tüm elemanları sırayla kontrol eder. Dönen tüm değerler true ise sonuç true döndürür.	
filter()	    Kendisine gönderilen fonksiyondan geçen tüm elemanlardan yeni bir dizi oluşturur.	
forEach()	    Dizinin her elemanı için belirtilen fonksiyonu çalıştırır.	
indexOf()	    Kendisine gönderilen parametre ile dizide aramayapıp bulduğu ilk indexi döndürür. eğer dizide yoksa aranan değer -1 değerini çevirir.	
join()  	    Dizideki tüm değerleri belirtilen yapıştırıyıcıya göre birleştirir.	
lastIndexOf()	Belirtilen elemanın dizinin sonunda olup olmadığını kontrol eder. Dizinin sonunda bulamazsa -1 değerini döndürür.
        - aranan değerin dışında isteğe bağlı ikinci bir değer daha verilebilir. Pozitif ise dizinin başından kaç değer içinde aranacağı,
        - negatif ise dizinin sonunda kaç değerin aramadan çıkarılacağını ifade eder. Unutmayın aramaya eklenmese de dizinin başından aranacaktır.
        - değer bulmazsa -1 değerini döndürecektir.	
map()	        Dizi içindeki tüm elemanları belirtilen fonksiyondan geçirip yeni bir dizi oluşturur.	
pop()	        Dizideki son değeri diziden atar.	
push()      	Belirtilen elemanları dizinin sonuna ekler.	
reverse()	    Diziyi ters çevirir.	
shift()	        Dizinin başındaki ilk elemanı çeker.	
sort()      	Diziyi sıralar.	
some()      	BAZI elemanların belirtilen fonksiyon ile testi geçip geçmediğini kontrol eder.	
unshift()	    Dizinin başına değer ekler.	
toString()  	Diziyi metinsel(string) ifadeye çevirir.
*/
//concat metodun çağrıldığı dizi ile metodaa gönderilen dizi yada değerleri ekleyip geriye dizi döndürür.
// var yenidizi = eskidizi.concat(deger1[, deger2[, ...[, degerN]]])
/*
var mevveler = ["Elma", "Muz"];
var sebzeler = ["Brokoli", "Lahana"];
var bitkiler = [];
bitkiler = sebzeler.concat(mevveler);                           //YAni dizileri birleştiri gibi bişey
console.log(bitkiler); //ekran çıktısı: Brokoli,Lahana,Elma,Muz
*/
// every dizideki tüm elemenları verilen fonksiyon ile test eder.
//Geri dönüş değeri false bulana kadar tüm elemanları sırayla kontrol eder. Dönen tüm değerler true ise sonuç true döndürür.
/*
function yasBuyukMu(eleman, index, dizi) {
    return eleman >= 18;
}                                                               //Parametre olarak bir fonk. alır ve ona fonk'una göre bütün elemenlar true ise true döndürür
var durum1 = [20, 5, 8, 130, 44].every(yasBuyukMu); // false
var durum2 = [18, 54, 18, 130, 44].every(yasBuyukMu); // true
console.log(durum1);
console.log(durum2);
*/

// every dizideki tüm elemenları verilen fonksiyon ile test eder.
//Geri dönüş değeri false bulana kadar tüm elemanları sırayla kontrol eder. Dönen tüm değerler true ise sonuç true döndürür.
/*
function sayiKontrol(eleman, index, dizi) {

    //Bilgi: NaN ->numaraya çevrilemezse üretilen bir değerdir. '1' -> 1 olurken 'a' - > sayı olmaz NaN olur.
    if (isNaN(eleman))
        return false;
    else
        return true;
}
var durum1 = [5, "aaa", 7, 3].every(sayiKontrol); // false
var durum2 = [18, 54, 18, 152].every(sayiKontrol); // true
console.log(durum1);
console.log(durum2);
*/
/*
//filter metodu kendisine gönderilen fonksiyondan geçen tüm elemanlardan yeni bir dizi oluşturur.
function buyukSayilar(deger) {
    return deger >= 25;
}
var yeni_dizi = [12, 5, 8, 130, 44].filter(buyukSayilar);
// yeni_dizi degeri: [130, 44]
console.log(yeni_dizi);
*/

// forEach() metodu, dizinin her elemanı için belirtilen fonksiyonu çalıştırır.
/*
function ornekFonk(deger) {
    //dizinin her elemanını 5 ile çarpıp bir boşluk bırakarak ekrana yazar.
    console.log("\n" + deger * 5 + "\n");
}
[34, 11, 02, 4].filter(ornekFonk);
*/
/*
//indexOf() metodu kendisine gönderilen parametre ile dizide aramayapıp bulduğu ilk indexi döndürür. eğer dizide yoksa aranan değer -1 değerini çevirir.
var dizi = [2, 9, 9];
console.log(
dizi.indexOf(2) , // 0
dizi.indexOf(7) , // -1
dizi.indexOf(9, 2) , // 2
dizi.indexOf(2, -1) , // -1
dizi.indexOf(2, -3),  // 0
dizi.indexOf(2,9,9),
);
*/
//join() methodu dizideki tüm değerleri belirtilen yapıştırıyıcıya göre birleştirir.
/*
var meyveler = ["Elma", "Muz", "Üzüm", "Portakal"];
var dizi1 = meyveler.join(","); //Elma,Muz,Üzüm,Portakal
var dizi2 = meyveler.join("+"); //Elma+Muz+Üzüm+Portakal
console.log(dizi1 +"\n"+dizi2);
*/
/*
//lastIndexOf() methodu belirtilen elemanın dizinin sonunda olup olmadığını kontrol eder. Dizinin sonunda bulamazsa -1 değerini döndürür.
// aranan değerin dışında isteğe bağlı ikinci bir değer daha verilebilir. Pozitif ise dizinin başından kaç değer içinde aranacağı,
//negatif ise dizinin sonunda kaç değerin aramadan çıkarılacağını ifade eder. Unutmayın aramaya eklenmese de dizinin başından aranacaktır.
//değer bulmazsa -1 değerini döndürecektir.
var dizi = [2, 5, 9, 2];
dizi.lastIndexOf(2); // 3
dizi.lastIndexOf(7); // -1
dizi.lastIndexOf(9, 1); // -1
dizi.lastIndexOf(9, 2); // 2
console.log(dizi.lastIndexOf(5, -2)); // -1
dizi.lastIndexOf(9, -1); // 2
*/
/*
//map() methodu dizi içindeki tüm elemanları belirtilen fonksiyondan geçirip yeni bir dizi oluşturur.
var sayilar = [1, 4, 9];
var kok = sayilar.map(Math.sqrt);
// kok artık [1, 2, 3], sayılar dizisi hala [1, 4, 9]
var nesneDizi = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
var yeniDizi = nesneDizi.map(function(gelen){
var yDizi = {};
yDizi[gelen.key] = gelen.value;
return yeniDizi;
});
// yeniDizinin : [{1:10}, {2:20}, {3:30}],
// nesneDizi'si hala [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}]
console.log(yeniDizi);
*/

//pop() methodu dizideki son değeri diziden atar.
// push() methodu belirtilen elemanları dizinin sonuna ekler.
//reverse() methodu diziyi ters çevirir.
//shift() methodu dizinin başındaki ilk elemanı çeker.
//sort() methodu diziyi sıralar.

//some() methodu BAZI elemanların belirtilen fonksiyon ile testi geçip geçmediğini kontrol eder.
 /*
function karakterKontrol1(elaman, index, dizi){
    //5 kareterden büyük olan var mı kontrolü yapıyor. varsa true
    return eleman.length>5;
    }
    function karakterKontrol2(elaman, index, dizi){
    //10 kareterden büyük olan var mı kontrolü yapıyor. varsa true
    return eleman.length>10;
    }
    var mevveler = ["Elma", "Muz","Ayva","Portakal"];
    meyveler.some(karakterKontrol1); //true portakal 5 karakterden büyük olduğu için true dönecektir.
    meyveler.some(karakterKontrol2); //false 10 karakterden büyük değer olmadığı için sonuç false dönecektir.
*/
//unshift() methodu dizinin başına değer ekler.
//toString() metodu diziyi metinsel(string) ifadeye çevirir.
  