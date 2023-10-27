const sliderElement = document.querySelector("#slider"); 
const buttonElement = document.querySelector("#button");

const generatedPasswordElement = document.querySelector("#valor");


const containerPassword = document.querySelector("#container-password");

const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#slider");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#password");

generatedPasswordElement.innerHTML = sliderElement.value;

slider.oninput = function() {
  generatedPasswordElement.innerHTML = this.value;
}

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

const generatePassword= (
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
) => {
    let password = "";

    const passwordLength = +generatedPasswordElement.value;

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
      const randomValue = generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }
  
  password = password.slice(0, passwordLength);
  
  containerPassword.classList.remove("hide");
  password.innerHTML = password;
  novaSenha = password;
 
};


buttonElement.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );
});

containerPassword.addEventListener("click", () => {
  generatePasswordContainer.classList.toggle("hide")
});

copyPasswordButton.addEventListener("click", (e) => {
  e.preventDefault();

  const password = generatedPasswordElement.querySelector("h4").innerText;

  navigator.clipboard.writeText(password).then(() => {
    copyPasswordButton.innerText = "Senha copiada com sucesso!";

    setTimeout(() => {
      copyPasswordButton.innerText = "Copiar";
    }, 1000);
  });
});




    
