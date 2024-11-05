{/* <div id="grid-container">
    <div class="grid-item" id="A1" onclick="tileturn()">A1</div>
    <div class="grid-item" id="A2" onclick="tileturn()">A2</div>
    <div class="grid-item" id="A3" onclick="tileturn()">A3</div>
    <div class="grid-item" id="A4" onclick="tileturn()">A4</div>
    <div class="grid-item" id="A5" onclick="tileturn()">A5</div>

    <div class="grid-item" id="B1" onclick="tileturn()">B1</div>
    <div class="grid-item" id="B2" onclick="tileturn()">B2</div>
    <div class="grid-item" id="B3" onclick="tileturn()">B3</div>
    <div class="grid-item" id="B4" onclick="tileturn()">B4</div>
    <div class="grid-item" id="B5" onclick="tileturn()">B5</div>

    <div class="grid-item" id="C1" onclick="tileturn()">C1</div>
    <div class="grid-item" id="C2" onclick="tileturn()">C2</div>
    <div class="grid-item" id="C3" onclick="tileturn()">C3</div>
    <div class="grid-item" id="C4" onclick="tileturn()">C4</div>
    <div class="grid-item" id="C5" onclick="tileturn()">C5</div>

    <div class="grid-item" id="D1" onclick="tileturn()">D1</div>
    <div class="grid-item" id="D2" onclick="tileturn()">D2</div>
    <div class="grid-item" id="D3" onclick="tileturn()">D3</div>
    <div class="grid-item" id="D4" onclick="tileturn()">D4</div>
    <div class="grid-item" id="D5" onclick="tileturn()">D5</div>
</div> */}
let wide = 5;
let deep = 4;
let griditem = "";
let gridloco = "";
let gridstring = "";
let gridscript = [];
let tileArray = [];
let wideId = ["A", "B","C","D","E","F"]
let parentDiv = document.getElementById('grid-container');
//console.log(parentDiv);
for(i=0; i< deep; i++){
    for(w=1; w <= wide; w++){
        gridloco = wideId[i] + w;
        tileArray.push(gridloco);
        //console.log(tileArray);
        griditem = '<div class="grid-item" id="'+ gridloco + '" onclick="tileturn()">' + gridloco + '</div>';
        //console.log(griditem);
        // Create a new div element
        let childDiv = document.createElement('div');
        //console.log(childDiv);
        // Add content to the new div element 
        childDiv.innerHTML = griditem;
        //console.log(childDiv);
        // Append the new div element to the parent div
        parentDiv.appendChild(childDiv);
    }
}
// // Get the parent div element
// const parentDiv = document.getElementById('grid-container');
// const childDiv = document.createElement('div');
// document.getElementById("grid-container").innerText = gridstring;