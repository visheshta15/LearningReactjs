import {useEffect} from 'react'
import { createConnection } from './A1_chat'

export function B1_useChatRoom({serverUrl, roomId}) {
    useEffect(()=>{
        const connection = createConnection(serverUrl, roomId)
        connection.connect()
        return ()=>{
            connection.disconnect()
        }
    },[serverUrl, roomId])
  
}

