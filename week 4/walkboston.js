import {boston} from './boston.js'
var bostondata = boston.data
//console.log(bostondata);
var result="";
var topSalaries=[];
var salary='';
var earner='';

for(let i=0;i<bostondata.length;i++){
topSalaries.push([bostondata[i][8],bostondata[i][11]]);
}
topSalaries.sort(function(a,b){
    return b[1]-a[1];
})
for (let i = 0; i < 5; i++) {
    salary=salary+"<li>"+"<h1>" + topSalaries[i][0] +"</h1>" + "<h1>" + topSalaries[i][1] + "</h1>"+"</li>";
    
}
// Add you code
let topEarners=topSalaries.filter(isBig);
function isBig(element){
    return element[1]>200000;
}
for (let i = 0; i < topEarners.length; i++) {
    earner=earner+"<li>"+"<h1>" + topEarners[i][0] +"</h1>" + "<h1>" + topEarners[i][1] + "</h1>"+"</li>";
    
}

document.getElementById('container').innerHTML = salary;
document.getElementById('earn').innerHTML = earner;
