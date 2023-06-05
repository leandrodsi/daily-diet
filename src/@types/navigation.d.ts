import { MealType } from "@screens/Home";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newMeal: { meal?: MealType | undefined };
      mealRegistered: { isInDiet: boolean };
      mealDetail: { id: string };
      modalDelete: { id: string };
    }
  }
}
