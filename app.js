function uploadSlip(){

let file=document.getElementById("slip").files[0]

if(!file){

alert("กรุณาอัพโหลดสลิป")
return

}

document.getElementById("result").innerText=
"ส่งสลิปเรียบร้อย กำลังตรวจสอบ"

}
