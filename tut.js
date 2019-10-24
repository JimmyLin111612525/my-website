/*let firstName='Jon';
console.log(firstName);

let lastName = 'Schmidt';
let age=32;
console.log((typeof age)==='number');

let fullOnBlack = false;
console.log(fullOnBlack);

let fruits={'apple':4,'orange':9};
console.log(fruits);

delete fruits.apple;
console.log(fruits);


console.log(1+'5'); //->15
console.log('5'+1); //->51

console.log(firstName+' '+age); //->Jon 32
console.log('5'==5); //->true
console.log('5'===5); //->false

let job, maritalStatus;

job='teacher';
maritalStatus=false;

console.log('IS this dude married?: '+maritalStatus); //type coercion

job='unemployed';
console.log(job); //Variable mutation

const gender='male';
//gender='female';
console.log(gender); //Example of constant type. Line 36 throws an error because of constant type.

var hello=prompt('What is your purpose?'); //A popup window pops up

console.log(hello);*/

/*************************************************************************
 * CODING CHALLENGE 1
 */

/*let markMass,markHeight,johnMass,johnHeight;
markMass=65.7709;
markHeight=1.7526;

johnMass=64.7709;
johnHeight=1.8034;

function calcBMI(mass,height){
    return mass/(Math.pow(height,2));
}

console.log(`Is Mark's BMI higher than John's?: `+ (calcBMI(markMass,markHeight)>calcBMI(johnMass,johnHeight)));
console.log(calcBMI(markMass,markHeight),calcBMI(johnMass,johnHeight));*/

/*let firstName="Jim";
let maritalStatus='single';

if(maritalStatus==='married'){
    console.log(firstName+' is married');
}else{
    console.log(firstName+' is not married');
}

let isMarried = true;
if(isMarried){
    console.log(firstName+' is married');
}else{
    console.log(firstName+' is not married');
}

let markMass,markHeight,johnMass,johnHeight;
markMass=65.7709;
markHeight=1.7526;

johnMass=264.7709;
johnHeight=1.8034;

function calcBMI(mass,height){
    return mass/(Math.pow(height,2));
}

markBMI=calcBMI(markMass,markHeight);
johnBMI=calcBMI(johnMass,johnHeight);

if(markBMI>johnBMI){
    console.log('Mark has a higher BMI than John');
}else{
    console.log('Mark doesn\'t have a higher BMI than John');
}
*/

/*let name='AY';
let age='14';

if(age<13){
    console.log(name+' is a kid');
}else if(age>=13 && age<18){
    console.log(name+' is a teen');
}else if(arge>=18 && age<30){
    console.log(name+' is a man');
}else{
    console.log(name+' is old enough');
}*/

/*let firstName='jim';
let age='16';

age>=21 ? console.log(firstName +' can drink.') : console.log(firstName+' cannot drink');

let drink = age>=21 ? 'alcohol':'juice';
console.log(drink);

let job='gym teacher';
switch (job){
    case 'teacher':
    case 'gym teacher':
        console.log(firstName+' is a teacher');
        break;
    case 'janitor':
        console.log(firstName+' is a janitor');
        break;
    case 'driver':
        console.log(firstName+' is a driver');
        break;
    default:
        console.log(firstName+' holds an unknown job');
}*/

//let name='AY';
//let age='14';

/*if(age<13){
    console.log(name+' is a kid');
}else if(age>=13 && age<18){
    console.log(name+' is a teen');
}else if(arge>=18 && age<30){
    console.log(name+' is a man');
}else{
    console.log(name+' is old enough');
}*/

/*
let name='AY';
let age='14';

switch(true){
    case (age<13):
        console.log(name+' is a kid');
        break;
    case(age>=13 && age<18):
        console.log(name+' is a teen');
        break;
    case(arge>=18 && age<30):
        console.log(name+' is a man');
        break;
    default:
        console.log(name+' is old enough');
}*/

/***************************************************
 * truthy and falsey values
 */

 //falsey values: undefined, null, 0, empty strings, NaN
 //truthy values: anything not falsey!

/*let height;

if(height){
    console.log('the var is defined');
}else{
    console.log('the var is undefined');
}

let length=0;
if(length){
    console.log('the var is defined');
}else{
    console.log('the var is undefined');
} //SINCE 0 is a falsey value, it will be treated as undefined unless the case is accounted for.

if(length || length ===0){
    console.log('the var is defined');
}else{
    console.log('the var is undefined');
}

//Again, == just checks the contents with type coercion. Data types don't have to match.
//=== is very strict equality checking, everything must be the same for true.
*/

//CODING CHALLENGE!!!!

