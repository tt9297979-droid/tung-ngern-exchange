const api="https://v6.exchangerate-api.com/v6/4aa8ace0999fc317127c536a/latest/USD"

const currencies=["THB","EUR","GBP","JPY","CNY","KRW","SGD","MYR","AUD"]

async function loadRates(){

let res=await fetch(api)

let data=await res.json()

let html=""

currencies.forEach(c=>{

html+=`
<tr>
<td>${c}</td>
<td>${data.conversion_rates[c]}</td>
</tr>
`

})

let table=document.getElementById("rates")

if(table) table.innerHTML=html

}

loadRates()


new TradingView.widget({

container_id:"tradingview_chart",

width:"100%",

height:500,

symbol:"FX:USDTHB",

interval:"30",

theme:"dark",

style:"1"

})


function register(){

let email=document.getElementById("reg_email").value

let pass=document.getElementById("reg_pass").value

localStorage.setItem(email,pass)

alert("สมัครสมาชิกสำเร็จ")

}


function login(){

let email=document.getElementById("email").value

let pass=document.getElementById("password").value

if(localStorage.getItem(email)==pass){

alert("เข้าสู่ระบบสำเร็จ")

location.href="index.html"

}else{

alert("ข้อมูลไม่ถูกต้อง")

}

}


function openPopup(){

document.getElementById("popup").style.display="block"

}

function closePopup(){

document.getElementById("popup").style.display="none"

}
