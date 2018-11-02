// Set variable called tableData which references data from data.js
var tableData = data;


var tbody = document.querySelector("tbody");
var Input = document.querySelector("#datetime");
var search = document.querySelector("#search");


search.addEventListener("click", searchButtonClick);



function buildTable() {
  tbody.innerHTML = "";  
  for (var i = 0; i < tableData.length; i++) {
    var table_Data_Add = tableData[i];  
    console.log(table_Data_Add)
    var fields = Object.keys(table_Data_Add);
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var cell = row.insertCell(j); 
      cell.innerText = table_Data_Add[field];
    }
  }
}




function searchButtonClick() {
  
  var filterDate = Input.value;

  
  if (filterDate != "")
  {
    tableData = tableData.filter(function(address) 
    {
      var addressDate = address.datetime; 
    
   
    return addressDate === filterDate;
    });
  }
  else {tableData};

buildTable();

}




(document).ready(function(){
  ('#table').DataTable();
});