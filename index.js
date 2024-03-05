
const inquirer = require('inquirer')
const { Circle, Rectangle, Square, Ellipse, Triangle } = require('./test/shapeCL')
const fs = require('fs')

// prompted questions
const questions = [
    {
        name: 'text',
        message: 'Enter up to (3) characters:'
    },
    {
        name: 'text-color',
        message: 'Text = Enter a color keyword (OR a hexadecimal number):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose the shape of your image:',
        choices: ['Circle', 'Rectangle', 'Square', 'Ellipse', 'Triangle']
    },
    {
        name: 'shape-color',
        message: 'Shape = Enter a color keyword (OR a hexadecimal number)'
    },
]
// create SVG class constructor and methods setShape, setTextElement, and render to return the svgString
class Svg {
    constructor(){
        this.textBuilder = ''
        this.shapeBuilder = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeBuilder}${this.textBuilder}</svg>`
    }
    setTextElement( text, color, textX, textY ){
        this.textBuilder = `<text x="${textX}" y="${textY}" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shapeBuilder = shape.render()
    }
}
// async function initializes the app and awaits for inquirer answers
async function init() {
    console.log('Welcome! Generator initializing...')

    const answers = await inquirer.prompt(questions)
    // condition for text length
    if (answers.text.length < 0 && answers.text.length >= 4) return console.log('Invalid Input! Please enter up to three characters.')

    const userShapeInput = answers["shape"]
        // creating new shape object depending on userShapeInput passing in shape data
        if (userShapeInput === 'Circle') {
            userShape = new Circle(answers["shape-color"])
        } else if (userShapeInput === 'Rectangle') {
            userShape = new Rectangle(answers["shape-color"])
        } else if (userShapeInput === 'Square') {
            userShape = new Square(answers["shape-color"])
        } else if (userShapeInput === 'Ellipse') {
            userShape = new Ellipse(answers["shape-color"])
        } else if (userShapeInput === 'Triangle') {
            userShape = new Triangle(answers["shape-color"])
        } else {
            console.log('Shape input invalid.')
        }
        // creates main svg object passing in all data creating svgString
    const svg = new Svg()
    if (userShapeInput === 'Ellipse') {
        svg.setTextElement(answers["text"], answers["text-color"], 125, 100)
    } else
        svg.setTextElement(answers["text"], answers["text-color"], 150, 125)
    svg.setShape(userShape)
    svgString = svg.render()
    // created new file with svg obj as data
    fs.writeFile('logo.svg', svgString, (err) => {
        if (err) return console.log(err)
    })

    console.log('Generated logo.svg')
}
// starts application
init()
