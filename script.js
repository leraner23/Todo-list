function Fun(e){
    e.preventDefault();
  
    const name = document.getElementById("fname").value.trim();
 
    if (!name) {
      alert("Please enter a name before submitting.");
      return; // Stop the function from executing further if the input is empty
    }

    console.log("fname:", name);

// for storing multiple objects and value in local storage 

    const ItemN = {
      name: name,
       
    };
     
    let items = JSON.parse(localStorage.getItem('items')) || [];

    items.push(ItemN);

  localStorage.setItem('items', JSON.stringify(items));

    
// to make <li> element in the Html code
 
  const checklist = document.createElement("input"); 
  const newList = document.createElement("li");
  newList.textContent = "Name : "+ name;

  checklist.type = "checkbox";

  newList.prepend(checklist); 

  //for output 
 const outputList = document.querySelector(".output ul");
 
  
 outputList.appendChild(newList);

  checklist.addEventListener('change', function() {
    newList.style.textDecorationLine = this.checked ? "line-through" : "none";
   

    if (this.checked) {
      outputList.appendChild(newList); // Move to bottom
    } else {
      outputList.prepend(newList); // Move to top
    }
  });




  // for inputing fresh input
  document.getElementById("fname").value = "";
  




}   
