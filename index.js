function Divider() {
    let table = document.getElementById("table").value
    let range = document.getElementById("range").value
    let show = ""
    for (let i = 1; i <= range; i++) {
        show += `${table} x ${i} = ${table * i} <br>`
        document.getElementById("content").innerHTML = show
    }
}

function Reload() {
    location.reload()
}

function clearTable() {
    let clearTable = document.getElementById("content").innerHTML = ""
}

function clearAll() {
    let a = document.getElementById("content").innerHTML = ""
    let b = document.getElementById("table").value = "Enter the Value Of a Table"
    let c = document.getElementById("range").value = "Enter the Value Of a Range"
}