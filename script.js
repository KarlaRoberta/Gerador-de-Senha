const sliderElement = document.querySelector("#slider"); 
const buttonElement = document.querySelector("#button");
const generatedPasswordValor = document.querySelector("#valor");

const generatedPasswordElement = document.querySelector("#password");

const generatePasswordButton = document.querySelector("#generate-password")
const containerPassword = document.querySelector("#container-password");



const copyPasswordButton = document.querySelector(".tooltip");
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#slider");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");


generatedPasswordValor.innerHTML = sliderElement.value;


generatedPasswordElement.innerHTML = password;


slider.oninput = function() {
  generatedPasswordValor.innerHTML = this.value;
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
const generatePassword = () => {
  let password = "";
  const passwordLength = +generatedPasswordValor.innerHTML;

  const selectedGenerators = [];

  if (lettersInput.checked) selectedGenerators.push(getLetterLowerCase, getLetterUpperCase);
  if (numbersInput.checked) selectedGenerators.push(getNumber);
  if (symbolsInput.checked) selectedGenerators.push(getSymbol);

  if (selectedGenerators.length === 0) return;

  for (let i = 0; i < passwordLength; i++) {
    const randomGenerator = selectedGenerators[Math.floor(Math.random() * selectedGenerators.length)];
    password += randomGenerator();
  }

  generatedPasswordElement.innerHTML = password;
  containerPassword.classList.remove("hide");
  password.innerHTML = password;
 novaSenha = password;
};


generatePasswordButton.addEventListener("click", () => {
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

copyPasswordButton.addEventListener("click", () => {
  const password = generatedPasswordElement.innerText;

  navigator.clipboard.writeText(password).then(() => {
    copyPasswordButton.innerText = "Senha copiada com sucesso!";

    setTimeout(() => {
      copyPasswordButton.innerText = "Clique na senha para copiar 👆";
    }, 1000);
  });
});




    
