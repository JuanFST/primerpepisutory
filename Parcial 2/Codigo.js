
/*1)
while (no haya mas manzanas)
    if (A es verde)
    {
        "Lo encontre"
    }
    else    Sigo



2)

var A
var B

if (A = B) 
    {
        "ingrese numeros distintos"
    }
else if (A > B) 
    {
        "A es mayor que B"
    }
    else "B es mayor que A"
    

3)

var n = 0
var suma = 0

while (n <= 10)  
    n += + 1
    suma += + n
("la suma de los 10 primeros numeros es : ", suma)






4)

var A 
var B 
var C 

"Ingrese 3 numeros distintos"
Input var A
Input var C
Input var B

if (A = B)
{
    "ingrese numeros diferentes"
}
else if (A = C)
    {
        "Ingrese numeros diferentes"
    }   
    else if (C = B) {
        "Ingrese numeros diferentes"
    }
    else if (A>B) 
    {
        if (A>C) 
        {
            if (B>C) 
            {
                "A es el mayor y C es el menor"
            }
            else "A es el mayor y B es el menor"
        }
        else if (C>B)
            "C es el Mayor y B es el menor"
    }
    else if (B>C) 
    {
        if (A>C) 
        {
            "B es el mayor y C es el menor"
        }
        else " B es el mayor y A es el menor"
    }
    else if (C>A) 
    {
        "C es el mayor y A es el menor"
    }

   
5)*/
var i
var suma = 0 

for (i=1; i <= 10; i++) 
{
    suma += i
}
console.log (suma)



var nros = ["10" , "5"]
console.log(nros.sort(function(a,b){return a-b}))
