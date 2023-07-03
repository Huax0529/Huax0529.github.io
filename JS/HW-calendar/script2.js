let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

window.onload = function () {
    createCurrentYearAndMonthTitle()
    createDate();
    addOtherMonthsBtn()
}

function createDate() {
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDay();
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let daysTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        daysTag += `<div class="day inactive">${lastDateOfLastMonth - i + 1}</div>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = "";
        if(currentDate.getFullYear() === currentYear && currentDate.getMonth() === currentMonth && currentDate.getDate() === i  ){
            isToday = "active";
        }
        daysTag += `<div class="day ${isToday}">${i}</div>`;
    }

    for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
        daysTag += `<div class="day inactive">${i}</div>`;
    }

    document.querySelector('.days .row').innerHTML = daysTag;
}

function createCurrentYearAndMonthTitle() {
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let currentYearAndMonthTitle = document.querySelector('.current-date h1');
    currentYearAndMonthTitle.innerHTML = `${months[currentMonth]} ${currentYear}`;
}

function addOtherMonthsBtn() {
    document.querySelectorAll('.header .col-md-2 button').forEach(button => {
        button.addEventListener('click', function () {
            if (button.id === "prev") {
                currentMonth--;
            }
            else {
                currentMonth++;
            }

            if (currentMonth < 0 || currentMonth > 11) {
                currentDate = new Date(currentYear, currentMonth);
                currentYear = currentDate.getFullYear();
                currentMonth = currentDate.getMonth();
            }
            createCurrentYearAndMonthTitle();
            createDate();
        })
    })
}


