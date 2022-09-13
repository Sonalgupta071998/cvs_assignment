function resetIndex(){
    var table = document.getElementById('mytable');
    var rowCount = document.getElementById('mytable').rows.length - 1;
    for(var i=1;i<rowCount+1;i++){
        table.rows[i].cells[0].innerHTML = i;
    }
}

function fillDetails(index){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;


    // Find a <table> element with id="myTable":
    var table = document.getElementById("mytable");
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Add some text to the new cells:
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
    cell4.innerHTML = city;
    cell5.innerHTML = country;
    resetIndex();
}

document.getElementById('top').onclick = function(){
    fillDetails(1);
}


document.getElementById('bottom').onclick = function(){
    var rowCount = document.getElementById('mytable').rows.length - 1;
    fillDetails(rowCount+1);
}