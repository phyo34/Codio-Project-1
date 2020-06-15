/** site.js 
 * You should add your JavaScript code to this file.  
 * See the assignment description in Guide for what
 * your code needs to accomplish.
 */


/*Function: generateTableHead()
 * The function generates the table's headers.
 * */
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    if(key != 'description'){
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
    
               
    }
  }
}


/*Function: generateDesktopTable()
 * Generates the table when in desktop mode
 * */
function generateDesktopTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
        for (key in element) {
               
              
     
            
             if (key != 'description'){
               if (key == 'statement') {
                   var l1 = document.createElement("br");
                   var l2 = document.createElement("br");
                   var x = document.createElement("B");
                   var x2 = document.createElement("I");

                   let cell = row.insertCell();
                 
                   var text = document.createTextNode(element[key]);
                   var text2 = document.createTextNode(element['description']);
                   
                   x.appendChild(text);
                   cell.appendChild(x);
                   cell.appendChild(l1);
                   cell.appendChild(l2);
                   x2.appendChild(text2);
                   cell.appendChild(x2);
               }
               else {
                   let cell = row.insertCell();
                   let text = document.createTextNode(element[key]);
                   cell.appendChild(text);
               }
             }     
    }
  }
}


/*Function: generateDesktopTable()
 * Generates the table when in mobile mode
 * */
function generateMobileTable(table, data) {

  i = 0;
  for (var element of data) {
    i++;
   //Make row in table for each element in table

    var row = table.insertRow();
    //Makes rowId 
    var rowName = "rowId" + i;
    row.setAttribute('ID',rowName);
     j = 0;
     
        for (key in element) { 
          //Make cell/table-data and fill it inside the row
             
                   var l1 = document.createElement("br");
                   var l2 = document.createElement("br");
                   var x = document.createElement("B");
                   var whitespace = document.createTextNode("\u00A0");
                   var whitespace2 = document.createTextNode("\u00A0");
                   var cell = row.insertCell();  
                   cell.setAttribute('ID',j);
                   var text = document.createTextNode(element[key]); 
                   var text2 = document.createTextNode(key);
                   x.appendChild(text2);
                   cell.appendChild(x);
                   cell.append(whitespace);
                   cell.append(whitespace2);
                   cell.appendChild(text);
                   cell.appendChild(l1);
                   cell.appendChild(l2);
                
            if ( key == "identifier" || key == "statement" ){
            cell.style.display = "inline";
            }
            else {
            cell.style.display="none";
            }


              j++;
              }

              var cell2 = row.insertCell();  
              //button Name
              name = "btn" + i;
             //Create button 
              var button = document.createElement("input");
             // Set button attributes
              button.setAttribute('type', 'button');
              button.setAttribute('value', 'More');
              button.setAttribute('class', 'myButton');
              button.setAttribute('ID', name);
              button.setAttribute('onclick', 'buttonClick()');
              cell2.appendChild(button);
  }
  }



var table = document.querySelector("table");
var data = Object.keys(standards[0]);



/*Function: buttonClick()
 * The buttonClick function tells the page to display either more or less
 * depending on the value of the button.
 * */

function buttonClick(){
    btnClicked = event.target.id;

    var el = document.getElementById(btnClicked);
      //If button value is 'More'
    if (el.value == 'More') {
         //Getting the rowId based on the closest row the button is in 
         index = el.closest('tr').rowIndex;
         rowId= document.getElementsByTagName("tr")[index].id;
         el2 = document.getElementById(rowId);
         //Show 'description'
         tdId = table.rows[index].cells[2];
         tdId.style.display = "inline";
         //Show 'subconcept'
         tdId = table.rows[index].cells[3];
         tdId.style.display = "inline";
         //Show 'practices'
         tdId2 = table.rows[index].cells[4];
         tdId2.style.display = "inline";

         //Change button value to less
         el.value = 'Less';
    }
    else {
         //Hide 'description'
         tdId = table.rows[index].cells[2];
         tdId.style.display = "none";
         //Hide 'subconcept'
         tdId = table.rows[index].cells[3];
         tdId.style.display = "none";
         //Hide 'Practices'
         tdId2 = table.rows[index].cells[4];
         tdId2.style.display = "none";
         //Change button value to 'More'
         el.value = 'More';


      }
  
}

/**
 * Excutes functions based on screen width 
 * */
if ( screen.width > 700){
    generateDesktopTable(table, standards);
    generateTableHead(table, data);
  }
else {
    generateMobileTable(table, standards);
    generateTableHead(table, data);
  }









  






  
  