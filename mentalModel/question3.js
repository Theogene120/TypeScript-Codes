function sendNotification(n) {
    switch (n.type) {
        case 'email':
            console.log("".concat(n.type, " sent to ").concat(n.to, " subject is ").concat(n.subject));
            break;
        case 'sms':
            console.log(n.type);
            break;
        case 'push':
            console.log(n.type);
            break;
        default:
            console.log('Type doesnt exist');
    }
}
sendNotification({ type: "email", to: 'theos', subject: 'meeing avenue' });
