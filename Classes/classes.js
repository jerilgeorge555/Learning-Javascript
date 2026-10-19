class TestCase{
    constructor(testName, priority){
        this.testName = testName;
        this.priority = priority;
    }
    displayName(){
        console.log(this.testName, this.priority);
    }
}

const testCase = new TestCase('Sample','high');
const testCase1 = new TestCase('Sample1','medium');
testCase.displayName();
testCase1.displayName();