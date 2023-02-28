let languages = ["Pyton", "C++", "C#", "PHP"];
let found = false;

for (let i = 0; i < languages.length; i++) {
  if (languages[i] === "Java Script") {
    found = true;
    break;
  }
}

if (!found) {
  console.log("Значення Java Script в списку немає, додаємо в масив");
  languages.push("Java Script");
}
