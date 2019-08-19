import './weather.js';
import './plane.js';

class Airport {

    constructor(name) {
        this.name = name;
        this.capacity = 100;
        this.planes = [];

    }

    land(plane) {
        if (weahter.isStormy) {
            alert('stormy')
            return
        }
        if (this.planes.length >= 100) {
            console.log('airport is full')
            return
        }
        plane.land(plane)
        this.planes.push(plane)
        return 'plane landed'
    }
    takeOff(plane) {
        const index = this.planes.indexOf(plane)
        this.planes.splice(index, 1)
        return 'plane took off'
    }

}