import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storage.config";
import { mealGetAll } from "./mealGetAll";

export const mealRemove = async (id: string) => {
  try {
    const meals = await mealGetAll();

    const storage = meals.filter((meal) => meal.id !== id);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
  } catch (error) {
    throw error;
  }
};
