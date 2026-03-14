async function createQR(){

let amount=document.getElementById("amount").value

let res=await fetch(CONFIG.QR_API,{
method:"POST",
headers:{
"Content-Type":"application/json",
"x-api-key":CONFIG.API_KEY
},
body:JSON.stringify({
amount:amount,
promptpay:"0611037042"
})
})

let data=await res.json()

document.getElementById("qr").src=data.qrCode

}


async function verifySlip(){

let file=document.getElementById("slip").files[0]

let reader=new FileReader()

reader.onload=async function(){

let base64=reader.result

let res=await fetch(CONFIG.VERIFY_API,{
method:"POST",
headers:{
"Content-Type":"application/json",
"x-api-key":CONFIG.API_KEY
},
body:JSON.stringify({image:base64})
})

let data=await res.json()

document.getElementById("result").innerText=data.status

}

reader.readAsDataURL(file)

}
