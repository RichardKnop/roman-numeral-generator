if (typeof(NS) === "undefined") {
    NS = {};
}
if (typeof(NS.Lib) === "undefined") {
    NS.Lib = {};
}
if (typeof(NS.Test) === "undefined") {
    NS.Test = {};
}

// Create a test suite for our class
NS.Test.RomanNumeralGenerator = function RomanNumeralGenerator() {
    this.generator = new NS.Lib.RomanNumeralGenerator();
    this.passed = 0;
    this.failed = 0;
}
// A basic assertion method to check expected value equals actual value
NS.Test.RomanNumeralGenerator.prototype.assertEquals = function(expected, actual) {
    if (actual !== expected) {
        this.failed++;
        return false;
    }
    this.passed++;
    return true;
}
// This methods runs all unit tests
NS.Test.RomanNumeralGenerator.prototype.runTests = function() {
    // Test returns false for number < 1
    this.assertEquals(false, this.generator.convert(0));
    // Test returns false for number > 3999
    this.assertEquals(false, this.generator.convert(4000));
    
    // Now let's test the actual conversion
    this.assertEquals("I", this.generator.convert(1));
    this.assertEquals("II", this.generator.convert(2));
    this.assertEquals("III", this.generator.convert(3));
    this.assertEquals("IV", this.generator.convert(4));
    this.assertEquals("V", this.generator.convert(5));
    this.assertEquals("VI", this.generator.convert(6));
    this.assertEquals("VII", this.generator.convert(7));
    this.assertEquals("VIII", this.generator.convert(8));
    this.assertEquals("IX", this.generator.convert(9));
    this.assertEquals("X", this.generator.convert(10));
    this.assertEquals("XI", this.generator.convert(11));
    this.assertEquals("XIV", this.generator.convert(14));
    this.assertEquals("XV", this.generator.convert(15));
    this.assertEquals("XIX", this.generator.convert(19));
    this.assertEquals("XX", this.generator.convert(20));
    this.assertEquals("XXII", this.generator.convert(22));
    this.assertEquals("XXIV", this.generator.convert(24));
    this.assertEquals("XXV", this.generator.convert(25));
    this.assertEquals("XXIX", this.generator.convert(29));
    this.assertEquals("XL", this.generator.convert(40));
    this.assertEquals("L", this.generator.convert(50));
    this.assertEquals("LVII", this.generator.convert(57));
    this.assertEquals("XC", this.generator.convert(90));
    this.assertEquals("XCIX", this.generator.convert(99));
    this.assertEquals("C", this.generator.convert(100));
    this.assertEquals("CXLIV", this.generator.convert(144));
    this.assertEquals("CCCXCIX", this.generator.convert(399));
    this.assertEquals("CD", this.generator.convert(400));
    this.assertEquals("CDXXXIII", this.generator.convert(433));
    this.assertEquals("CDLXXXVIII", this.generator.convert(488));
    this.assertEquals("D", this.generator.convert(500));
    this.assertEquals("DXLI", this.generator.convert(541));
    this.assertEquals("DCCCXCVII", this.generator.convert(897));
    this.assertEquals("CM", this.generator.convert(900));
    this.assertEquals("M", this.generator.convert(1000));
    this.assertEquals("MCMX", this.generator.convert(1910));
    this.assertEquals("MCMXCIX", this.generator.convert(1999));
    this.assertEquals("MMXII", this.generator.convert(2012));
    this.assertEquals("MMCDXLIV", this.generator.convert(2444));
    this.assertEquals("MMMDCLX", this.generator.convert(3660));
    this.assertEquals("MMMDCCLXXV", this.generator.convert(3775));
    this.assertEquals("MMMCMXCIX", this.generator.convert(3999));
}