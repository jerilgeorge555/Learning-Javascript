//object
const loginData ={userName: 'jeril', password: '1234', email: 'jerilgeorge555@gmail.com'};
console.log(loginData.userName);
console.log(loginData['userName']);
//array
const browsers = ['chromium', 'firefox', 'webkit'];
console.log(browsers[0]);
console.log(browsers.length);

//destructuring object
const {userName, password, email} = loginData; //can be done separately as well with just userName
console.log(userName, password, email);


//destructuring array
const [browser1, browser2, browser3] = browsers;
console.log(browser1, browser2, browser3);