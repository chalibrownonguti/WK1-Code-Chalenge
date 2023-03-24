// initialize a function called generaeSystem

function gradingSystem(){

    // initializing an element that takes value from the input
    marks = document.getElementById("marks").value;
    // use if and else condition to see whether the marks is within the requied marks
    if(marks<40){
        document.getElementById("results").innerHTML="E";
    }else if (marks>40 && marks<49){
        document.getElementById("results").innerHTML="D";
    }else if (marks>49 && marks<59){
        document.getElementById("results").innerHTML="C";
    }else if (marks>59 && marks<79){
        document.getElementById("results").innerHTML="B";
    }else if (marks>79 && marks<100){
        document.getElementById("results").innerHTML="A";
    }
}