import React, {useState,useEffect}from 'react'
import queryString from 'query-string';
import io from 'socket.io-client'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import TextContainer from '../TextContainer/TextContainer'

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    // const ENDPOINT ='https://chatchatss.herokuapp.com/';
    const ENDPOINT ='http://localhost:5000/';

    useEffect(() => {
        const {name,room} = queryString.parse(location.search);
        socket =io.connect(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit('join',{name,room},()=>{         
        });

        return ()=>{
            socket.emit('disconnect');

            socket.off();
        }
        
    } ,[ENDPOINT,location.search]);

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message]);

        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });

    }, [messages]);
    //function for sending messages
    const sendMessage=(event)=>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }

    console.log(message,messages);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="flex flex-col justify-center w-1/3 h-3/5 bg-white rounded">
                <InfoBar room={room} />
                <Messages messages ={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users} />
        </div>
    )
}

export default Chat
