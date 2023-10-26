// let sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");

const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");

const containerPassword = document.querySelector("#container-password");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");


const getLetterLowerCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "!@#$%^&*(){}[]<>=/";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
) => {
    let password = "";
    const passwordLength = +lengthInput.value;

  const generators = [];

  if (lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }

  if (numbersInput.checked) {
    generators.push(getNumber);
  }

  if (symbolsInput.checked) {
    generators.push(getSymbol);
  }

  console.log(generators.length);

  if (generators.length === 0) {
    return;
  }

  for (i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }

 
};


buttonElement.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );
});



    
