// Variables
var button = document.getElementById('submitButton')
var input = document.getElementById('name')
var textarea = document.getElementById('msg')
var list = document.getElementById('list')
// event listener
button.addEventListener('click', sendMessage);

// functions
async function sendMessage () {
    let name, msgText;
    
    name = input.value
    msgText = textarea.value
    try {
        await axios.post('http://localhost:4000/api/v1/chat', {name: name, message: msgText})
    } catch (error) {
        console.log(error);
    }
}

function addMsg (msg){
    var node1 = document.createElement("h4")
    node1.innerHTML = msg.name
    var node2 = document.createElement("p")
    node2.innerHTML = msg.message
    list.appendChild(node1)
    list.appendChild(node2)
    input.value = ''
    textarea.value = ''
}
// no URL when I call io(), ("http://localhost:4000")
// it defaults to trying to connect to the host that serves the page.
var socket = io();

socket.on('message', addMsg)