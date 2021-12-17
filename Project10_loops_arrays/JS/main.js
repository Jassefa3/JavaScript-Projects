function string_Method() {
let text = "Hello World!";
let length = text.length;
document.getElementById("demo").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

  function array_Function() {
      var Custom_Picture = [];
      Custom_Picture[0] = "sleeping";
      Custom_Picture[1] = "playing";
      Custom_Picture[2] = "eating";
      Custom_Picture[3] = "purring";
      document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Custom_Picture[2] + ".";
  }

  function constant_function() {
      const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
      Musical_Instrument.color = "blue";
      Musical_Instrument.price = "$900";
      document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + "was" + Musical_Instrument.price;
  }

  let car = {
      make: "Dodge ",
      model: "Viper ",
      year: "2021 ",
      color: "red ",
      description : function() {
          return "The car is a " + this.year + this.color + this.make + this.model;
      }
};
document.getElementById("Car_Object").innerHTML = car.description();

  