// Write your code in this file!
function scuberGreetingForFeet(ride) {
 switch (ride) {
    case (ride <= 400):
      return "This one is on me!";
    case (ride > 2000):
      return "I will gladly take your thirty bucks.";
    case (ride > 2500):
      return "No can do.";
    default:
      return "Fine"
  }
}



function ternaryCheckCity(city) {
  switch (city) {
    case "NYC":
      return "Ok, sounds good.";
    default:
      return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
        return "Thank you so much.";
    case "not as generous":
        return "Thank you.";
    default:
        return "Bye.";
}
}
