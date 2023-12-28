function dataTypes(){
    let length = 17;
    var color = "blue";
    const person = {firstName:"Ichwan", lastName:"Sholihin"};

    document.getElementById("print").innerHTML = person.firstName + color + " "+length;
}