let totalPrice = 0;
let storagePrice = 0;
let wifiPrice = 0;
let ramPrice = 0;

//取得top-buttons元素
let ipadAir = document.querySelector('.btn-danger');
ipadAir.addEventListener('click', function () {
    let ipadAirHtml =
        `
    <div class="exterior d-flex flex-wrap">
    <h2>外觀。 <span>挑選喜愛的顏色。</span> </h2>
    <button class="card" id="gray.jpg">
        <div class="pic">
            <img src="./buttonPic/gray.png" alt="">
        </div>
        <div class="card-body">
            <p class="card-text">太空灰色</p>
        </div>
    </button>
    <button class="card" id="blue.jpg">
        <div class="pic">
            <img src="./buttonPic/blue.png" alt="">
        </div>
        <div class="card-body">
            <p class="card-text">藍色</p>
        </div>
    </button>
    <button class="card" id="pink.jpg">
        <div class="pic">
            <img src="./buttonPic/pink.png" alt="">
        </div>
        <div class="card-body">
            <p class="card-text">粉紅色</p>
        </div>
    </button>
    <button class="card" id="purple.jpg">
        <div class="pic">
            <img src="./buttonPic/purple.png" alt="">
        </div>
        <div class="card-body">
            <p class="card-text">紫色</p>
        </div>
    </button>
    <button class="card" id="gold.jpg">
        <div class="pic">
            <img src="./buttonPic/gold.png" alt="">
        </div>
        <div class="card-body">
            <p class="card-text">星光色</p>
        </div>
    </button>
</div>
<div class="storage">
    <h2>儲存裝置。 <span>選擇需要的儲存空間大小。</span> </h2>
    <button class="card" id="18900">
        <div class="card-body">
            <h3>64 <span>GB</span> </h3>
            <p class="card-text">NT$18,900 起</p>
        </div>
    </button>
    <button class="card" id="23900">
        <div class="card-body">
            <h3>256 <span>GB</span> </h3>
            <p class="card-text">NT$23,900 起</p>
        </div>
    </button>
    <div class="card">
        <div class="card-body">
            <h3>不確定需要多少儲存空間？</h3>
            <p class="card-text">你的 iPad Air 儲存空間愈大， 你就有愈多空間儲存數位內容，滿足今日所需，也滿足未來需求。</p>
        </div>
    </div>
</div>
<div class="wifi">
    <h2>連線能力。 <span>選擇連線方式。</span> </h2>
    <div class="card" id="0">
        <button class="card-body">
            <div class="text">
                <h3>Wi-Fi</h3>
                <p class="card-text">每部 iPad 都可連接到 Wi-Fi 網路，使你能保持連線。</p>
            </div>
            <div class="price">
                NT$18,900起
            </div>
        </button>
    </div>
    <div class="card" id="4300">
        <button class="card-body">
            <div class="text">
                <h3>Wi-Fi + 行動網路</h3>
                <p class="card-text">Wi-Fi + 行動網路機型讓你在無法使用 Wi-Fi 時也能進行連線。</p>
            </div>
            <div class="price">
                NT$23,900起
            </div>
        </button>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="text">
                <h4>想要進一步了解 Wi-Fi + 行動網路機型？</h4>
                <p class="card-text">如果現場沒有可供使用的 Wi-Fi，Wi-Fi + 行動網路機型可讓你透過行動網路數據方案保持連線。
                    購買 Wi-Fi + 行動網路機型後，需要設定行動網路連線。</p>
            </div>
        </div>
    </div>
</div>
<div class="finalPrice">
    <h2>NT$18,900起</h2>
    <p>含營業稅和其他法定稅費</p>
</div>
</div>
</div>
    `
    document.querySelector('.col-md-3').innerHTML = "";
    document.querySelector('.col-md-3').innerHTML = ipadAirHtml;
    attachEventListeners()
})
let iphone = document.querySelector('.btn-warning');
iphone.addEventListener('click', function () {
    let iphoneHtml = `
    <div class="exterior d-flex flex-wrap">
    <h2>外觀。 <span>挑選喜愛的顏色。</span> </h2>
    <button class="card" id="./iphone/藍色.jpg">
        <div class="pic">
            <img src="./iphone/buttonPics/finish-blue-202010.jpg" alt="">
        </div>
        <div class="card-body">
            <p class="card-text">藍色</p>
        </div>
    </button>
    <button class="card" id="./iphone/紫色.jpg">
        <div class="pic">
            <img src="./iphone/buttonPics/finish-purple-202104.jpg" alt="">
        </div>
        <div class="card-body">
            <p class="card-text">紫色</p>
        </div>
    </button>
    <button class="card" id="./iphone/綠色.jpg">
        <div class="pic">
            <img src="./iphone/buttonPics/finish-green-202010.jpg" alt="">
        </div>
        <div class="card-body">
            <p class="card-text">綠色</p>
        </div>
    </button>
    <button class="card" id="./iphone/黑色.jpg">
        <div class="pic">
            <img src="./iphone/buttonPics/finish-black-202010.jpg" alt="">
        </div>
        <div class="card-body">
            <p class="card-text">黑色</p>
        </div>
    </button>
</div>
<div class="storage">
    <h2>儲存裝置。 <span>選擇需要的儲存空間大小。</span> </h2>
    <button class="card" id="20900">
        <div class="card-body">
            <h3>64 <span>GB</span> </h3>
            <p class="card-text">NT$20,900 起</p>
        </div>
    </button>
    <button class="card" id="22500">
        <div class="card-body">
            <h3>128 <span>GB</span> </h3>
            <p class="card-text">NT$22,500 起</p>
        </div>
    </button>
    <button class="card" id="26000">
        <div class="card-body">
            <h3>256 <span>GB</span> </h3>
            <p class="card-text">NT$26,000 起</p>
        </div>
    </button>
    <div class="card">
        <div class="card-body">
            <h3>不確定需要多少儲存空間？</h3>
            <p class="card-text">你的 iPad Air 儲存空間愈大， 你就有愈多空間儲存數位內容，滿足今日所需，也滿足未來需求。</p>
        </div>
    </div>
</div>

<div class="finalPrice">
    <h2>NT$20,900起</h2>
    <p>含營業稅和其他法定稅費</p>
</div>
</div>
</div>
    `
    document.querySelector('.col-md-3').innerHTML = "";
    document.querySelector('.col-md-3').innerHTML = iphoneHtml;
    attachEventListeners()
})

