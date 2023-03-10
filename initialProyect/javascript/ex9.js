// Author: Moisés Adame-Aguilar
// Date: January 4, 2023
// Descrption: Mosquitto connecttion for messaging app.

//the host to which we want to connect
const host = "20.219.162.228";

//port number the host is listening to
const port = 1883;

//our topic to publish and receive message
const topic = "srv/info2";

//variable to hold connection data
let client;

let payload;

function onConnectionLost(responseObject){
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost: " + responseObject.errorMessage);
    }
    return -1;
}

function onMessageArrived(message){
    console.log("onMessageArrived: " + message.payloadString);
}

// Function foc connecting
function connect(){
    console.log('Connection to: ' + host + ":" + port);

    try{
      // create a client instance,
      // "" is client id, if empty string is passed a random client id will be generated
      client = new Paho.MQTT.Client(host, Number(port), "client_id");

      //when connection is lost
      client.onConnectionLost = onConnectionLost;

      // will be called when new message arrives
      client.onMessageArrived = onMessageArrived;

      // lets connect the client
      client.connect({
        onSuccess : () => {
          console.log("connected");

          // subscribe to the topic, we will publish message to this topic
          client.subscribe(topic);
          client.onConnectionLost = onConnectionLost;
          client.onMessageArrived = onMessageArrived;

        },
        onFailure : () => {
          console.log("failed to connect");
        }
      });
    }
    catch(err){
      console.log("Not connected!!");
    }
}

function onMessage(mgs){
	//parse the received message
	let msg = JSON.parse(mgs);

	let html = document.getElementById('window').innerHTML + `<div>${mgs.color}</div>`;
	//append html to DOM
	document.getElementById('window').innerHTML = html;
}


function publish(message, sender){
	payload = {
        "data": message,
        "sender": sender
    }

    message = new Paho.MQTT.Message(JSON.stringify(payload))
	message.destinationName = topic
    client.send(message)
}

function sendMessage(){
	var message = document.getElementById('message-box').value
	publish(message, "me")
	document.getElementById('message-box').value = ''
}