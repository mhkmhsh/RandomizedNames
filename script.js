// create an array to store names
const namesArray = []


function addName() {
    const nameInput = document.getElementById('nameInput') // stores name input as a var using doc.id
    const name = nameInput.Value.trim() //store the trimmed value of input box in var
    namesArray.push(name)// add the name to the end of the Array
    displayNames()//call the displayNames function to update the list
    nameInput.value = ''//clear the input field



}


function displayNames() {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = ''// clear out previous list items

    for (let i = 0; i < namesArray.length; i++) {
        const name = namesArray[i]

        const li = document.createElement('li')

        li.classname = 'list-group-item'
        const span = document.createElement('span')
        span.textContent = name


        li.appendChild(span)
        nameList.appendChild(li)
    }


}//Event Listener for the button click to add a name
document.getElementById('addNameBtn').addEventListener('click',addName)
