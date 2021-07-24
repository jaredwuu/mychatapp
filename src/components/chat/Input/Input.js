import React from 'react';

const Input = ({message,setMessage,sendMessage}) => {
    return (
        <form className="flex border-t-2 border-gray-500">
            <input
            className="border-none rounded-0 w-4/5 px-2 text-sm focus:outline-none"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(event)=>setMessage(event.target.value)}
            onKeyPress={event=>event.key==='Enter' ? sendMessage(event):null}
            />

            <button className = "uppercase w-1/5 bg-blue-500 inline-block py-3 hover:bg-blue-700 border-none rounded" onClick= {(event)=>sendMessage(event)}>Send</button>
        </form>
            
    
    )
}

export default Input
