// Zaprojektować listę oraz wyświetlić jej zawartość asynchronicznie (poprzez funkcję nextTick) (*)
var grades = ["1", "2", "3", "4", "5"];


function showGrades(index,callback){ 
    process.nextTick(function(){
    callback(index)});
    }

for (var index in grades){
(function(index)
{
showGrades(index,function()
{
console.log("Dostałem: " + grades[index]);
});
})(index);
}


// Zastosować pętlę wyrażeń zwrotnych do obsługi przy zastosowaniu rekurencji (także asynchronicznie) 
// var grades = ["1", "2", "3", "4", "5"];

// function wyswietlElement(grade, callback)
// {
// console.log("Dostałem ocenę: " + grade);
// if (grades.length)
// {
//     process.nextTick(function()
//     {
//         callback();
//     });
// }
// }

// function wyswietlListe(grades)
// {
//     var grade = grades.pop();
//     wyswietlElement(grade, function(){wyswietlListe(grades);});
// }

// wyswietlListe(grades);