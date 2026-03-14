const API="https://open.er-api.com/v6/latest/USD"

let rates={}

let last={}

async function loadRates(){

let r=await fetch(API)

let data=await r.json()

rates=data.rates

let list=["USD","EUR","GBP","JPY","CNY","SGD","AUD","HKD","KRW"]

list.forEach(c=>{

let rate=(rates["THB"]/rates[c]).toFixed(2)

let tr=document.createElement("tr")

tr.innerHTML="<td>"+c+"</td><td>"+rate+"</td>"

rateTable.appendChild(tr)

})

}

loadRates()



function calculate(){

let amt=parseFloat(amount.value)

let cur=currency.value

let rate=rates["THB"]/rates[cur]

let total=amt*rate

last={rate,total}

result.innerHTML="Receive approx "+total.toFixed(2)+" THB"

}



function createReceipt(){

let id="TX"+Date.now()

txid.innerText=id

rname.innerText=name.value

racc.innerText=account.value

rbank.innerText=bank.value

ramount.innerText=amount.value+" "+currency.value

rrate.innerText=last.rate.toFixed(2)

rthb.innerText=last.total.toFixed(2)

receipt.style.display="block"

document.getElementById("qrcode").innerHTML=""

new QRCode(qrcode,{text:id,width:120,height:120})

}



function downloadReceipt(){

html2canvas(receipt).then(canvas=>{

let link=document.createElement("a")

link.download="receipt.png"

link.href=canvas.toDataURL()

link.click()

})

}
