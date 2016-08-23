var Names=require('./starwar-names.json');
var randomArray=require('unique-random-array');

module.exports={
    all :Names,
    random: randomArray(Names)
};