import React, { useEffect } from 'react'
import { useState } from 'react'
import { B1_useChatRoom } from './B1_useChatRoom';
function B1_ConnectingToChatServer() {
    const [roomId, setRoomId] = useState('General')
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');
    const [showChat, setShowChat] = useState(false);

    // useEffect(()=>{
    //     let connection  = createConnection(serverUrl, roomId)
    //     connection.connect()
    //     return () => {
    //         connection.disconnect()
    //     }
    // },[roomId, serverUrl])
    B1_useChatRoom({
        roomId,
        serverUrl
    })

    const handleClick = ()=> {
        setShowChat(!showChat)
    }

    return (
    <div>
        <hr />
        <h4>1. Connecting to a chat server, using Custom useChatRoom Hook</h4>
        <label>
            Choose the chat room
            <select name="" id="" value={roomId} onChange={(e)=> setRoomId(e.target.value)}>
                <option value="general">General</option>
                <option value="travel">Travel</option>
                <option value="music">Music</option>
            </select>
        </label>
        <button onClick={handleClick}>{!showChat ? 'Open chat' : 'Close chat'}</button>
        {showChat && 
            <div>
                <hr />
                <label>
                    <p>{`Server url`}</p>
                    <input type="text" value={serverUrl} onChange={(e)=> setServerUrl(e.target.value)}/>
                </label>
                <p>{`Welcome to ${roomId} room!!!`}</p>
                
            </div>
        }
        <hr />

    </div>
    )
}

export default B1_ConnectingToChatServer;