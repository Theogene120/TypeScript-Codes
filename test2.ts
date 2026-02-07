
const sendMessage = (message: { to: string; text?: string }) => {
  return 'text' in message? message.text.toUpperCase(): 'Text not available'
};

console.log(sendMessage({ to: 'Alice'}));