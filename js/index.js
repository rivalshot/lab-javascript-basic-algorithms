// Weronika Marczak & Hugo Dib

let hacker1 = 'Weronika'
console.log(`driver's name is ${hacker1}`)

let hacker2 = 'Hugo'
console.log(`navigator's name is ${hacker2}`)

console.log(`The driver has the longest name, it has ${hacker1.length} characters`)


for (let n of hacker1) {
    console.log(n.toUpperCase());
}

for (let number = hacker2.length - 1; number > -1; number--) {
  console.log(hacker2[number]);
}

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
  console.log(
    "Yo, the navigator goes first definitely."
  );
}
