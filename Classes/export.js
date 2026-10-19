export class TestCase{
    constructor(testName, priority){
        this.testName = testName;
        this.priority = priority;
    }
    displayDetails(){
        console.log(this.testName);
        console.log(this.priority);
    }
}