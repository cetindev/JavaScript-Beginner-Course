function gun() {

    switch (gun = new Date().getDay()) {
        case 0:
            console.log(day = "Pazar" + " Günlerden : " + gun);
            break;
        case 1:
            console.log(day = "Pazartesi" + " Günlerden : " + gun);
            break;
        case 2:
            console.log(day = "Salı" + " Günlerden : " + gun);
            break;
        case 3:
            console.log(day = "ÇARŞAMBA" + " Günlerden : " + gun);
            break;
        case 4:
            console.log(day = "Perşembe" + " Günlerden : " + gun);
            break;
        case 5:
            console.log(day = "Cuma" + " Günlerden : " + gun);
            break;
        case 6:
            console.log(day = "Cumartesi" + " Günlerden : " + gun);
    }
}
function hata() {
    //Örnek 3: break yazmayı unutunca oluşacak hata ile ilgili örnek
    var deger = 0;
    switch (deger) {
        case -1:
            console.log("-1 negatiftir.");
            break;
        case 0: // deger 0 olduğu için bu bölüm çalışacaktır.
            console.log(0);
        //break;// NOT: break yazmayı unuttuk.
        case 1: // break yazılmadığı için case 0 değeri için bu kısımda çalıştırılacaktır.
            console.log(1);
            break; // break yazdıldığı için case 2 değeri çalıştırılmayacaktır.
        case 2:
            console.log(2);
            break;
        default:
            console.log("default");
    }
}














//hata();
//gun();