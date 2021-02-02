// falsy value: 0, '', undefined, null, NaN, false.
// truthy value: '0', ' ', [], {}.

// variable ar man 0 hole ta sobsomai false hobe.
const age2 = 0;

if(age2){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

// variable ar man 0 bade onno kono sokha hole ta sobsomai true hobe.
const age = -4;

if(age){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}



const age2 = 0;

if(age2 || age2 == 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}



const nam = 'Solaiman';

if(nam.length > 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}


const nam2 = '';

if(nam2.length > 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}



const nam3 = ' ';

if(nam3.length > 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}


const nam4 = '0';

if(nam4.length > 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}


let name;
console.log(name);
if(name){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}


const name2 = null;

if(name2){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}


const name3 = NaN;

if(name3){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}


const name4 = [];

if(name4){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}


const name5 = {};

if(name5){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}



const name6 = false;

if(name6){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}



const name7 = 'false';

if(name7){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}