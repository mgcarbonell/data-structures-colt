function takeShower() {
  return "Showering!"
}

function eatBreakfast() {
  let meal = cookFood()
  return `Eating ${meal}`
}

function cookFood() {
  let items = ["Otmeal", "Eggs", "Protein Shake"]
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower()
  eatBreakfast()
  console.log("Okay ready to go to work!")
}

wakeUp()