class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    birthYear(){
        return 2023 - this.age;
    }

    print(){
        document.getElementById("demo").innerHTML =
        "the person is "+this.name+" born in, "+this.address+" at "+this.birthYear();
    }
}