const inputBox= document.getElementbyId("input-box");

const listContainer= document.getElementbyId("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
    }
} 
