function vowels(string) {
    var a = occurance(string, "a");
    var e = occurance(string, "e");
    var i = occurance(string, "i");
    var o = occurance(string, "o");
    var u = occurance(string, "u");

    return "A : " + a + "\n E : " + e + "\n I : " + i + "\n O : " + o + "\n U : " + u;
}

function occurance(string, character) {
    var occur = 0;
    string = string.toLowerCase()
    for (var i = 0; i < string.length; i++) {
        if (string[i] === character) {
            occur++;
        }
    }
    return occur;
}
document.write(vowels("Hey This is Skillsanta JS Training"));

//test cases:
//"hey this is shrey ruhela"
//this is skillsanta
