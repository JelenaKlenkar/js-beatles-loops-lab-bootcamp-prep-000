// add solution here
function theBeatlesPlay(musicians, instruments){
  var musicianString;
  var musicianInstrument=[];
  for(var i=0; i<musicians.length;i++){
    musicianString= musicians[i] + ' plays ' + instruments[i];
    musicianInstrument[i]=musicianString;
  }
  return musicianInstrument;
}

const facts=[
'He was the last Beatle to learn to drive',
'He was never a vegetarian',
'He was a choir boy and boy scout',
'He hated the sound of his own voice'
];

function johnLennonFacts(factsArray){
var i=0;
var newArray=[];
  while(factsArray.length > i){
  newArray.push(`${factsArray[i]}` + "!!!");
i++;

}
return newArray;
}
