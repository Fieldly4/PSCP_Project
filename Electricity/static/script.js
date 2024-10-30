const items = [];
let num = 1;
const itemTableBody = document.getElementById('table').getElementsByTagName('tbody')[0];

function calculate() {
    const name_electrical = document.getElementById('name_electrical').value;
    const power = parseFloat(document.getElementById('power').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const unit_rate = parseFloat(document.getElementById('unit_rate').value);
    const watt_BTU = document.getElementById('watt_BTU').value;

    let powerInWatts = power;
    if (watt_BTU === 'BTU') {
        // แปลง BTU เป็น Watt (1 BTU = 0.293071 Watt)
        powerInWatts = power * 0.293071;
    }
    // คำนวณค่าไฟฟ้า
    const dailyConsumption = (powerInWatts * hours) / 1000;
    const total = dailyConsumption * unit_rate * 30;
    document.getElementById('total').innerText = total.toFixed(2);
    document.getElementById('result').style.display = 'block';
}

//เพิ่่มตาราง รัน func นี้
function addtable(){
    const itemName = document.getElementById('name_electrical').value;
    const itemValue = parseFloat(document.getElementById('power').value);
    const count = num ;

    //เพิ่ม cell มาเพิ่มตรงนี้ 1
    const newItem = {
        count: count,
        name: itemName,
        value: itemValue
    };

    items.push(newItem);

    addItemToTable(newItem);
};

function addItemToTable(item) {
    const newRow = itemTableBody.insertRow();

    //เพิ่ม cell มาเพิ่มตรงนี้ 2
    const cellNum = newRow.insertCell(0);
    const cellName = newRow.insertCell(1);
    const cellValue = newRow.insertCell(2);

    num = num+1
    cellNum.textContent = item.count;
    cellName.textContent = item.name;
    cellValue.textContent = item.value;
    console.log(items);
}