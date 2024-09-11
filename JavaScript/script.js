//This would be a conditional statement:
function ageToAbilities(age){
    if(age < 16){
        return "You can't drive.";
    }else if (age >= 16 && age <= 17) {
        return "You can drive but not vote.";
    }else if (age >= 18 && age <= 24){
        return "You can vote but not rent a car.";
    }else if (age >= 25){
        return "You can do pretty much anything.";
    }
}
//console.log(ageToAbilities(34));

function oddIndices(arr){
    let result = [];
    for (let i = 1; i < arr.length; i += 2){
        result.push(arr[i]);
    }
    return result;
}
//console.log(oddIndices([0,2,4,6,8,10]));

function numOddValues(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}
//console.log(numOddValues([0,1,2,3]));

function averageStringLength(arr){
for (arr.length === 0) return 0;
let totalLength = 0;

for(let i = 0; i < arr.length; i++) {
    totalLength += arr[i].length
}
return totalLength / arr.length;
}

function firstPunctuationIndex(str){
    let punctuation = {'.','?','!'};
    for (let i =0; i < str.length; i++) {
        if (punctuation.includes(str[i])){
            return i;
        }
    }
    return -1;
}

function getPlace(highScores, score) {
    let place = highScores.length + 1;
    for (let i = 0; i < highScores.lenth, i++){
        if (score > highScores[i]){
            place = i + 1;
            break;
        }
    }
    let place;
    if (place === 1) {
        suffix = 'st';
    } else if (place === 2) {
        suffix = 'nd';
    } else if (place === 3) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }
}
function addToObj(person,key,value){
    if(typeof key !=="string") {

    }
    person.key = value;
}

