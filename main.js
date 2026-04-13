let newX = 0, newY = 0, startX = 0, startY = 0;

const tree = document.getElementsByClassName('tree')[0];
// const trees = document.getElementsByClassName('tree');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// example foreach loop
// trees.forEach((element) => console.log(element));

tree.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    console.log('mouse has been clicked down');
    startX = e.clientX
    startY = e.clientY


    tree.addEventListener('mousemove', mouseMove)

    tree.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    console.log('mouse is moving');
    newX = startX - e.clientX 
    newY = startY - e.clientY 
  
    startX = e.clientX
    startY = e.clientY

   tree.style.top = (tree.offsetTop - newY) + 'px'
    tree.style.left = (tree.offsetLeft - newX) + 'px'
}

function mouseUp(e){
    console.log('mouse has been released');
    tree.removeEventListener('mousemove', mouseMove)
}
  console.clear();

