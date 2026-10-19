class TestCase{
    constructor(testName, priority){
        this.testName = testName;
        this.priority = priority;
    }
    displayDetails(){
        console.log(this.testName);
        console.log(this.priority);
    }
}

class APITestCase extends TestCase{
    constructor(testName, priority){ // not necessary to create constructor to use super. JS has it by default. Do not add unless you need a constructor for child class
        super(testName, priority);
    }
    execute(){
        console.log('Executing API tests');
    }
}

const apiTestCase = new APITestCase('Sample', 'medium');
apiTestCase.execute();
apiTestCase.displayDetails();