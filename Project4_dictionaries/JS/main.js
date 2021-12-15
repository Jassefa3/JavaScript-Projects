

function const_function() { 
    var Person = {
        firstName: "Bob",
        lastName : "Doe",
        id       : 5566,
    

    };      //example of method function
    document.getElementById("Dictionary2").innerHTML = Person.firstName + " " + Person.lastName;
     
}


function my_Dictionary() {
    var Animal = {
        species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!",
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}