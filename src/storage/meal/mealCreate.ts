import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealType } from "@screens/Home";
import { isAfter, isBefore } from "date-fns";
import { MEAL_COLLECTION } from "../storage.config";
import { mealGetAll } from "./mealGetAll";

export const mealCreate = async (newMeal: MealType) => {
  try {
    const storage = await mealGetAll();

    const updatedStorage = [...storage, newMeal];
    const sortedMeals = updatedStorage.sort((a, b) =>
      isAfter(a.date, b.date) ? 1 : isBefore(a.date, b.date) ? -1 : 0,
    );

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(sortedMeals));
  } catch (error) {
    throw error;
  }
};
