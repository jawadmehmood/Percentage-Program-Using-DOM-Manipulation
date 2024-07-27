var physics = document.querySelector('#physics');
var chemistry = document.querySelector('#chemistry');
var mathematics = document.querySelector('#mathematics');
var english = document.querySelector('#english');
var paraOne = document.querySelector('#para-one');
var paraTwo = document.querySelector('#para-two');
var paraThree = document.querySelector('#para-three');

function result(){
    if(physics.value > 100 || physics.value < 0 || chemistry.value > 100 || chemistry.value < 0 || mathematics.value > 100 || mathematics.value < 0 || english.value > 100 || english.value < 0){
        alert("Marks can't be greater than 100 and less than 0.");
    }
    else{
        var obtainedMarks = +physics.value + +chemistry.value + +mathematics.value + +english.value;
        var percentage = (obtainedMarks / 400) * 100;
        var grade;
        if(percentage >= 80){
            grade = 'A+';
        }
        else if(percentage < 80 && percentage >= 70){
            grade = 'A';
        }
        else if(percentage < 70 && percentage >= 60){
            grade = 'B';
        }
        else if(percentage < 60 && percentage >= 50){
            grade = 'C';
        }
        else{
            grade = "Fail";
        }
        paraOne.innerHTML = 'Obtained Marks: ' + obtainedMarks;
        paraTwo.innerHTML = 'Percentage: ' + percentage + '%';
        paraThree.innerHTML = 'Grade: ' + grade;
    }
}