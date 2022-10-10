/* convert temp values to different units 
F -> C
F -> K

C -> F
C -> K
 
K -> F
K -> C

 formula 
 T(°C) = (T(°F) - 32) / 1.8


*/
/* example given */
let FTemp1=60
let CTemp1=(FTemp1 - 32) / 1.8;
console.log(`${FTemp1} °F is equals to ${CTemp1}°C`);

/* F - > K
T(K) = (T(°F) + 459.67)× 5/9 */

let FTemp2=65
let KTemp2=(FTemp2 + 459.67)* 5/9;

console.log(`${FTemp2} °F is equals to ${KTemp2}°K`);

/* C -> F
T(°F)= T(°C)*1.8 + 32*/

let CTemp3= 30
let FTemp3= (CTemp3)*1.8 + 32

console.log()

/*C -> K
T(K) = T(°C) + 273.15*/

let CTemp4= 25
let KTemp4=(CTemp4) + 273.15

console.log()

/*k -> F
T(°F) = T(K) × 9/5 - 459.67*/

let KTemp5=100
let FTemp5=(KTemp5) * 9/5 - 459.67

console.log()

/*K -> C
T(°C) = T(K) - 273.15*/

let KTemp6=150
let CTemp6=(KTemp6) - 273.15

console.log()