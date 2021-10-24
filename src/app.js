konsol . günlük ( "Merhaba Kodlama.io" )

//JS tipi güvenli değil
let  dolarBugun  =  9.30

let  dolarDun  =  9.20
dolarDun  =  "9.20"
{
      dolarDun  =  9.10
}

konsol . günlük ( dolarDun )

const  euroDun  =  11.2
//euroDun = 11

konsol . günlük ( euroDun )

//dizi
//deve Muhafazası
//PascalCasing
let  konutKredileri  =  [ "Konut kredisi" , "Emlak Konut Kredisi" , "Kamu Konut Kredisi" , "Özel Konut Kredisi" ]

konsol . günlük ( "<ul>" )
for ( let  i  =  0 ; i < konutKredileri . uzunluk ; i ++ ) {
    konsol . log ( "<li>" + konutKredileri [ i ] + "</li>" )
}
konsol . günlük ( "</ul>" )

{ /* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */ }

konsol . log (konutKredileri)