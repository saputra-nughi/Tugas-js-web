class Animal{
    speak(){
        console.log("membuat suara");
        
    }
}
class Dog extends Animal{
    speak(){
        console.log("woof");
    }
}
class Cat extends Animal{
    speak(){
        console.log("meow");
    }
}
function makeAnimalspeak(animal){
    animal.speak();
}
const dog = new Dog();
const cat = new Cat();

makeAnimalspeak(dog);
makeAnimalspeak(cat);