/*let johnGame1=9;
let johnGame2=9;
let johnGame3=9;
let mikeGame1=9;
let mikeGame2=9;
let mikeGame3=9;

let maryGame1=9;
let maryGame2=9;
let maryGame3=9;

function avg(...nums){
    let total=0;
    let length;
    for(let i =0;i<nums.length;i++){
        total+=nums[i];
        if(i===nums.length-1){
            length=i+1;
        }
    }
    return total/length;
}

let johnAvg=avg(johnGame1,johnGame2,johnGame3);
let mikeAvg=avg(mikeGame1,mikeGame2,mikeGame3);
let maryAvg=avg(maryGame1,maryGame2,maryGame3);

if(johnAvg>mikeAvg && johnAvg>maryAvg){
    console.log('john has the highest avg');
}else if(mikeAvg>johnAvg && mikeAvg>maryAvg){
    console.log('mike has the higher avg');
}else if(maryAvg>mikeAvg && maryAvg>johnAvg){
    console.log('mary has the highest avg');
}else{
    console.log('IT\'S A DRAW');
}*/


/*function calcAge(birthYear){
    return 2019-birthYear;
}

let age = calcAge(1956);


function yearsUntilRetirement(birthYear,firstName){
    let age = calcAge(birthYear);
    if(age>=60){
        console.log(firstName+' is already retired');
    }else{
        console.log(firstName+' still has '+(60-age)+' years until retirement.');
    }
}

console.log(yearsUntilRetirement(1800,'jimbo'));*/

/*let waddyaDo = function(job,firstName){
    console.log(firstName+'\'s job is '+job);
}

let whatDoYouDo = function(job,firstName){
    switch(job){
        case 'teacher':
            return firstName + ' is a teacher'; //return is an automatic break.
        case 'delivery guy':
            return firstName+' is a delivery dude';
        default:
            return firstName+' has a whack ass job';
    }
}

waddyaDo('chink','bob');

console.log(whatDoYouDo('chink','bob'));*/

/*****************************
 * arrays
 */

//let names =['jim','bob','lee'];
//let years = new Array(2001,2002,2003); //very unusual way of making array

//ARRAYS ARE MUTABLE and HETEROGENEOUS

/*names[1]='merk';



names[3]='perker';
console.log(names);
names.push('perter');

names.push(100);
console.log(names);

names.unshift('ferget'); //push to the front
console.log(names);

names.pop();

names.shift(); //pop from the front.
console.log(names);

console.log(names.indexOf('jim'));
names.indexOf('lee')===-1?console.log('yes'):console.log('no');*/

//CODING CHALLENGE!!!

/*function calcTip(...bills){
    let tips=[];
    let final=[];
    for(let i=0;i<bills.length;i++){
        if(bills[i]<50){
            tips.push(bills[i]*0.2);
            final.push(bills[i]*1.2);
        }else if(bills[i]>=50 && bills[i]<200){
            tips.push(bills[i]*0.15);
            final.push(bills[i]*1.15);
        }else{
            tips.push(bills[i]*0.1);
            final.push(bills[i]*1.1);
        }
    }
    return {tips:tips,
            final:final};
}

let arrays=calcTip(124,48,268);
console.log(arrays.tips,arrays.final);*/


//OBJECTS!!!!!

/*let john = {
    firstName:'john',
    lastName:'smith',
    birthYear:1990,
    family:['mom','dad'],
    job: 'teacher',
    maritalStatus:false,
    calcAge: function(){
        this.age = 2019-this.birthYear;
    }
};

console.log(john);
console.log(john.birthYear);
console.log(john['firstName']); //must be a string here
let x = 'birthYear';
console.log(john[x]);

john.job='pizza dude';
john['maritalStatus']=true;
console.log(john);

let jim = new Object;
jim.name='JIM';
jim.birthYear='1999';
jim['lastname']='LEEN';

console.log(jim);
console.log(john.calcAge());
console.log(john);*/

//CODING CHALLENGE!!!

/*let mark={
    name:'mark wiens',
    mass:98,
    height:78,
    calcBMI: function(){
        this.BMI=this.mass/Math.pow(this.height,2)
        return this.BMI;
    }
};

let john={
    name:'john bitch',
    mass:4,
    height:3,
    calcBMI: function(){
        this.BMI=(this.mass/Math.pow(this.height,2));
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();

mark.BMI>john.BMI? console.log(mark.name+' has the higher BMI of '+mark.BMI): (mark.BMI<john.BMI?console.log(john.name+' has the higher BMI of '+john.BMI):console.log(mark.name+' and '+john.name+' have the same BMI of '+mark.BMI));*/

//LOOPS

