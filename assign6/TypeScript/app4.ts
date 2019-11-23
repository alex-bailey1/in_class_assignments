export class Puppy {
    constructor(public name: string){
        //later we'll have code here
    }
    bark(){
        return 'Gav! my name is ' + this.name;
    }
}

var hotdog = new Puppy('Edouard');
console.log(hotdog.bark());
//let's create more puppies
var oscar = new Puppy('Oscar-Clause');
console.log(oscar.bark());