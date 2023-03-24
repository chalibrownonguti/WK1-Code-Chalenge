//Initialize a function called speedDetector() to hold everything
function speedDetector(){
  //initialize a variable that takes value from the form input
  const speed = document.getElementById("speed").value;

  // initialize a variable that speed
  const average = 70;

  //declare a variable that holds the number of km/s that results to 1 demerit point
  const increase = 5;
  
  // use if condition to see whether the speed is within the average
  if (speed <=average){
          document.getElementById("result").innerHTML= "This speed is okay!";
  }else if(speed > average){
    // initialize a variable to hold the demerit points, where points are calculated by 
    // finding the difference between the given speed and the average
    // use math.floor to round down to the nearest whole number
    // if the points are less than 12, it will return  points 
    // if the points are more than 12, it will return license is suspended.
      let demeritPoints = Math.floor((speed-average) / increase );
          if(demeritPoints >= 12){
          document.getElementById("result").innerHTML= `Your points are ${demeritPoints},your license is suspended`;
          }else{
          document.getElementById("result").innerHTML= `points are ${demeritPoints}`;
          }
  }
  
}

    
