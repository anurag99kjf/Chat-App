/* import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced';*/

import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage=(props)=>{
    // const chatProps=useMultiChatLogic('fb8aad50-6591-4af4-b6a5-a4c8d5500f85',
    // props.user.username,
    // props.user.secret
    // );
    return (
        <div style={{height:"100vh"}}>
            {/* <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:"100%"}}/> */}
            
            <PrettyChatWindow
            projectId='fb8aad50-6591-4af4-b6a5-a4c8d5500f85'
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
            />


        </div>
    )
}

export default ChatsPage;