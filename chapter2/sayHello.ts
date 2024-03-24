function sayHello(firstName: string, greeting?: string) {
  return 'Hello ' + firstName
}

let firstName: string = 'Takuya'
document.body.innerHTML = sayHello(firstName)
