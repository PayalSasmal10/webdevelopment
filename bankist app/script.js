'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements){
  movements.forEach(function(mov, i){
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
  `;

  containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account3.movements); for one account hardcoded stuff

// calculate the display amount
const calDisplayBalance = function(accnt){
  accnt.balance = accnt.movements.reduce((acc, mov) => acc+ mov, 0);
  labelBalance.textContent = `${accnt.balance} €`;
};

// calDisplayBalance(account1.movements); for one account hardcoded stuff

// Income and withdrawls without hard coded interest value.
const calDisplaySummery = function(accnt){
  const incomes = accnt.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const withdrawal = accnt.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawal)} €`;

  const interest = accnt.movements.filter(mov => mov > 0).map(deposite => (deposite * accnt.interestRate)/100)
  .filter((int, i, arr) =>{
    // console.log(arr);
    return int > 1;
  })
  .reduce((acc,mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest} €`;

}
// calDisplaySummery(account1.movements); for one account hardcoded stuff


// const user = 'Steven Thomas Williams';
const createUsernames = function(accs){
  accs.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
 
};
createUsernames(accounts);
// console.log(accounts);

// UI balance updates
const UIPath = function(currentAccount){
  
  // Display movements
  displayMovements(currentAccount.movements);
  // Display balance
  calDisplayBalance(currentAccount);

  // Display summery
  calDisplaySummery(currentAccount);
}

// Event Handler for login.
let currentAccount;

btnLogin.addEventListener('click', function(e){
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // UIPath Displays
    UIPath(currentAccount);
    
  }
});

// Transfer to diff account

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find(acc=> acc.username === inputTransferTo.value);
  console.log(amount, recieverAccount);

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferTo.blur();

  if(amount > 0 && recieverAccount && currentAccount.balance >= amount && recieverAccount.username !== currentAccount.username){
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);
    
    // UIPath Displays
    UIPath(currentAccount);
  }

})

// close the account
btnClose.addEventListener("click", function(e){
  e.preventDefault();

  if(currentAccount.username === inputCloseUsername.value && Number(inputClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc=> acc.username === currentAccount.username);
    console.log(index);

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// Magic chaining method
// const euroToUsd = 1.1

// const totalDepositeUSD = movements.filter(mov => mov > 0).map((mov, i, arr) =>{ 
//     return mov* euroToUsd 
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositeUSD);

// Find method
