// Author: Moisés Adame-Aguilar
// Date: January 5, 2023
// Descrption: Mosquitto connecttion for messaging app (Server side).

// Loading database
import dataBase from './rooms.json' assert{type: 'json'};
import fs from 'fs' 


//the host to which we want to connect
const host = "20.219.162.228";

//port number the host is listening to
const port = 1883;

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


function publish(){
	var payload = dataBase
    console.log(payload)

    payload = new Paho.MQTT.Message(JSON.stringify(payload))
	payload.destinationName = topic
    client.send(payload)
}

var showRoomsUsers = function(){
    try{
        connect()
        publish()
    }catch(err){
        ;// Null statement
    }
}

function createOrJoinRoom(){
    var room = document.getElementById('room-box').value
    var user = document.getElementById('user-box').value
    var roomNum = Number(dataBase.roomNum)

    if(room === '' && user !== ''){
        dataBase['rooms']['r' + (roomNum + 1)] = [user]
        console.log('Connected to: r' + (roomNum + 1))
        dataBase.roomNum += 1
    }else if(room !== '' && user !== ''){
        (dataBase['rooms'][room]).push(user)
        console.log('Connected to: ' + room)
    }
    //storeJSON()

    publish()
}

/*
function storeJSON(rawJSON){
    var stringJSON = JSON.stringify(rawJSON)
    writeFile('rooms.json', stringJSON, finished)
}
*/

document.getElementById('connect-button').addEventListener('click', createOrJoinRoom)

document.querySelector('body').addEventListener('load', showRoomsUsers())