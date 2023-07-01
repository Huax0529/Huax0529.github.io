let answer = '';
let input = document.querySelector("input");
let screen = document.querySelector(".screen");
let count = 0;
input.disabled = true;
alert(`提示:\n1.點擊開始\n2.請輸入不重複的4位數字\n3.提示以XAYB形式呈現，直到猜中為止。其中X表示位置正確的數的個數，而Y表示數字正確而位置不對的數的個數。\n例如，當謎底為8123，而猜謎者猜1052時，提示為0A2B。\n例如，當謎底為5637，而猜謎者猜4931時，提示為1A0B。`);
document.querySelectorAll(".btn-num").forEach(x => {
    x.disabled = true;
    x.addEventListener('click', function (a) {
        a.target.disabled = true;
        input.value += a.target.innerText;
    })
})
let btnStart = document.querySelector(".btn-start")
btnStart.addEventListener('click', function () {
    answer = createNum();
    btnAnswer.disabled = false;
    btnRestart.disabled = false;
    press.disabled = false;
    btnStart.disabled = true;
    input.disabled = false;
    alert("遊戲開始!!")
    document.querySelectorAll(".btn-num").forEach(x => {
        x.disabled = false;
    })
})
let btnAnswer = document.querySelector(".btn-answer")
btnAnswer.addEventListener('click', function () {
    alert(answer);
    input.value = '';
})
btnAnswer.disabled = true;

let btnRestart = document.querySelector(".btn-restart")
btnRestart.disabled = true;
btnRestart.addEventListener('click', function () {
    answer = createNum();
    clear();
    btnStart.disabled = true;
    screen.innerText = '';
    alert("重新開始!");
    count = 0;
    numButtonAble();
})


let press = document.querySelector('.btn-press');
press.disabled = true;
press.addEventListener('click', function () {
    win();
    input.value = '';
    numButtonAble();
})

document.querySelector(".btn-tip").addEventListener('click', function () {
    alert(`提示:\n1.點擊開始\n2.請輸入不重複的4位數字\n3.提示以XAYB形式呈現，直到猜中為止。其中X表示位置正確的數的個數，而Y表示數字正確而位置不對的數的個數。\n例如，當謎底為8123，而猜謎者猜1052時，提示為0A2B。\n例如，當謎底為5637，而猜謎者猜4931時，提示為1A0B。`);
})

document.querySelector('.btn-clear').addEventListener('click', clearInput);

// function insertNum(a) {
//     input.value += a.target.innerText;
//     a.target.disabled = true;
// }
function createNum() {
    let numbers = []; // 用于存储已生成的数字
    while (numbers.length < 4) {
        let randomNumber = Math.floor(Math.random() * 10).toString();
        if (numbers.indexOf(randomNumber) === -1) {
            // 检查数字是否已存在
            numbers.push(randomNumber);
        }
    }
    // 将数字连接成字符串，确保开头为零的情况
    let uniqueNumber = numbers.join("");
    return uniqueNumber;
}

function win() {
    let a = 0;
    let b = 0;
    inputNum = input.value.trim()
    if (!isNaN(inputNum) && inputNum.length == 4 && !isRepeat(inputNum)) {
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] == inputNum[i]) {
                a++;
            }
            else if (inputNum.includes(answer[i])) {
                b++;
            }
        }
        count++;
        screen.innerText += `第${count}次:${inputNum}:${a}A${b}B\n`
        if (a == 4) {
            screen.innerText += `恭喜答對,答案為${answer}\n`;
            alert(`恭喜答對,答案為${answer}`);
        }
    }
    else {
        alert("請正確輸入4位不重複的數字");
    }
}

function clear() {
    input.value = '';
}

function isRepeat(num) {
    let numArray = num.split('');
    for (let i = 0; i < numArray.length; i++) {
        for (let j = i + 1; j < numArray.length; j++) {
            if (numArray[i] === numArray[j]) {
                return true;
            }
        }
    }
    return false;
}

//查到更簡單檢查重複的寫法!! set會把重複數值自動刪除
// function isRepeat(num) {
//     const numSet = new Set(num.split(''));
//     return numSet.size !== num.length;
//  }

function numButtonAble() {
    document.querySelectorAll(".btn-num").forEach(x => {
        x.disabled = false;
    })
}

function clearInput() {
    clear();
    numButtonAble();
}