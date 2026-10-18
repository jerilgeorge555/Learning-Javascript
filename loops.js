//normal loop
for(let i=0; i<5; i++){
    console.log(i);
}

//for..of loop
const browsers = ['chromium', 'firefox', 'webkit'];
for(const browser of browsers){
    console.log(browser);
}

//forEach() loop
const arr = [1,2,3,4,5];
arr.forEach(x => {
    let sum = x+10;
    console.log(sum);
});

//map
const num = [1,2,3,4,5]
const doubled = num.map(a => a*10);
console.log(doubled);

let str = ['a', 'b', 'c'];
let appended = str.map((strTemp) => strTemp+'Hi');
console.log(appended);

//filter
let isEven = num.filter((x) => x%2 === 0);
console.log(isEven);




//Exercise
const testCases = [
    { name: "Login", priority: "High", enabled: true },
    { name: "Search", priority: "Medium", enabled: true },
    { name: "Checkout", priority: "High", enabled: false },
    { name: "Profile", priority: "Low", enabled: true }
];

//Use for...of to print the name of every test case.
for(const testCase of testCases){
    console.log(testCase.name);
}

//Use map() to create a new array containing only the test case names. Print the resulting array.
let testNames = testCases.map((testCase) => testCase.name);
console.log(testNames);

let testNamesAndEnabled = testCases.map((testCase) => ({
    name:testCase.name,
    enabled: testCase.enabled
}));
console.log(testNamesAndEnabled);

//Use filter() to create a new array containing only the test cases that are both enabled and marked with "High" priority. Print the resulting array.
let filteredArray = testCases.filter((sample) => sample.priority==='High' && sample.enabled);
console.log(filteredArray);
//Print how many test cases are enabled. You may use filter() and the array's length property.
let enabledTests = testCases.filter((sample) => sample.enabled);
console.log(enabledTests.length);

console.log((testCases.filter((sample) => !sample.enabled)).length);//another option
