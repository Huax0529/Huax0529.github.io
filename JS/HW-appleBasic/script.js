let totalPrice = 0;
let storagePrice = 0;
let wifiPrice = 0;

//點選顏色後更改外觀圖片
let color = document.querySelectorAll(".exterior .card");
color.forEach(x => {
    x.addEventListener('click', function () {
        let img = this.getAttribute('id');
        document.querySelector('#main-pic').src = img;
    })
})

//點選後取得容量價格,並計算總價
let storage = document.querySelectorAll(".storage .card");
storage.forEach(x => {
    x.addEventListener('click', function () {
        storagePrice = parseInt(this.getAttribute('id'));
        calTotalPrice();
    })
})

//點選後取得wifi價格,並計算總價
let wifi = document.querySelectorAll('.wifi .card')
wifi.forEach(x => {
    x.addEventListener('click', function () {
        wifiPrice = parseInt(this.getAttribute('id'));
        calTotalPrice();
    })
})


//計算總價方法
function calTotalPrice(){
    totalPrice = storagePrice + wifiPrice;
    changeTotalPriceTxt()
}

//更改總價顯示位置文字
function changeTotalPriceTxt(){
    let priceTxt= document.querySelector('.finalPrice h2');
    priceTxt.textContent = "共" + totalPrice + "元";
}

//點擊後滑動到指定位置
const exteriorBtns = document.querySelectorAll('.container .row .exterior button');
const storageBtns = document.querySelectorAll('.container .row .storage button');
const wifiBtns = document.querySelectorAll('.container .row .wifi button');
exteriorBtns.forEach(x => {
    x.addEventListener('click', function () {
        const storageBtn = document.querySelector('.storage');
        storageBtn.scrollIntoView({ behavior: 'smooth' });
    });
})

storageBtns.forEach(x => {
    x.addEventListener('click', function () {
        const wifiBtn = document.querySelector('.wifi');
        wifiBtn.scrollIntoView({ behavior: 'smooth' });
    });
})

wifiBtns.forEach(x => {
    x.addEventListener('click', function () {
        const finalPrice = document.querySelector('.finalPrice');
        finalPrice.scrollIntoView({ behavior: 'smooth' });
    });
})
