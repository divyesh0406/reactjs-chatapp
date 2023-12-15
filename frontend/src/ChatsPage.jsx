import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return ( 
    <div style={{height:'100vh'}}>
        <PrettyChatWindow 
            projectId='0de8f86a-b8e2-4814-96d9-dccd4097138f'
            username={props.user.username}
            secret={props.user.secret}    
            style={{height: '100%'}}    
        />
    </div>
    )
}

export default ChatsPage