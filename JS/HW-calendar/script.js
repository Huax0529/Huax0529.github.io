let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

window.onload = function () {
    createDate();
    addClickEvent();
}

function createDate() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let daysRow = "";
    let daysTag = document.querySelector('.days .row');
    const currentDate = document.querySelector('.current-date')

    for (let i = firstDayOfMonth; i > 0; i--) {
        daysRow += `<div class="day inactive">${lastDateOfLastMonth - i + 1}</div>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday;
        if (i === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear()) {
            isToday = "active";
        }
        else {
            isToday = "";
        }
        daysRow += `<div class="day ${isToday}">${i}</div>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        daysRow += `<div class="day inactive">${i - lastDayOfMonth + 1}</div>`;
    }
    daysTag.innerHTML = daysRow;
    currentDate.textContent = `${months[currentMonth]} ${currentYear}`;

}

function addClickEvent() {
    let otherMonthBtn = document.querySelectorAll('.calendar .header .col-md-2 button');
    otherMonthBtn.forEach(x => {
        x.addEventListener('click', function () {
            if(x.getAttribute('id') === "prev"){
                currentMonth --;
            }
            else{
                currentMonth ++;
            }

            if (currentMonth < 0 || currentMonth > 11) {
                date = new Date(currentYear, currentMonth);
                currentYear = date.getFullYear();
                currentMonth = date.getMonth();
            }
            
            createDate()
        })
    })
}




