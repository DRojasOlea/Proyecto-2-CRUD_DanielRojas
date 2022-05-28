function onFormSubmit(){
    let formData = readFormData ();
    insertNewRecord(formData);
    resetForm ();
}
function readFromData(){
    let formData={};
    formData['fullname'] = document.getElementById('fullName').value;
    formData['origen'] = document.getElementById('origin').value;
    formData['parentesco'] = document.getElementById('parentesco').value;
    return formData
}

function insertNewRecordData (data){
    let table = document.getElementById(listaInvitados).getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cellOne = newRow.insertCell(0);
    cellOne.innerHTML = data.fullname;
    cellTwo = newRow.insertCell(1);
    cellTwo.innerHTML = data.origin;
    cellThree = newRow.insertCell(2);
    cellThree.innerHTML = data.parentesco;
    cellFour = newRow.insertCell(3);
    cellFour.innerHTML =`<a>Editar</a>
                        <a>Eliminar</a>`; 
}

function resetForm (){
    document.getElementById('fullName').value = '';
    document.getElementById('origin').value = '';
    document.getElementById('parentesco').value = '';
}