/*for(let i=0;i<10;i+=2){
    console.log(i+1);
}

let john=['john','smith',1990,'designer'];
let i=0;
while(i<john.length){
    console.log(john[i]);
    i++;
}

for(let i=0;i<john.length;i++){
    if(typeof john[i] !== 'string'){
        continue; //goes directly to next iteration, skipping the body
    }
    console.log(john[i]);
}*/

//CODE CHALLENGE

/*let johnFamilyExpenses={
    bills:[124,48,268,180,42],
    tips:[],
    final:[],
    calcTip:function(){
        for(let i=0;i<this.bills.length;i++){
            if(this.bills[i]<50){
                this.tips.push(this.bills[i]*0.2);
                this.final.push(this.bills[i]*1.2);
            }else if(this.bills[i]>=50 && this.bills[i]<200){
                this.tips.push(this.bills[i]*0.15);
                this.final.push(this.bills[i]*1.15);
            }else{
                this.tips.push(this.bills[i]*0.1);
                this.final.push(this.bills[i]*1.1);
            }
        }
        return {tips:this.tips,final:this.final};
    }
}

johnFamilyExpenses.calcTip();
console.log(johnFamilyExpenses.tips,johnFamilyExpenses.final);

let markFamilyExpenses={
    bills:[77,475,110,45],
    tips:[],
    final:[],
    calcTip:function(){
        for(let i=0;i<this.bills.length;i++){
            if(this.bills[i]<100){
                this.tips.push(this.bills[i]*0.2);
                this.final.push(this.bills[i]*1.2);
            }else if(this.bills[i]>=100 && this.bills[i]<300){
                this.tips.push(this.bills[i]*0.1);
                this.final.push(this.bills[i]*1.1);
            }else{
                this.tips.push(this.bills[i]*0.25);
                this.final.push(this.bills[i]*1.25);
            }
        }
        return {tips:this.tips,final:this.final};
    }
}

markFamilyExpenses.calcTip();
console.log(markFamilyExpenses.tips,markFamilyExpenses.final);

function calcAvg(arr){
    let total=0;
    let length=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
        length++;
    }
    return total/length;
}

calcAvg(johnFamilyExpenses.tips)>calcAvg(markFamilyExpenses.tips)?console.log('John\'s family is very generous with a tip avg of '+calcAvg(johnFamilyExpenses.tips)):(calcAvg(johnFamilyExpenses.tips)<calcAvg(markFamilyExpenses.tips)?console.log('Mark\'s family is very generous with a tip avg of '+calcAvg(markFamilyExpenses.tips)):console.log('Both families are very generous with a tip avg of '+calcAvg(markFamilyExpenses.tips)));*/


//HOISTING FOR FUNCTIONS
/*calcAge(1998);

function calcAge(year){
    console.log(2019-year);
    return 2019-year;
}*/

//retirement(1945); ->this will raise an error because hoisting only works for function declarations, not expressions.

/*let retirement=function(year){
    console.log(60-calcAge(year));
}

retirement(1945);

//HOISTING FOR VARIABLES
console.log(age);

var age=23; //->undefined is outputted with var, but if it was let an error would popup.

function foo(){
    let age=65;
    console.log(age);
}

foo();
console.log(age); //EXECUTION CONTEXT AND SCOPES COMING IN TO PLAY :D
*/

/*let a = 'Hello!';
first();

function first(){
    let b = 'Hi!';
    second();

    function second(){
        let c = 'Hey!';
        console.log(a+b+c);
    }
}//SCOPING CHAIN MOVES UPWARD BECOMING MORE GENERAL
*/

/*let a = 'Hello!';
first();

function first(){
    let b = 'Hi!';
    second();

    function second(){
        let c = 'Hey!';
        third();
    }
}
function third(){
    let d='John';
    console.log(a+b+c+d);
}*/

//THIS KEYWORD
/*
console.log(this); //AS U CAN SEE HERE, BY DEFAULT THIS IS BOUND TO THE WINDOW OF A BROWSER.
*/

/*calcAge(1999);

function calcAge(year){
    console.log(2016-year);
    console.log(this); // THE THIS IS STILL BOUND TO THE WINDOW, WHICH IS A GLOBAL OBJECT, BECAUSE THE FUNCTION IS STILL IN THE GLOBAL CONTEXT.
}*/

/*let john ={
    name:'john',
    birthYear:1990,
    calcAge:function(){
        console.log(this);
        console.log(2019-this.birthYear);

        function innerFunc(){
            console.log(this);
        }
        innerFunc();
    }
}

john.calcAge();

let mike={
    name:'mike',
    birthYear:'1984'
    
}

mike.calcAge=john.calcAge; //METHOD BORROWING

mike.calcAge();
*/


