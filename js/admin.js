let transactions=[]

function load(){

let data=localStorage.getItem("txlist")

if(data){

transactions=JSON.parse(data)

}

render()

}

function render(){

document.getElementById("totalTx").innerText=transactions.length

let table=document.getElementById("txTable")

transactions.forEach(t=>{

let tr=document.createElement("tr")

tr.innerHTML="<td>"+t.id+"</td><td>"+t.name+"</td><td>"+t.amount+"</td>"

table.appendChild(tr)

})

}

load()
