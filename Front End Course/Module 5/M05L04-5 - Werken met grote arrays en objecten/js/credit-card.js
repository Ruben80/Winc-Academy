const isOver18 = (person) => person.age > 17;

const phoneNumber = (person) => person.phone;

const convertExpirationDate = (credit_card) => {
  const expiration = credit_card.credit_card.expiration.split("/");
  const expirationYear = parseInt("20" + expiration[1]);
  const expirationMonth = parseInt(expiration[0]) - 1; // Jan = 0, Dec = 11
  const expirationDay = 1; // Default
  credit_card.expiration_date = new Date(
    expirationYear,
    expirationMonth,
    expirationDay
  );
  return credit_card;
};

const cardExpiresInOneYear = ({ expiration_date }) => {
  const oneYearFromNow = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );
  const now = new Date();
  return expiration_date > now && expiration_date < oneYearFromNow;
};

const sortByExpirationDate = (card1, card2) =>
  sort_helper(card1.expiration_date > card2.expiration_date);

const getOldCreditcard = (personData) =>
  personData

    .filter(isOver18)
    .map(convertExpirationDate)
    .filter(cardExpiresInOneYear)
    .filter(phoneNumber)
    .sort(sortByExpirationDate);

const generateOldCreditcardHTML = ({ name, surname, phone, credit_card }) => {
  const nameSpan = document.createElement("span");
  nameSpan.innerHTML = `${name} ${surname}`;

  const phoneNumberSpan = document.createElement("span");
  phoneNumberSpan.innerHTML = `Phone: ${phone}`;

  const credit_cardSpan = document.createElement("span");
  credit_cardSpan.innerHTML = `Expires: ${credit_card.expiration}`;

  const creditcardNumberSpan = document.createElement("span");
  creditcardNumberSpan.innerHTML = `Creditcard number: ${credit_card.number}`;

  const li = document.createElement("li");
  li.appendChild(nameSpan);
  li.appendChild(creditcardNumberSpan);
  li.appendChild(phoneNumberSpan);
  li.appendChild(credit_cardSpan);

  return li;
};

const displayOldCreditcard = () => {
  getOldCreditcard(randomPersonData)
    .map(generateOldCreditcardHTML)
    .forEach(addToResultList);
};

document
  .querySelector(".credit-card")
  .addEventListener("click", displayOldCreditcard);
