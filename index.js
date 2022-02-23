// Code your solution in this file!

//------------------------------------------------------------------------------------------------------------------------------------
// 1. distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.

function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }

//------------------------------------------------------------------------------------------------------------------------------------
  // 2. distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location. 
  //Use your distanceFromHqInBlocks function to help return the correct value here. Try something like this:

  function distanceFromHqInFeet(pickupLocation) {
      const numBlocks = distanceFromHqInBlocks(pickupLocation);
      return numBlocks * 264;
  }

 //------------------------------------------------------------------------------------------------------------------------------------
// 3. distanceTravelledInFeet: Calculates the number of feet a passenger travels given a starting block and 
//an ending block — it only calculates distance North and South (uptown/downtown). 
//It uses the knowledge that a block is 264 feet long.

function distanceTravelledInFeet(start, destination) {
    const numBlocks =  Math.abs(start - destination);
    return numBlocks * 264;
  }

//------------------------------------------------------------------------------------------------------------------------------------
  // 4. calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), 
  //return the fare for the customer. The first four hundred feet are free. 
  //For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). 
  //Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 
  //Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

  function calculatesFarePrice(start, destination) {
    const numBlocks =  Math.abs(start - destination);
    const numFeet = numBlocks * 264;
        if(numFeet <= 400){
            return 0;
        } else if(numFeet > 400 && numFeet <= 2000){
            return (numFeet - 400) * .02;
        }else if (numFeet > 2000 && numFeet < 2500){
            return 25;
        }else if (numFeet >= 2500){
            return 'cannot travel that far'
        }
    
  }