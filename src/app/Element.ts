export class Element {
    name:           string;
    atomic_mass:    number;
    category:       string;
    number:         number;
    symbol:         string;
    xpos:           number;
    ypos:           number;
    description:    number;

    ToString(){
        return this.name + " " + this.atomic_mass + " " + this.category + " " + this.number + " " + " " + this.symbol + " " + this.xpos + " " + this.ypos;
    }

    GetMass(){
        if(this.atomic_mass.toString().length > 5){
            return this.atomic_mass.toString().slice(0, 5 - this.atomic_mass.toString().length); 
        }
        else{
            return this.atomic_mass;
        }
    }
    GetXPos(){

        return (this.xpos * 100);
    }
    GetYPos(){
        if(this.number >= 57 && this.number <= 71)
            return this.ypos * 110;

        if(this.number >= 89 && this.number <= 103)    
            return this.ypos * 110;

        return (this.ypos * 100);
    }
}
