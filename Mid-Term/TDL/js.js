let addBtn = document.getElementById('button-addon2')
let storage = "storage"
let storageValue = []
let obj, int
// [
//     {id:xxx,text:xxx,checked:"checked"},
//     {},
//     {}

// ]
window.onload = function () {
    render()//渲染
    
}
//增加新增的click事件
addBtn.addEventListener('click', function () {
    let todoInput = document.getElementById('todoId')
    let todoText = todoInput.value.trim()

    if (dontBeStupid(todoText)) {
        return
    }
    else {
        getLocalstorageValue(storage)
        let now = new Date().getTime()
        storageValue.push({ id: now, text: todoText, checked: "" })
        localStorage.setItem(storage, JSON.stringify(storageValue))
        todoInput.value = ""
        render()
    }
})
//增加打勾的click事件

//渲染
function render() {
    let eventGroup = document.querySelector('#eventGroup')
    eventGroup.innerHTML = ``;
    getLocalstorageValue(storage)
    storageValue.forEach(x => {
        let div = document.createElement('div')
        div.setAttribute('class', 'col-12 col-md-10 border mx-auto d-flex mb-4');
        div.setAttribute('id', `${x.id}`)
        div.innerHTML += `
                    <div class="form-check my-auto">
                        <input ${x.checked}  class="form-check-input" type="checkbox" value="" id="flexCheckDisabled">
                    </div>
                    <div class="input-group my-2">
                        <input  value="${x.text}" type="text" class="form-control" placeholder="" disabled>
                        <button onclick="editBtn(${x.id})" class="btn btn-warning" type="button">編輯</button>
                        <button onclick="saveBtn(${x.id})" class="btn btn-success d-none" type="button">保存</button>
                        <button onclick="deleteBtn(${x.id})" class="btn btn-danger" type="button">刪除</button>
                    </div>`;
        eventGroup.append(div)
        isChecked(x.id)
    })
}
function isChecked(id) {
    let idDom = document.getElementById(`${id}`)
    idDom.querySelector('.form-check-input').addEventListener('click', function () {
        let check = idDom.querySelector('.form-check-input').checked
        getLocalstorageValue(storage)
        findTarget(id)
        obj.checked = check ? "checked" : ""
        storageValue.splice(ind, 1, obj)
        setLocalstorage(storageValue)
        render()
    })
}
//編輯按鈕
function editBtn(id) {
    let idDom = document.getElementById(`${id}`)
    idDom.querySelector('.form-control').removeAttribute('disabled') //打勾右邊的輸入框
    idDom.querySelector('.btn-warning').classList.add('d-none')//把編輯消失
    idDom.querySelector('.btn-success').classList.remove('d-none')//讓保存出現
}
//保存按鈕
function saveBtn(id) {
    let idDom = document.getElementById(`${id}`)
    let check = idDom.querySelector('.form-check-input').checked
    let text = idDom.querySelector('.form-control').value.trim()
    if (dontBeStupid(text)) {
        return
    }
    else {
        getLocalstorageValue(storage)
        findTarget(id)
        obj.checked = check ? "checked" : ""
        obj.text = text
        storageValue.splice(ind, 1, obj)
        setLocalstorage(storageValue)
        render()
    }
}
//刪除按鈕
function deleteBtn(id) {
    let idDom = document.getElementById(`${id}`)
    findTarget(id)
    storageValue.splice(ind, 1)
    setLocalstorage(storageValue)
    render()
}
//防呆
function dontBeStupid(input) {
    if (!input) {
        alert("請輸入內容")
        return true
    }
    return false
}
//抓localstorage整筆資料
function getLocalstorageValue(storageKey) {
    if (localStorage.getItem(storageKey)) {
        storageValue = JSON.parse(localStorage.getItem(storageKey))
    }
}
//找localstorage特定資料
function findTarget(id) {
    obj = storageValue.find(x => x.id == id)
    ind = storageValue.indexOf(obj)
}
//把資料存回localstorage
function setLocalstorage(storageResult) {
    localStorage.setItem(storage, JSON.stringify(storageResult))
}