let mac = document.querySelector('.btn-success');
mac.addEventListener('click', function () {
    let macHtml = `
    <div class="exterior d-flex flex-wrap">
    <h2>外觀。 <span>挑選喜愛的顏色。</span> </h2>
    <button class="card" id="./Mac/銀色.jpg">
        <div class="pic">
            <img src="./Mac/button pics/circle-silver.jpg" alt="">
        </div>
        <div class="card-body">
            <p class="card-text">銀色</p>
        </div>
    </button>
    <button class="card" id="./Mac/太空灰.jpg">
        <div class="pic">
            <img src="./Mac/button pics/circle-space-gray.png" alt="">
        </div>
        <div class="card-body">
            <p class="card-text">太空灰</p>
        </div>
    </button>
</div>
<div class="ram">
    <h2>記憶體。 <span>選擇需要的記憶體。</span> </h2>
    <button class="card" id="0">
        <div class="card-body">
            <h3>8GB記憶體</h3>
            <p class="card-text"></p>
        </div>
    </button>
    <button class="card" id="6000">
        <div class="card-body">
            <h3>16GB記憶體</h3>
            <p class="card-text">+NT$6,000 起</p>
        </div>
    </button>
</div>
<div class="storage">
    <h2>儲存裝置。 <span>選擇需要的儲存空間。</span> </h2>
    <button class="card" id="30900">
        <div class="card-body">
            <h3>64 <span>GB</span> </h3>
            <p class="card-text">+NT$6,600</p>
        </div>
    </button>
    <button class="card" id="36900">
        <div class="card-body">
            <h3>128 <span>GB</span> </h3>
            <p class="card-text">+NT$12,000</p>
        </div>
    </button>
    <button class="card" id="54900">
        <div class="card-body">
            <h3>256 <span>GB</span> </h3>
            <p class="card-text">+NT$24,000</p>
        </div>
    </button>
    <div class="card">
        <div class="card-body">
            <h3>不確定需要多少儲存空間？</h3>
            <p class="card-text">你的 iPad Air 儲存空間愈大， 你就有愈多空間儲存數位內容，滿足今日所需，也滿足未來需求。</p>
        </div>
    </div>
</div>
<div class="finalPrice">
    <h2>NT$30,900起</h2>
    <p>含營業稅和其他法定稅費</p>
</div>
</div>
</div>
    `
    document.querySelector('.col-md-3').innerHTML = "";
    document.querySelector('.col-md-3').innerHTML = macHtml;
    attachEventListeners()
})

function attachEventListeners() {
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

    //點選後取得ram價格,並計算總價
    let aaa = document.querySelectorAll('.ram .card')
    aaa.forEach(x => {
        x.addEventListener('click', function () {
            ramPrice = parseInt(this.getAttribute('id'));
            calTotalPrice();
        })
    })


    //計算總價方法
    function calTotalPrice() {
        totalPrice = storagePrice + wifiPrice + ramPrice;
        changeTotalPriceTxt()
    }

    //更改總價顯示位置文字
    function changeTotalPriceTxt() {
        let priceTxt = document.querySelector('.finalPrice h2');
        priceTxt.textContent = "共" + totalPrice + "元";
    }

    //點擊後滑動到指定位置
    const exteriorBtns = document.querySelectorAll('.container .row .exterior button');
    const storageBtns = document.querySelectorAll('.container .row .storage button');
    const wifiBtns = document.querySelectorAll('.container .row .wifi button');
    const ramBtns = document.querySelectorAll('.container .row .ram button');
    exteriorBtns.forEach(x => {
        x.addEventListener('click', function () {
            const ram = document.querySelector('.ram');
            if(ram!=null){
                ram.scrollIntoView({ behavior: 'smooth' });
            }
            else{
                const storagebtn = document.querySelector('.storage');
                storagebtn.scrollIntoView({ behavior: 'smooth' });
            }
            
        });
    })

    storageBtns.forEach(x => {
        x.addEventListener('click', function () {
            const wifiBtn = document.querySelector('.wifi');
            if (wifiBtn!=null) {
                wifiBtn.scrollIntoView({ behavior: 'smooth' });
            }
            else {
                const finalPrice = document.querySelector('.finalPrice');
                finalPrice.scrollIntoView({ behavior: 'smooth' });
            }

        });
    })

    wifiBtns.forEach(x => {
        x.addEventListener('click', function () {
            const finalPrice = document.querySelector('.finalPrice');
            finalPrice.scrollIntoView({ behavior: 'smooth' });
        });
    })
    ramBtns.forEach(x => {
        x.addEventListener('click', function () {
            const finalPrice = document.querySelector('.storage');
            finalPrice.scrollIntoView({ behavior: 'smooth' });
        });
    })
}