//OOP!!!

/*let john={
    name:'john',
    dob:1999,
    job:'teacher'
};// How we used to do it

let Person = function(name,birthYear,job){
    this.name=name;
    this.birthYear=birthYear;
    this.job=job;
    this.calculateAge = function(){
        this.age=2019-this.birthYear;
        console.log(this.age);
    }
}
//IF YOU WANT TO ADD A FUNCTION TO THE OBJECT, YOU CAN ADD IT DIRECTLY TO THE CONSTRUCTOR OR DO THIS: Person.prototype.calculateAge = and then the function stuff.

//IF YOU WANT TO ADD A PROPERTY LIKE THE PROTOTYPE THING YOU CAN SUCH AS   Person.prototype.lastName = 'Smith' AND DOING IT THIS WAY MEANS THAT YOU WANT IT TO BE THE SAME FOR ALL PERSON INSTANCES.

//Using the PROTOTYPE thing however will only be "shown" in the prototype
let John = new Person('John',1990,'Teacher');//very similar to java
John.calculateAge(); 

let jane = new Person('Jane',1969,'Designer');
let mark = new Person('Mark',1948,'Veteran');*/

//Object.create

/*let personProto={
    calcAge:function(){
        this.age=2019-this.birthYear;
        console.log(this.age);
    }
}

let john = Object.create(personProto);
john.name='john';
john.birthYear=1990;
john.job='teacher';

let jane=Object.create(personProto,{
    name:{value:'Jane'},
    birthYear:{value:1969},
    job:{value:'designer'}
});*/

//Primitives vs Objects
//variables that hold primitives actually hold the value
//variables that hold objects only hold the reference to the object in memory

/*let a=23;
let b=a;

a=2;
console.log(a,b);//a and b will be different because of the properties of primitives, they hold two different copies of a.

let ob1={
    name:'ob1',
    age:26
}

let ob2=ob1;
ob1.age=30;
console.log(ob1.age,ob2.age);//both ob1 and ob2 will have the same ages due to the properties of objects. The equal thing there just made a new reference to the same object.ob1 and ob2 point to the same thing in memory.Same with all other objects(functions,arrays all that).

//Functions
let age=29;
let obj={
    name:'faggot',
    city:'NYC'
}

function change(a,b){
    a=30;
    b.city='LA';
}

change(a,obj);
console.log(age,obj.city); //a copy of a is made and passed into function. In the case of b since it is an object, the reference is passed into it, mutating the actually contents of the object.*/

//FIRST CLASS FUNCTIONS -> PASSING FUNCTIONS AS ARGUMENTS

/*let years=[2000,2001,2002,2003,2004];

function arrayCalc(arr,func){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(func(arr[i]));
    }
    return newArr;
}//functions that are passed into another function are called callback functions

function calcAge(year){
    return 2019-year;
}

function fullAge(year){
    return year>=18
}

function maxHeartRate(age){
    if(age>=18 && age<=81){
        return Math.round(206.9-(0.67*age));
    }else{
        return 'Dead';
    }
}
let ageArray=arrayCalc(years,calcAge);//no paranthesis here because calcAge will be called later in arrayCalc function.

let fullAgeArray=arrayCalc(ageArray,fullAge);

let maxHeartRateArray=arrayCalc(ageArray,maxHeartRate);
//console.log(ageArray);
//console.log(fullAgeArray);
console.log(maxHeartRateArray);*/

//FIRST CLASS FUNCTIONS -> Functions returning functions

/*function interviewQuestion(job){
    if(job==='designer'){
        return function(name){
            console.log(name+', can you please hand me your portfolio');
        }
    }else if(job==='teacher'){
        return function(name){
            console.log(name+', what subject do you want to teach');
        }
    }else{
        return function(name){
            console.log(name+', what the fuck do you do');
        }
    }
}

interviewQuestion('line cook')('Bill');*/

//IIFE -> Immediately invoked function expression

/*(function(){
    var score = Math.random()*10;
    console.log(score>=5);
})();

(function(goodluck){
    var score = Math.random()*10;
    console.log(score>=5-goodluck);
})(3); //very nice for data privacy*/

//CLOSURES

/*function retirement(retirementAge){
    let a = 'years left til retirement';
    return function(birthYear){
        let age=2019-birthYear;
        console.log((retirementAge-age)+a);
    }
}
let retirementUS=retirement(66);
let retirementGermany=retirement(65);
let retirementIceland=retirement(67);

retirementGermany(1990);
retirementIceland(1990);
retirementUS(1990);*/

