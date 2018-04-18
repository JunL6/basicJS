//const companies = [
//    {name: 'Google', loc: 'Mountain View'},
//    {name: 'Facebook', loc: 'Menlo Park'},
//    {name: 'Uber', loc: 'San Francisco'}
//];
//
//const [{ loc }] = companies;
//console.log(loc);

//########### 2
//const Google = {
//    locations: ['Mountain View', 'New York', 'London'],
//    headquarter: 'USA'
//}
//
//const {locations} = Google;
//console.log(locations);
//console.log(loc);


//// ##### 3
//function signup({password, username, dataOfBirth, email, city}) {
//    //create user 
//    console.log(password);
//    console.log(username);
//}
//
//const user = {
//    username: 'myName',
//    password: 'mypassword',
//    email: 'myemail@example.com',
//    dateOfBirth: '1/1/1900',
//    city: 'New York'
//};

//signup(user);

const points = [
    [4, 5],
    [10, 1], 
    [0, 40]
];

const formatedPoints = points.map(([x, y]) => {
    return {x, y};
});

console.log(formatedPoints);

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher};
});

console.log(classesAsObject);


 const Google = {
     locs: ['Mountain View', 'New York', 'London']
 };

const {locs} = Google;
console.log(`sss: ${locs}`);
