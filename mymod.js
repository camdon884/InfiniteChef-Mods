// === Infinite Chef Mod: Exotic Ingredient Pack ===
(function() {
  const ingredients = [
    {
      id: "wet_spaghetti",
      config: {
        color: "#c4a41b",
        innerColor: "#5b4c09",
        type: "pasta",
        shape: "helix_strand",
        keywords: "italy, italian, pasta, spaghetti, noodle",
      }
    },
    {
      id: "nebula_cheese",
      config: {
        color: "#6e00ff",
        innerColor: "#ffccff",
        type: "dairy",
        shape: "crystal_chunk",
        keywords: "cheese, space, galaxy, dairy, cosmic",
      }
    },
    {
      id: "inferno_pepper",
      config: {
        color: "#ff3300",
        innerColor: "#990000",
        type: "vegetable",
        shape: "twist_spike",
        keywords: "spicy, pepper, heat, fire, chili",
      }
    },
    {
      id: "frozen_wasabi_mist",
      config: {
        color: "#aaffcc",
        innerColor: "#66ff99",
        type: "condiment",
        shape: "vapor_cloud",
        keywords: "wasabi, cold, mist, spice, japan",
      }
    },
    {
      id: "brainfruit",
      config: {
        color: "#ff66cc",
        innerColor: "#cc3399",
        type: "fruit",
        shape: "lobed_sphere",
        keywords: "fruit, smart, alien, neural, exotic",
      }
    }
  ];

  // Register all ingredients
  ingredients.forEach(({ id, config }) => {
    addIngredient(id, config);
    console.log(`🧪 Ingredient added: ${id}`);
  });
})();
