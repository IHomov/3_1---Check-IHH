let Btn = document.querySelector('button');


// event handler for the button
Btn.addEventListener('click', () => {
    let str = document.getElementById('inputData').value;
    Check_INN(str);

})


function Check_INN(indata) {
        let  hash = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
        let sum = 0;
        for (let i = 0; i < (indata.length - 1); ++i) {
            sum += indata[i] * hash[i];
        }
        let k = sum - (11 * (Math.floor(sum / 11)));

    if (k != indata[9]) {
            inputData.value = " ";
            return alert("number it's not correct, check it again");
        }
    Birthday(indata);
    Gender(indata);
    getAge(Birthday(indata));
}

function Birthday(count) {
    // birthday as the number of days that have elapsed since 01 / 01 / 1900
    let countDays = +count.substring(0, 5); 
    let date = (new Date(1900, 0, 0));
    date.setDate(date.getDate() + (countDays));
    let dateOfBirth = new Date(date);
    birthday.innerHTML = dateOfBirth.getDate()+ '.' + (dateOfBirth.getMonth()+1)+ '.'+ dateOfBirth.getFullYear();
    
}

function Gender(datagender) {
    let numberGen = +datagender.substring(8, 9);
    if(numberGen % 2 != 0) {
        gender.innerHTML = 'Male';
    } else {
        gender.innerHTML = 'Female';
    }
}

function getAge(input) {
        let now = new Date(); //Текущя дата
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
        let dob = new Date(input); //Дата рождения   
        let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
        let age; //Возраст
        //Возраст = текущий год - год рождения
        age = today.getFullYear() - dob.getFullYear();
        //Если ДР в этом году ещё предстоит, то вычитаем из age один год
        if (today < dobnow) {
            age = age-1;
        }
            return currentage.innerHTML = age;
}


