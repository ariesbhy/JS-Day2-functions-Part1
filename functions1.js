/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName() {
  let printName = "Basmah";
  console.log(printName);
}
printName("Basmah");

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function sub(currentYear, birthYear) {
  return currentYear - birthYear;
}
function printAge(birth) {
  let currentyear = 2024;
  let Age = sub(currentyear, birth);
  console.log(birth);
  console.log(Age);
}

printAge(1997);

/**
 * Task 2:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */
function printAgeAndName(birthYear, name) {
  let currentyear = 2024;
  let Age = currentyear - birthYear;
  console.log(Age);
  console.log(`Hello my Name ${name} and my age ${Age}`);
}
printAgeAndName(1997, "Basmah");
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(language, name) {
  if (language == `en`) {
    console.log(`Hello ${name}`); // Hello ${name} || Hello Bashma, Aya
  } else if (language == `es`) {
    console.log(`Hola ${name}`);
  } else if (language == `fr`) {
    console.log(`Bonjour ${name}`);
  } else if (language == `tr`) {
    console.log(`Merhaba ${name}`);
  }
}

printHello("en", "Basmah");

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

printMax(25, 3);
