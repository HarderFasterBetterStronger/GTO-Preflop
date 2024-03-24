
//button initialization
document.addEventListener('DOMContentLoaded', function() {
var gridContainer = document.getElementById('grid1');

//array for position
var position1 = ["UTG","MP","CO","BTN","SB","BB"];
var situation1 = ["vs UTG","vs MP","vs CO","vs BTN","vs SB"];
var situation2 = ["MP 3b","CO 3b","BTN 3b","SB 3b","BB 3b"];

for (var i = 1; i <= 36; i++) {
    var  r = parseInt((i-1)/6);
    var  c = (i-1)%6;
    var column = document.createElement('div');
    //<div class="col btn btn-outline-success">' .... '</div>
    column.setAttribute('class', 'col btn btn-outline-success');
    column.setAttribute('button-type','image-button')
    
    
    //first row
    if (r == 0){
        column.textContent = position1[c];
        if (column.textContent == "BB"){
            column.setAttribute('data-image', "#");
        }
        else {
            column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/open&3bet/"+position1[c]+".png");
        }
        
        
    }
    //right triangle
    else if (c > 0 && r == 1){
        column.textContent = situation1[0];
        column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/open&3bet/"+position1[c]+" vs "+position1[r-1]+".png");

    }
    else if (c>1 && r==2){
        column.textContent = situation1[1];
        column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/open&3bet/"+position1[c]+" vs "+position1[r-1]+".png");
    }
    else if (c>2 && r==3){
        column.textContent = situation1[2];
        column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/open&3bet/"+position1[c]+" vs "+position1[r-1]+".png");
    }
    else if (c>3 && r==4){
        column.textContent = situation1[3];
        column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/open&3bet/"+position1[c]+" vs "+position1[r-1]+".png");
    }
    else if (c>4 && r==5){
        column.textContent = situation1[4];
        column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/open&3bet/"+position1[c]+" vs "+position1[r-1]+".png");
    }
    //left triangle
    else if (c <= 0 && r == 1){
        column.textContent = situation2[0];
        column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/open&3bet/"+position1[c]+" vs "+position1[r]+".png");
    }
    else if (c<=1 && r==2){
        column.textContent = situation2[1];
        column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/open&3bet/"+position1[c]+" vs "+position1[r]+".png");
    }
    else if (c<=2 && r==3){
        column.textContent = situation2[2];
        column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/open&3bet/"+position1[c]+" vs "+position1[r]+".png");
    }
    else if (c<=3 && r==4){
        column.textContent = situation2[3];
        column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/open&3bet/"+position1[c]+" vs "+position1[r]+".png");
    }
    else if (c<=4 && r==5){
        column.textContent = situation2[4];
        column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/open&3bet/"+position1[c]+" vs "+position1[r]+".png");
    }
    
    
    
    
    gridContainer.appendChild(column);
    //new row
    if (i % 6 === 0) {
    var newRow = document.createElement('div');
    newRow.className = 'w-100';
    gridContainer.appendChild(newRow);
    }
    }

    


    //4bet & 5bet

    var situation3 = ["MP 5b","CO 5b","BTN 5b","SB 5b","BB 5b"];
    var situation4 = ["UTG 4b","MP 4b","CO 4b","BTN 4b","SB 4b"]
    var gridContainer2 = document.getElementById('grid2');
    for (var i = 1; i <= 36; i++) {
        var  r = parseInt((i-1)/6);
        var  c = (i-1)%6;
        var column = document.createElement('div');
        //<div class="col btn btn-outline-success">' .... '</div>
        column.setAttribute('class', 'col btn btn-outline-success');
        //add -1 for 4bet & 5bet
        column.setAttribute('button-type','image-button-1')
        
        
        //first row
        if (r == 0){
            column.textContent = position1[c];

            column.setAttribute('data-image', "#");
        }
        //right triangle
        else if (c > 0 && r == 1){
            column.textContent = situation4[0];
            column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/4bet&5bet/"+position1[c]+" vs "+position1[r-1]+" 4b"+".png");
    
        }
        else if (c>1 && r==2){
            column.textContent = situation4[1];
            column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/4bet&5bet/"+position1[c]+" vs "+position1[r-1]+" 4b"+".png");
        }
        else if (c>2 && r==3){
            column.textContent = situation4[2];
            column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/4bet&5bet/"+position1[c]+" vs "+position1[r-1]+" 4b"+".png");
        }
        else if (c>3 && r==4){
            column.textContent = situation4[3];
            column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/4bet&5bet/"+position1[c]+" vs "+position1[r-1]+" 4b"+".png");
        }
        else if (c>4 && r==5){
            column.textContent = situation4[4];
            column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/4bet&5bet/"+position1[c]+" vs "+position1[r-1]+" 4b"+".png");
        }
        //left triangle
        else if (c <= 0 && r == 1){
            column.textContent = situation3[0];
            column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/4bet&5bet/"+position1[c]+" vs "+position1[r]+" 5b"+".png");
        }
        else if (c<=1 && r==2){
            column.textContent = situation3[1];
            column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/4bet&5bet/"+position1[c]+" vs "+position1[r]+" 5b"+".png");
        }
        else if (c<=2 && r==3){
            column.textContent = situation3[2];
            column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/4bet&5bet/"+position1[c]+" vs "+position1[r]+" 5b"+".png");
        }
        else if (c<=3 && r==4){
            column.textContent = situation3[3];
            column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/4bet&5bet/"+position1[c]+" vs "+position1[r]+" 5b"+".png");
        }
        else if (c<=4 && r==5){
            column.textContent = situation3[4];
            column.setAttribute('data-image', "res/preflop-R&C/R&C simple 2.5X/4bet&5bet/"+position1[c]+" vs "+position1[r]+" 5b"+".png");
        }
        
        
        
        
        gridContainer2.appendChild(column);
        //new row
        if (i % 6 === 0) {
        var newRow = document.createElement('div');
        newRow.className = 'w-100';
        gridContainer2.appendChild(newRow);
        }
    
        
    
        }

    //buttons for open & 3bet
    var element = document.querySelectorAll('[button-type="image-button"]');
    var picture1 = document.getElementById('picture1');
    
    element.forEach(function(button) {
        button.addEventListener('click', function() {
            if(this.textContent === "BB"){
                picture1.style.display = 'none';
            }
            else{
                var imageSource = this.getAttribute('data-image');
                picture1.src = imageSource;
                picture1.style.display = 'block';
                
            }
                
            });
        
    });
    //buttons for 4bet & 5bet
    var element1 = document.querySelectorAll('[button-type="image-button-1"]');
    var picture2 = document.getElementById('picture2');
    element1.forEach(function(button) {
        button.addEventListener('click', function() {
            if(position1.includes(this.textContent)){
                picture2.style.display = 'none';
            }
            else{
                var imageSource = this.getAttribute('data-image');
                picture2.src = imageSource;
                picture2.style.display = 'block';
                
            }
                
            });
        
    });

});

function goToF() {
    // Redirect to another page
    window.location.href = "frequency.html";
}

