// const { describe } = require('yargs')
const {Circle, Rectangle, Square, Triangle, Ellipse} = require('./shapeCL')

describe('Circle', () => {
    it('renders correctly', () => {
        const color = 'blue'
        const shape = new Circle(color)
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`)
    })
})
describe('Rectangle', () => {
    it('renders correctly', () => {
        const color = 'blue'
        const shape = new Rectangle(color)
        expect(shape.render()).toEqual(`<rect x="60" y="10" rx="10" ry="10" height="100%" width="100%" fill="${color}"/>`)
    })
})
describe('Square', () => {
    it('renders correctly', () => {
        const color = 'blue'
        const shape = new Square(color)
        expect(shape.render()).toEqual(`<rect x="50"  height="200" width="200" fill="${color}"/>`)
    })
})
describe('ellipse', () => {
    it('renders correctly', () => {
        const color = 'blue'
        const shape = new Ellipse(color)
        expect(shape.render()).toEqual(`<ellipse cx="120" cy="80" rx="100" ry="50" height="200" width="100%" fill="${color}"/>`)
    })
})
describe('triangle', () => {
    it('renders correctly', () => {
        const color = 'blue'
        const shape = new Triangle(color)
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>`)
    })
})