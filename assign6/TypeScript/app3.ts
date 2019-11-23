export class Puppy {
    //this is a method.
    bark(){
        //That's how russion dogs talk
        return 'Gav gav!!';
    }
}

//now we can istantiate (create) it
var hotdog = new Puppy();
// and use it's methods
console.log(hotdog.bark());