/*function interviewQuestion(job){
    if(job==='designer'){
        return function(name){
            console.log(name+', can you please hand me your portfolio');
        }
    }else if(job==='teacher'){
        return function(name){
            console.log(name+', what subject do you want to teach');
        }
    }else{
        return function(name){
            console.log(name+', what the fuck do you do');
        }
    }
}*/

/*function interviewQuestion(job){
    return function(name){
        if(job==='designer'){
                console.log(name+', can you please hand me your portfolio');
        }else if(job==='teacher'){
                console.log(name+', what subject do you want to teach');
        }else{
                console.log(name+', what the fuck do you do');
        }
    }
}

let designerInterview=interviewQuestion('designer');
let teacherInterview=interviewQuestion('teacher');

designerInterview('Bitch');
teacherInterview('Motherfucker');*/

//FUNCTIONS: BIND, CALL, AND APPLY

/*let john={
    name:'john',
    age:19,
    job:'teacher',
    presentation:function(style,timeOfDay){
        if(style==='formal'){
            console.log('Good '+timeOfDay+' ladies and gentlemen! I\'m '+this.name+' and I am a '+this.age+' year old '+this.job);
        }else if(style==='friendly'){
            console.log('Hey, what\'s up? I\'m '+this.name+' and I am a '+this.age+' year old '+this.job+'. Have a good '+timeOfDay);
        }
    }
};

let emily={
    name:'emily',
    age:35,
    job:'designer'
};

john.presentation.call(emily, 'friendly', 'morning')//this variable now changed to emily ->METHOD BORROWING

john.presentation('formal','evening');

//john.presentation.apply(emily,['formal','afternoon']);  --> this is virtually the same as the call method except the arguments are in an array. HOWEVER, this won't work for the presentation method because it doesn't acceps arrays.

let johnFriendly = john.presentation.bind(john,'friendly');//the bind function makes a copy of a function so that it can be stored somewhere, such as a variable. The function will have a preset this and first parameter when you pass in the arguments when invoking it. This is also called CURRYING

johnFriendly('dawn');
johnFriendly('faggot');

let emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('fock you');

let years=[2000,2001,2002,2003,2004];

function arrayCalc(arr,func){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(func(arr[i]));
    }
    return newArr;
}//functions that are passed into another function are called callback functions

function calcAge(year){
    return 2019-year;
}

function fullAge(limit,age){
    return age>=limit
}

function maxHeartRate(age){
    if(age>=18 && age<=81){
        return Math.round(206.9-(0.67*age));
    }else{
        return 'Dead';
    }
}

var ages=arrayCalc(years,calcAge);
let fullJapan=arrayCalc(ages,fullAge.bind(this, 20));//the this in this scenario will be the individual elements in the new ages array.
console.log(ages);
console.log(fullJapan);
*/

//CODING CHALLENGE

(function(){

    

    let score=0;
    function Question(question,answers,correctAns){
        this.question=question;
        this.answers=answers;
        this.correctAns=correctAns;
    }
    
    let jsQuestion=new Question('Why was JavaScript created?',['1. For marketing','2. To better the world'],1);
    let myQuestion=new Question('Who are you',['1. Yo mama','2. You'],2);
    
    //console.log(jsQuestion.question,jsQuestion.answers,jsQuestion.correctAns);
    let questions=[jsQuestion,myQuestion];
    function questionChooser(...questions){
        let choice=Math.floor(Math.random()*(questions.length));
        return [choice,questions[choice]];
    }
    
    
    function questionCheck(userInput,promptQuestionObj,questionChoice){
        /*userInput==promptQuestionObj.correctAns?console.log('Correct!'):console.log('Incorrect, the correct answer is choice '+promptQuestionObj.correctAns);*/

        if(userInput==promptQuestionObj.correctAns){
            console.log('Correct!');
            score++;
        }else{
            console.log('Incorrect! Try again bitch!');
            score--;
        }
    }
    

    while(1=='1'){
        let question1=(questionChooser(jsQuestion,myQuestion))
        let promptQuestionObj=question1[1];
        let questionChoice=question1[0];
    
    //console.log(promptQuestionObj,questionChoice);
        console.log('--------------------------------------')
        console.log('Current score: '+score);
        console.log(promptQuestionObj.question);
        console.log(questions[questionChoice].answers[0]);
        console.log(questions[questionChoice].answers[1]);
        let userInput=prompt(promptQuestionObj.question+'\n'+promptQuestionObj.answers[0]+'\n'+promptQuestionObj.answers[1]);
        if(userInput==='exit'){
            break;
        }else{
            questionCheck(userInput,promptQuestionObj,questionChoice);
        }
    }
})();
