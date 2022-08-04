
// Module declaration
// This file is not accessible from outside, it defied on its scope
// use export to make it accessible, and import to use it
export class Point{

    constructor(private _x: number, private _y: number){

    }

    draw(){
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

}