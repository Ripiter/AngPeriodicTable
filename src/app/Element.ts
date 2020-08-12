export class Element {
    name:           string;
    atomic_mass:    number;
    category:       string;
    number:         number;
    symbol:         string;
    xpos:           number;
    ypos:           number;

    ToString(){
        return this.name + " " + this.atomic_mass + " " + this.category + " " + this.number + " " + " " + this.symbol + " " + this.xpos + " " + this.ypos;
    }
}
