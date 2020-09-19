// Za pomocą liczników wykonaj zdarzenie wyświetlania liczby sekund co 1 sekundę od uruchomienia

// var liczba_sekund = 0;
// myIntervalt=setInterval(wypisywanieLiczbySekund,1000);

// function uaktualinijLiczbeSekund()
// {
//     liczba_sekund++;
// }

// function wypisywanieLiczbySekund()
// {
// uaktualinijLiczbeSekund();
// console.log(liczba_sekund);
// }

//Co jedną sekundę pięd razy wyświetlana litera ‘a’

// var char = 'a';

// var liczba_sekund = 0;
// myIntervalt=setInterval(wypisywanieLiczbySekund,1000);
// myIntervalt2=setInterval(wyswietlZnak,1000);

// function wyswietlZnak()
// {
//     for(var i=0; i<5; i++)
//     {      
//     console.log(char);
//     }
// }

// function uaktualinijLiczbeSekund()
// {
//     liczba_sekund++;
// }

// function wypisywanieLiczbySekund()
// {
// uaktualinijLiczbeSekund();
// console.log(liczba_sekund + ' sekunda');
// }


//Dla 30 elementowej tablicy (z alfabetem) wyświetlić po kolei co 0,5s litery przy czym jeżeli jest to samogłoska dodać przerwę 2 sekundy (uśpić licznik ) 

var tablicaCharow = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','m','n','o','ó','p','q','r','s','t','u','v','w','x','y','z'];
var tablicaSamoglosek = ['a','e','y','i','o','ą','ę','ó'];
var index = 0;

myIntervalt=setInterval(wypisywanieCharow);

function wypisywanieCharow()
{
           if(tablicaSamoglosek.includes(tablicaCharow[index]))
            {
                clearTimeout(myIntervalt); 
                setTimeout(function(){
                    myIntervalt=setInterval(wypisywanieCharow,500);
                    }); 
            }

            console.log(tablicaCharow[index++]);

            if(index >= tablicaCharow.length)
            {
                index = 0;
            }
}