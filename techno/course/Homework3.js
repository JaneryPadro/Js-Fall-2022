/* Q1: print the length of the country name (without using string.length or length property from string-library)

let counrtyName.length; <-- not allowed
*/

let countryName = 'China'

let countryName_split_space = countryName.split('');
console.log(`\nsplit ' ' -> ${countryName_split_space}`);
console.log(`Length -> ${countryName_split_space.length}\n\n`);



/* Q2; find the number of words in the given sentence2*/

const sentence2 = "HeAlTh wAs EArlIer said To Be AbILity of the bOdY funcTiOnIng WElL.";






/* Q3: Create abbreviation for a 4-word sentence

'you live Only once' -> YLOO
'you Never waLK ALONe' -> YNWA */

const sentence3 = 'you Never waLK ALONe';

let AbbrYouNeverWalkAlone = sentence3.abbr('You Never Walk Alone');
console.log(`abbrSentence3 -> ${sentence3abbr}\n`);




/* Q4: Convert the string value in to Titlecase

'you live Only once' -> You Live Only Once
'you Never waLK ALONe'-> You Never Walk Alone
'have a GrEAT daY' -> ' Have A Great Day
*/

let sentence4 = 'have a GrEAT daY';

let sentence4TitleCase = sentence4.TitleCase();
console.log(`\nsentence4 -> ${sentence4}`);
console.log(`sentence4TitleCase -> ${sentence4TitleCase}\n`);


let sentence5 = 'you live Only once';

let sentence5TitleCase = sentence5.TitleCase();
console.log(`\nsentence5 -> ${sentence5}`);
console.log(`sentence5TitleCase -> ${sentence5TitleCase}\n`);

let sentence6 = 'you Never waLK ALONe';

let sentence6TitleCase = sentence6.TitleCase();
console.log(`\nsentence6 -> ${sentence6}`);
console.log(`sentence6TitleCase -> ${sentence6TitleCase}\n`);




