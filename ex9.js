// Author: Moisés Adame-Aguilar
// Date: January 4, 2023
// Descrption: Mosquitto managment



//the host to which we want to connect
const host = "20.219.162.228";

//port number the host is listening to
const port = 1884;

//our topic to publish and receive message
const topic = "srv/info";

//variable to hold connection data
let client;

function onConnectionLost(responseObject){
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost: " + responseObject.errorMessage);
    }
    return -1;
}

function onMessageArrived(message){
	var msg = JSON.parse(message);
    console.log("onMessageArrived: " + msg.color);
    lastMsg = message.payloadString;
}

// Function foc connecting
function connect(){
	try{
		// Creating a client instance
		client = new Paho.MQTT.Client(host, Number(port), "");

		// will be called when new message arrives
		client.onMessageArrived = onMessageArrived;

		// when connection is lost
		client.onConnectionLost = onConnectionLost;

		// lets connect the client
		client.connect({
			onSuccess : () => {
			    console.log("connected");
			    
				// subscribe to the topic, we will publish message to this topic
				client.subscribe(topic);
				//client.onConnectionLost = onConnectionLost;
          		//client.onMessageArrived = onMessageArrived;

			},
			onFailure : () => {
				console.log("failed to connect");
			}
		});
		
	}
	catch(err){
		console.log("Not connected!");
		console.log(err);
	}
	
}

function onMessage(mgs){
	//parse the received message
	var mgs = JSON.parse(mgs);

	console.log(mgs)
}


function publish(mgs, author){
	let m = document.getElementById('message').value;
	//console.log("pub connected", connack);

	var payload = {
        "info": mgs,
        "sender":author
    }

    var mgs = new Paho.MQTT.Message(JSON.stringify(payload));
	mgs.destinationName = topic;
    client.send(mgs);

    console.log('Published: ' + payload)
}

connect()