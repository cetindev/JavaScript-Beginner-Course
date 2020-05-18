//JavaScript
//JavaScript Number Nesnesi
//console.log(Number.MIN_SAFE_INTEGER);
//Javascript Nesne (Object) Oluşturma
var Personel = {
    ad: "Ali",
    soyad: "BAK",
    telefon: "715 400 40 40",
    ucret: 100
}
/*Eğer Nesne tanımlaması yapılırken özelliklerden biri metod içinde kullanılacaksa (örnekte ödeme hesaplamak için ücreti kullanacağız.) 
 nesne içindeki özellik için this anahtar kelimesi  kullanılır. */

var Personel = {
    ad: "Ali",
    soyad: "BAK",
    telefon: "715&nbsp;400 40 40",
    ucret: 100,
    ucretOde: function (gun) {
        return gun * this.ucret;
    }
}
console.log(Personel.ucretOde(5));

var Ogrenci = {
    ad: "Ali",
    soyad: "Al",
    adSoyad: function () {
        return this.ad + " " + this.soyad;
    }
};
console.log(Ogrenci.adSoyad());

//this anahtarı nesne içindeki parçalara(ozellik,metod) ulaşmak için kullanılır.    
/*2-) Başka bir JavaScript nesnesi oluşturma yöntemi de constructor pattern(yapıcı desen) olarak tanımlamak mümkündür. 
  Fonksiyon tanımlama yöntemi ile sınıf oluşturup,  oluşturulan sınıf new anahtarı ile nesne olarak türetilir. */
var Uye = function () {
    this.isim;
    this.soyisim;
    this.adSoyad = function () {
        return this.isim + " " + this.soyisim;
    }
}
var Uye1 = new Uye();
var Uye2 = new Uye();
Uye1.isim = "Hayri";
Uye1.soyisim = "KOÇ";
Uye2.isim = "Hüseyin";
Uye2.soyisim = "ÖZ";
console.log(Uye1.adSoyad());
console.log("\n");
console.log(Uye2.adSoyad());

var Uye = function () {
    /*
    var anahtarı ile fonksiyon içinde tanımlanmıştır. fonksiyon dışında çağırma şansımız yok
    Uye.isim olarak çağıramayız. Sadece this.degiskenadi şeklinde yapılan bildirimler dışarıdan çağırır.
    */
    var isim;
    var soyisim;
    this.yas = 18;
    /*fonksiyon içinde tanımlanan isim değişkenine dışarıdan değer aktarmak için kullanılır. setter metodu*/
    this.setIsim = function (v) {
        isim = v;
    }
    /*fonksiyon içinde tanımlanan isim değişkenindeki değeri okumak için kullanılır. getter metodu*/
    this.getIsim = function () {
        return isim;
    }
    this.setSoyisim = function (v) {
        soyisim = v;
    }
    /*sınıf içinde tanımlanmış bir fonksyion*/
    this.adSoyad = function () {
        return isim + " " + soyisim;
    }
}
var Uye1 = new Uye();
Uye1.setIsim("Hayrettin");
Uye1.setSoyisim("KOÇ");
/*this anahtarı ile tanımlanan değişken doğrudan çağırılıyor.*/
Uye1.yas = 50;
console.log(Uye1.adSoyad());
console.log(Uye1.getIsim() + " ");
console.log(Uye1.yas);