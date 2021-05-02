const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 0
}

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonStone: 4,
}

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);
