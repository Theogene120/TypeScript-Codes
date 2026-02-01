
let getName = (name: string) => {
  switch(name){
  case 'Theos':{
    console.log(`Welcome Dr. ${name}!`)
    break
  }
    default:
    console.log(`Welcome ${name}`)
    break
  case 'Eva':
    console.log(`Welcome Mr. ${name}`)
    break
  }
}

getName('Mugisha')

