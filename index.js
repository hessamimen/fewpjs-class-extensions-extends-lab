// // Your code here
class Polygon{
    constructor(integersArr){
        this.shapeSide = integersArr
        }
    get countSides(){
        return this.shapeSide.length;
    }
    get perimeter(){
        return this.shapeSide.reduce((previousValue, currentValue) =>  previousValue + currentValue)
    }
}
        
class Triangle extends Polygon{
            get isValid(){
        if(this.countSides !== 3) return
        let side1 = this.shapeSide[0];
        let side2 = this.shapeSide[1];
        let side3 = this.shapeSide[2];
        return (
            (side1 + side2 > side3) && (side2+side3>side1) && (side1+side3>side2)
        )

            }
        }

class Square extends Polygon{
    get isValid(){
        if(this.countSides !== 4) return
        let side1 = this.shapeSide[0];
        let side2 = this.shapeSide[1];
        let side3 = this.shapeSide[2];
        let side4 = this.shapeSide[3];
    return (side1 === side2 && side1 === side3 && side1 === side4)
    }
    get area(){
        return this.shapeSide[0] * this.shapeSide[1];
    }
}

let square = new Square( [ 5, 5, 5, 5 ] )
let square2 = new Square( [ 5, 4, 3 ,2] )

console.log(square2.isValid)
// square2.isValid
