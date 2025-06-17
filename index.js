function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())



}
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

const drivers =[
  { name: "Bobby", hometown: "Nairobi" },
  { name: "Sammy", hometown: "Mgadisho" },
  { name: "Sally", hometown: "Tehran" },
  { name: "Annette", hometown: "CapeTown" },
  { name: "Bobby", hometown:"Kampala" }
]

console.log(findMatching(["Bobby", "Sammy", "Sally"], "bobby"))
console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette"], "Sa"))
console.log(matchName(drivers, "Bobby"))