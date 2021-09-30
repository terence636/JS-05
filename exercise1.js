const names = ["Maria","Anthony","Joy","Juan"];

//PART1
const insertName = (name) => {
  names.push(name)
}
insertName("Me")
console.log(names)

//PART2
const hasName = (name) => {
  
  const newList = names.map(name => name.toLowerCase())

  return newList.includes(name.toLowerCase());
}

console.log(hasName("Maria"))
console.log(hasName("TR"))
console.log(hasName("maria"))

//PART3

const combine = (list) => {
  const newList = [...names]
  
  list.forEach(name=>{
    if(!hasName(name))
      newList.push(name)
  })
  console.log({ newList });
  return newList;
}

const newNames = ["maria", "Terence","Gracia","juan","Ger","Me","Anthony","Shirley"];
combine(newNames)

//PART4
const nameLength = (list) => list.map(name => name.length)

console.log(nameLength(names))
console.log(nameLength(newNames));