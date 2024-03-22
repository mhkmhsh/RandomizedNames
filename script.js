// create an array to store names
const namesArray = []

function addName(){
    const nameInput = document.getElementById('nameInput') // stores name input as a var using doc.id
    const name = nameInput.Value.trim() //store the trimmed value of input box in var
namesArray.push(name)// add the name to the end of the Array
displayNames()//call the displayNames function to update the list
nameInput.value=''//clear the input field



}