import { mealGetAll } from "./mealGetAll";

export const mealGetById = async (id: string) => {
  try {
    const meals = await mealGetAll();

    return meals.find((meal) => meal.id === id)!;
  } catch (error) {
    throw error;
  }
};
