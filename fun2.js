// "use strict";

// let hasDriversLicese = false;
// const passTest = true;

// passTest === true ? hasDriverLicese === true : hasDriverLicese === false;

// console.log(passTest);

// if (passTest) hasDriversLicese = true;
// if (hasDriversLicese) console.log("i can drive 😋");

// const interface = "audio";
// const private = 765;

// *** function ***

// function logger() {
//   console.log("my name is tahsin");
// }

// logger(); // its known as invoke , calling , running the function
// logger();

// function fruitProcesser(apple, orange) {
//   // console.log(apple, orange);
//   const juice = `we need ${apple} apples and we need ${orange}
//   orange to make a perfect juice`;
//   return juice;
// }

// const appleJuice = fruitProcesser(5, 0);
// console.log(appleJuice);
// const orangeJuice = fruitProcesser(0, 3);
// console.log(orangeJuice);

//function decleration
//we can define earlier the values in function dec menhod

// const actualAge = calAge(2022, 1994);

// function calAge(now, birthYear) {
//   return now - birthYear;
// }

// console.log(actualAge);

// function expression
// we cannot define earlier the values in function exp menhod
// this happens bcuz of a process known as hoisting

// const age2 = function (now, birthYear) {
//   return now - birthYear;
// };
// const secondAge = age2(2022, 1995);
// console.log(secondAge);

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} people and
//   its capital is ${capitalCity}`;
// }

// const indiaCountry = describeCountry("india", 1500000000, "delhi");
// const chinaCountry = describeCountry("china", 2000000000, "beijing");
// const pakistanCountry = describeCountry("pakistan", 200000000, "islamabad");
// console.log(indiaCountry, pakistanCountry, chinaCountry);

// function percentageOfWorld1(
//   population,
//   countryPopulation,
//   country,
//   capitalCity
// ) {
//   return `${country} has ${countryPopulation} people, which makes it ${
//     (countryPopulation / population) * 100
//   } percentage of the world population, and has its capital ${capitalCity}`;
// }
// const highChi = percentageOfWorld1(
//   79000000000,
//   14410000000,
//   "china",
//   "beijing"
// );
// // console.log(highChi);
// const highInd = percentageOfWorld1(
//   79000000000,
//   1500000000,
//   "india",
//   "new delhi"
// );
// const highAmr = percentageOfWorld1(
//   79000000000,
//   330000000,
//   "america",
//   "washington dc"
// );
// console.log(highChi, highInd, highAmr);

// const percentageOfWorld1 = function (
//   population,
//   countryPopulation,
//   country,
//   capitalCity
// ) {
//   return `${country} has ${countryPopulation} people, which makes it ${
//     (countryPopulation / population) * 100
//   } percentage of the world population, and has its capital ${capitalCity}`;
// };
// const highChi = percentageOfWorld1(
//   79000000000,
//   14410000000,
//   "china",
//   "beijing"
// );
// // console.log(highChi);
// const highInd = percentageOfWorld1(
//   79000000000,
//   1500000000,
//   "india",
//   "new delhi"
// );
// const highAmr = percentageOfWorld1(
//   79000000000,
//   330000000,
//   "america",
//   "washington dc"
// );
// console.log(highChi, highInd, highAmr);

// const scoreDolphins = (44 + 23 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy!");
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy 😭');
// }

// const calcAverage = function (teamName, sc1, sc2, sc3) {
//   return `${teamName} average score is ${(sc1 + sc2 + sc3) / 3}`;
// };
// const teamDol = calcAverage("Dolphins", 85, 54, 41);
// const teamKol = calcAverage("Koalas", 7, 14, 29);

// // console.log(teamDol, teamKol);

// function checkWinner(avgDol, avgKol) {
//   return avgDol > avgKol ? `Dolphins win ${teamDol}` : `Koalas win ${teamKol}`;
// }
// const realWinner = checkWinner(teamDol, teamKol);
// console.log(realWinner);

/// *** challenge 1

// const calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;
// //   return `${teamName} average score is ${atk}`;
// //
// const teamDol = calcAverage(44, 23, 71);
// const teamKol = calcAverage(65, 54, 49);

// console.log(teamDol, teamKol);

// function checkWinner(avgDol, avgKol) {
//   const iu =
//     avgDol > avgKol ? `dolphins win ${avgDol}` : `koalas win ${avgKol}`;
//   return iu;
// }
// const realWinner = checkWinner(teamDol, teamKol);
// console.log(realWinner);

/// challenge ends

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
// const checkWinner = function (avgDolphins, avgKoalas) {
//   return avgDolphins >= 2 * avgKoalas
//     ? `dolhins win ${avgDolphins}`
//     : `koalas wins ${avgKoalas}`;
// };
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// *** array ***

// let friends = ["sunny", "masud", "sintu"];

// // let salries = new array(5000, 10000, 50000);

// console.log(friends[(1, 0)]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "imran";

// console.log(friends);

//////////////////////////////////////////////////

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
*/

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

// calcTip(100);
// console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals, bills, tips);
