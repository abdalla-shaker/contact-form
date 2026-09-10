const nameInp = document.getElementById("full_name");
const emailInp = document.getElementById("email");
const subjectInp = document.getElementById("subject");
const messageInp = document.getElementById("message");
const formEl = document.querySelector(".form");

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

  return false;
};

const emailChecker = (el) => {
  const emailIsEmpty = emptyChecker(el);
  if (emailIsEmpty === true) {
    errorMessageRemover(el);
    return true;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailIsValid = emailRegex.test(el.value);

  if (!emailIsValid && !emailIsEmpty) {
    errorMessageGenerator(el, "Please enter a valid Email.");
    return true;
  }

  return false;
};

const submissionHandler = (e) => {
  e.preventDefault();

  const nameIsNotValid = emptyChecker(nameInp);
  const subjIsNotValid = emptyChecker(subjectInp);
  const messageNotIsValid = emptyChecker(messageInp);
  const emailIsNotValid = emailChecker(emailInp);

  if (
    nameIsNotValid ||
    subjIsNotValid ||
    messageNotIsValid ||
    emailIsNotValid
  ) {
    errorMessageGenerator(
      emailInp,
      `Please don't leave the email field Empty.`,
    );
    return;
  }

  const formData = new FormData(e.target);

  const userData = Object.fromEntries(formData.entries());

  const head = document.createElement("h1");
  head.innerText = `OK, ${userData.full_name}`;
  head.classList.add("head-message");
  const paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-message");
  paragraph.innerText = "Your email was sent successfully";

  const container = document.createElement("div");
  container.append(head, paragraph);

  document.body.append(container);
  formEl.remove();
};

nameInp.addEventListener("change", emptyChecker.bind(null, nameInp));
subjectInp.addEventListener("change", emptyChecker.bind(null, subjectInp));
messageInp.addEventListener("change", emptyChecker.bind(null, messageInp));
emailInp.addEventListener("change", emailChecker.bind(null, emailInp));
formEl.addEventListener("submit", submissionHandler);
