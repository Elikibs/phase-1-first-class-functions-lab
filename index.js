// returnFirstTwoDrivers - Return the first two drivers in the array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers - Return the last two drivers in the array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers - Array containing returnFirstTwoDrivers and returnLastTwoDrivers functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier - Returns a function that multiplies a fare by a given integer
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // fareDoubler - Doubles the fare using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler - Triples the fare using createFareMultiplier
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers - Selects drivers based on a given function
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };
  