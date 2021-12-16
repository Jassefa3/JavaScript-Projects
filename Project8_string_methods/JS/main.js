function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function func() {
	var str = 'geeksforgeeks';
	var string = str.toUpperCase();
	document.getElementById("string").innerHTML = Section;
}

let text = "Mr. Blue has a blue house";
let position = text.search("Blue");

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() {
    let totn_string = 'TechOnTheNet';
    let result = totn_string.fixed();
    document.getElementById("Fixed").innerHTML = result;
}

function valueOf_Method() {
    let totn_string = 'the best';
    let result = totn_string.valueOf();
    document.getElementById("value").innerHTML = result;
}

function slice_method() {
    const fruits= ["Bananas", "Apples", "Oranges", "Grapes", "Melon"];
    const citrus = fruits.slice(1, 4);
    document.getElementById("fruit").innerHTML = citrus;
}
