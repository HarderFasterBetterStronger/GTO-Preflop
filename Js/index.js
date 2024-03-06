
//button initialization
document.addEventListener('DOMContentLoaded', function() {
var gridContainer = document.getElementById('grid');

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
        column.setAttribute('data-image', "./res/preflop-R&C/R&C simple 2.5X/"+position1[c]+".png");
        
    }
    //right triangle
    else if (c > 0 && r == 1){
        column.textContent = situation1[0];
        column.setAttribute('data-image', "./res/preflop-R&C/R&C simple 2.5X/"+position1[c]+" vs "+position1[r-1]+".png");

    }
    else if (c>1 && r==2){
        column.textContent = situation1[1];
        column.setAttribute('data-image', "./res/preflop-R&C/R&C simple 2.5X/"+position1[c]+" vs "+position1[r-1]+".png");
    }
    else if (c>2 && r==3){
        column.textContent = situation1[2];
        column.setAttribute('data-image', "./res/preflop-R&C/R&C simple 2.5X/"+position1[c]+" vs "+position1[r-1]+".png");
    }
    else if (c>3 && r==4){
        column.textContent = situation1[3];
        column.setAttribute('data-image', "./res/preflop-R&C/R&C simple 2.5X/"+position1[c]+" vs "+position1[r-1]+".png");
    }
    else if (c>4 && r==5){
        column.textContent = situation1[4];
        column.setAttribute('data-image', "./res/preflop-R&C/R&C simple 2.5X/"+position1[c]+" vs "+position1[r-1]+".png");
    }
    //left triangle
    else if (c <= 0 && r == 1){
        column.textContent = situation2[0];
        column.setAttribute('data-image', "./res/preflop-R&C/R&C simple 2.5X/"+position1[c]+" vs "+position1[r]+".png");
    }
    else if (c<=1 && r==2){
        column.textContent = situation2[1];
        column.setAttribute('data-image', "./res/preflop-R&C/R&C simple 2.5X/"+position1[c]+" vs "+position1[r]+".png");
    }
    else if (c<=2 && r==3){
        column.textContent = situation2[2];
        column.setAttribute('data-image', "./res/preflop-R&C/R&C simple 2.5X/"+position1[c]+" vs "+position1[r]+".png");
    }
    else if (c<=3 && r==4){
        column.textContent = situation2[3];
        column.setAttribute('data-image', "./res/preflop-R&C/R&C simple 2.5X/"+position1[c]+" vs "+position1[r]+".png");
    }
    else if (c<=4 && r==5){
        column.textContent = situation2[4];
        column.setAttribute('data-image', "./res/preflop-R&C/R&C simple 2.5X/"+position1[c]+" vs "+position1[r]+".png");
    }
    
    
    
    
    gridContainer.appendChild(column);
    //new row
    if (i % 6 === 0) {
    var newRow = document.createElement('div');
    newRow.className = 'w-100';
    gridContainer.appendChild(newRow);
    }

    

    }

//buttons
var element = document.querySelectorAll('[button-type="image-button"]');
  var picture = document.getElementById('picture');

  element.forEach(function(button) {
    button.addEventListener('click', function() {
      var imageSource = this.getAttribute('data-image');
      picture.src = imageSource;
      picture.style.display = 'block';
    });
  });

});


