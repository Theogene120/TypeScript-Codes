var sendMessage = function (message) {
    return 'text' in message ? message.text.toUpperCase() : 'Text not available';
};
console.log(sendMessage({ to: 'Alice' }));
