export type Fruit = {
  name: string;
  id: number;
  family: string;
  genus: string;
  order: string;
  nutritions: {
    calories: number;
    fat: number;
    carbohydrates: number;
    protein: number;
    sugar: number;
  };
};

export async function loadFruit(name: string): Promise<Fruit | undefined> {
  const fruits: Fruit[] = [
    {
      name: "strawberry",
      id: 1,
      family: "Rosaceae",
      order: "Rosales",
      genus: "Fragaria",
      nutritions: {
        calories: 29,
        fat: 0.4,
        sugar: 5.4,
        carbohydrates: 5.5,
        protein: 0.8,
      },
    },
    {
      name: "banana",
      id: 2,
      family: "Musaceae",
      order: "Zingiberales",
      genus: "Musa",
      nutritions: {
        calories: 96,
        fat: 0.2,
        sugar: 17.2,
        carbohydrates: 22,
        protein: 1,
      },
    },
    {
      name: "tomato",
      id: 3,
      family: "Solanaceae",
      order: "Solanales",
      genus: "Solanum",
      nutritions: {
        calories: 74,
        fat: 0.2,
        sugar: 2.6,
        carbohydrates: 3.9,
        protein: 0.9,
      },
    },
    {
      name: "pear",
      id: 4,
      family: "Rosaceae",
      order: "Rosales",
      genus: "Pyrus",
      nutritions: {
        calories: 57,
        fat: 0.1,
        sugar: 10,
        carbohydrates: 15,
        protein: 0.4,
      },
    },
  ];

  return fruits.find((fruit: Fruit) => fruit.name === name);
}

export async function Fruits(name: string): Promise<Fruit | undefined> {
  const fruit = await loadFruit(name);
  if (!fruit) {
    return;
  }

  return fruit;
}
