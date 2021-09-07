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
        // getMessages()
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
}

// async function getMessages() {
//     try {
//         const res = await axios.get('http://localhost:4000/api/v1/chat')
//         const messages = res.data.data;
//         console.log(messages);
//         messages.forEach(addMsg);
//     } catch (error) {
//         console.error(error)
//     }
// }

var socket = io("http://localhost:4000");

socket.on('message', addMsg)