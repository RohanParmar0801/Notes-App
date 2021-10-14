const fs = require('fs')

/*const book = {
    title:'Ego is the Enemy',
    author:'Ryan Holiday'
}

bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json',bookJSON)*/

/*const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)*/

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Rohan'
user.planet = 'Earth'
user.age = '19'

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)









// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.title)
// console.log(parseData.author)