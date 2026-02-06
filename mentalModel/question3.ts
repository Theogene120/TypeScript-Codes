type Notification = 
  | { type: 'email'; to: string; subject: string; }
  | { type: 'sms'; to: string; phone: string; }
  | { type: 'push'; to: string; deviceId: string; };

function sendNotification(n: Notification): void {
    switch(n.type){
        case 'email':
            console.log(`${n.type} sent to ${n.to} subject is ${n.subject}`)
            break
        case 'sms':
            console.log(n.type)
            break
        case 'push':
            console.log(n.type)
            break
        default:
            console.log('Type doesnt exist')
    }
}

sendNotification({type:"email", to: 'theos', subject: 'meeing avenue'})