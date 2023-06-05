import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { MealDetail } from "@screens/MealDetail";
import { MealRegistered } from "@screens/MealRegistered";
import { ModalDelete } from "@screens/ModalDelete";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="mealRegistered" component={MealRegistered} />
      <Screen name="mealDetail" component={MealDetail} />

      <Screen
        name="modalDelete"
        component={ModalDelete}
        options={{ presentation: "transparentModal" }}
      />
    </Navigator>
  );
};
