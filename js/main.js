let start = document.getElementById("start"),
    budgetVal = document.getElementsByClassName("budget-value")[0],
    dayBudgetVal = document.getElementsByClassName("daybudget-value")[0],
    levelVal = document.getElementsByClassName("level-value")[0],
    expenVal = document.getElementsByClassName("expenses-value")[0],
    optExpenVal = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeVal = document.getElementsByClassName("income-value")[0],
    monthsavVal = document.getElementsByClassName("monthsavings-value")[0],
    yearsavVal = document.getElementsByClassName("yearsavings-value")[0],



    expensesItem = document.getElementsByClassName("expenses-item"),
    expItemBtn = document.getElementsByTagName("button")[0],
    optExpBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optExpItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelectorAll(".choose-income")[0],
    savings = document.querySelectorAll("#savings")[0],
    sumValue = document.querySelectorAll(".choose-sum")[0],
    percentValue = document.querySelectorAll(".choose-percent")[0],
    year = document.querySelectorAll(".year-value")[0],
    month = document.querySelectorAll(".month-value")[0],
    day = document.querySelectorAll(".day-value")[0];


    let money, time;


  
    

start.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "1989-12-31");
    money = +prompt("Ваш бюджет на месяц?", 90000);

    while(isNaN(money) || money == '' || money == null) {
        
    }
    appData.budget = money;
    appData.timeData = time;
    budgetVal.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});
    
expItemBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let item = expensesItem[i].value,
            cost = expensesItem[++i].value;
           
        if ( (isNaN(item)) && (typeof(item)) != null && (typeof(cost)) != null && 
        item != '' && cost != '' && item.length < 10) {
            console.log("doneeeeee");
            
            appData.expenses[item] = cost;
            sum += +cost;
        } else {
            optExpBtn.disabled = true;
            i--;
        }
    }
    expenVal.textContent = sum;
});

optExpBtn.addEventListener('click', function() {
    for(let i = 0; i < optExpItem.length; i++) {
        let optional = optExpItem[i].value;
    if(typeof(optional)=== 'string' && optional != '' && optional != null) {
        
        appData.optionalExpenses[i] = optional;
        console.log("good");
        optExpenVal.textContent += appData.optionalExpenses[i] + ' ';
   
        } 
    }
});

countBtn.addEventListener('click', function() {


    if(appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetVal.textContent = appData.moneyPerDay; 
    
        if(appData.moneyPerDay < 100) {
            levelVal.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelVal.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelVal.textContent = "Высокий уровень достатка";
        } else {
            levelVal.textContent = "Произошла ошибка";
        }
    }else {
        dayBudgetVal.textContent = "Произошла ошибка";
    }    
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
        appData.income = items.split(', ');
        incomeVal.textContent = appData.income;
});

savings.addEventListener('click', function() {
if (appData.savings == true) {
    appData.savings = false; 
    
} else {
    appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true ) {
        let sum = +sumValue.value,
            percent = +percentValue.value;


    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthsavVal.textContent = appData.monthIncome.toFixed(1);
    yearsavVal.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if(appData.savings == true ){
        let sum = +sumValue.value,
        percent = +percentValue.value;


appData.monthIncome = sum/100/12*percent;
appData.yearIncome = sum/100*percent;

    monthsavVal.textContent = appData.monthIncome.toFixed(1);
    yearsavVal.textContent = appData.yearIncome.toFixed(1); 
    }
    });
    

let appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false 
};
   











