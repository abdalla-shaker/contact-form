const nameInp = document.getElementById("full_name");
const emailInp = document.getElementById("email");
const subjectInp = document.getElementById("subject");
const messageInp = document.getElementById("message");
const btn = document.querySelector("button");

const errorMessageGenerator = (el, message) => {
  const errorParagraph = document.createElement("p");
  errorParagraph.innerText = message;
  errorParagraph.classList.add("error");
  el.parentElement.append(errorParagraph);
};

const errorMessageRemover = (el) => {
  el.parentElement.querySelector("p").remove();
};

const emptyChecker = (el) => {
  if (el.value.trim() !== "" && el.parentElement.querySelector("p") !== null) {
    errorMessageRemover(el);
  }

  if (el.value.trim() === "") {
    errorMessageGenerator(
      el,
      `Please don't leave the ${el.name === "full_name" ? el.name.split("_")[1] : el.name} field Empty.`,
    );
    return true;
  }
};

const emailChecker = (el) => {
  const emailIsEmpty = emptyChecker(el);
  if (emailIsEmpty === true) {
    errorMessageRemover(el);
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailIsValid = emailRegex.test(el.value);

  if (!emailIsValid && !emailIsEmpty) {
    errorMessageGenerator(el, "Please enter a valid Email.");
    return;
  }
};

nameInp.addEventListener("change", emptyChecker.bind(null, nameInp));
subjectInp.addEventListener("change", emptyChecker.bind(null, subjectInp));
messageInp.addEventListener("change", emptyChecker.bind(null, messageInp));
emailInp.addEventListener("change", emailChecker.bind(null, emailInp));
