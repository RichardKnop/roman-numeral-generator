if (typeof(NS) === "undefined") {
    NS = {};
}
if (typeof(NS.Lib) === "undefined") {
    NS.Lib = {};
}

// Create the RomanNumeralGenerator object by defining its constructor
NS.Lib.RomanNumeralGenerator = function RomanNumeralGenerator() {
    this.mapping = {
        0: {"M": 1000},
        1: {"CM": 900},
        2: {"D": 500},
        3: {"CD": 400},
        4: {"C": 100},
        5: {"XC": 90},
        6: {"L": 50},
        7: {"XL": 40},
        8: {"X": 10},
        9: {"IX": 9},
        10: {"V": 5},
        11: {"IV": 4},
        12: {"I": 1}
    };
}
// Add method to convert arabic number to roman numeral to the RomanNumeralGenerator's prototype
NS.Lib.RomanNumeralGenerator.prototype.convert = function(number) {
    if (number < 1 || number > 3999) {
        return false;
    }
    
    var romanNumeral = "";
    
    for (index in this.mapping) {
        var romanSymbol;
        var decimalValue;
        for (key in this.mapping[index]) {
            romanSymbol = key;
            decimalValue = this.mapping[index][key];
        }
        
        var div = Math.floor(number / decimalValue);
        if (div > 0) {
            for (i = 0; i < div; i++) {
                romanNumeral += romanSymbol;
            }
        }
        
        number = number % decimalValue;
    }
    
    return romanNumeral;
}