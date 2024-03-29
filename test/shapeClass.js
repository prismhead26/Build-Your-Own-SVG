class Shape {
    constructor(color){
        // this.color = function (color){
        //     this.color = color
        this.color = color
        // setColor(color){
        //     this.color=(color);
        // }
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}
class Rectangle extends Shape {
    render() {
        return `<rect x="60" y="10" rx="10" ry="10" height="100%" width="100%" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="50"  height="200" width="200" fill="${this.color}"/>`
    }
}
class Ellipse extends Shape {
    render() {
        return `<ellipse cx="120" cy="80" rx="100" ry="50" height="200" width="100%" fill="${this.color}"/>`
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Rectangle, Square, Ellipse, Triangle}