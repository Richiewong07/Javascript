var me = 'Bruce Wayne'

function greetMe() {    // has access to variale outside of the function scoop, JS supports closures
  console.log('Hello, ' + me + '!')
}

greetMe()

// all functions in JS are closures
