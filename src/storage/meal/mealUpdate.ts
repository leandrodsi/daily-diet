import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealType } from "@screens/Home";
import { MEAL_COLLECTION } from "../storage.config";
import { mealGetAll } from "./mealGetAll";

export const mealUpdate = async (updatedMeal: MealType) => {
  try {
    const meals: MealType[] = await mealGetAll();

    const storage = meals.map((meal) =>
      meal.id !== updatedMeal.id ? meal : updatedMeal,
    );

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
  } catch (error) {
    throw error;
  }
};
