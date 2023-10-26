// ===multi stage conditions===
// check-out mark-sheet number to GPA...
// A+ =80;
// A =70;
// A- =60;
// B =50;
// C =49;
// C =34;


let results = 97

if (results<0 || results>100){
    console.log('invalid numbers')
}
else if(results>=80 && results<=100){
    console.log('Get A+')
}
else if(results>=70){
    console.log('Get A')
}
else if(results>=60){
    console.log('Get A-')
}
else if(results>=50){
    console.log('Get B')
}
else if(results>=40){
    console.log('Get C')
}
else if(results>=33){
    console.log('Get D')
}
else{
    console.log('You are fail')
}