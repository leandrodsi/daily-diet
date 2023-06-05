import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealType } from "@screens/Home";
import { parseISO } from "date-fns";
import { MEAL_COLLECTION } from "../storage.config";

export const mealGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealType[] = storage ? JSON.parse(storage) : [];

    return meals.map((meal) => ({
      ...meal,
      date: parseISO(meal.date as unknown as string),
      time: parseISO(meal.time as unknown as string),
    }));
  } catch (error) {
    throw error;
  }
};
