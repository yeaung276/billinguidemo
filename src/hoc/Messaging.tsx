import { Alert } from 'antd'
import React, { createContext, useState } from 'react'


enum MessageType {
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info'
}

export type Message = {
    title: string,
    description: string,
    type: MessageType
}

export type MessagingContextType = {
    setMsg: (msg:Message) => void
}
export const messagingContext = createContext<MessagingContextType>({setMsg: (msg)=> undefined})
    
function MessagingContext(Component:React.FC){
    function ContextWrapper(props:any){
        const [msg, setMsg] = useState<Message|undefined>(undefined)
        return(
            <React.Fragment>
                {msg&&<Alert
                    message={msg.title}
                    description={msg.description}
                    type={msg.type}
                    closable
                    afterClose={()=>setMsg(undefined)}
                    showIcon
                />}
                <messagingContext.Provider value={{setMsg}}>
                    <Component {...props}/>
                </messagingContext.Provider>
            </React.Fragment>
        )
    }
    return ContextWrapper
}

export default MessagingContext