let selectedRow = null

function onFormSubmit(){
    let formData = readFormData ();
    if(selectedRow == null)
    insertNewRecord(formData);
    else 
    updateRecord (formData)
    resetForm ();
}

function readFormData(){
    let formData = {};
    formData['fullName'] = document.getElementById('fullName').value;
    formData['origen'] = document.getElementById('origen').value;
    formData['parentesco'] = document.getElementById('parentesco').value;
    return formData;
}

function insertNewRecord (data) {
    let table = document.getElementById('listaInvitados').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.origen;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.parentesco;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML =   `<a onClick='onEdit(this)'>Editar</a>
                        <a onClick='onDelete(this)'>Eliminar</a>`; 
}

function resetForm (){
    document.getElementById('fullName').value = '';
    document.getElementById('origen').value = '';
    document.getElementById('parentesco').value = '';
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('origen').value = selectedRow.cells[1].innerHTML;
    document.getElementById('parentesco').value = selectedRow.cells[2].innerHTML;
}

function updateRecord (formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.origen;
    selectedRow.cells[2].innerHTML = formData.parentesco;

}

function onDelete(td){
    if (confirm('Seguro que quieres borrar este registro?')) {
    row = td.parentElement.parentElement;
    document.getElementById('listaInvitados').deleteRow(row.rowIndex);
    resetForm ();
    }
}