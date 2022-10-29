for(var k=1;k<=4;k++){
  str='';
  var start=((k)*(k+1))/2;
  str+=start+' '

for(let j=k;j<=3;j++){
  start+=j;
  str+=start+' ';
  
}
for(var j=3;j>=5-k;j--){
  start+=j;
  str+=start+' ';
}
  console.log(str)
}
