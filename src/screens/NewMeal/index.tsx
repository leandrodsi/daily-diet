import { Button } from "@components/Button";
import { CheckDiet, CheckDietSelectTypes } from "@components/CheckDiet";
import { ButtonSelectStyleType } from "@components/CheckDiet/styled";
import { DateTimePicker } from "@components/DateTimePicker";
import { Input } from "@components/Input";
import { Template } from "@components/Template";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealType } from "@screens/Home";
import { mealCreate } from "@storage/meal/mealCreate";
import { mealUpdate } from "@storage/meal/mealUpdate";
import { setHours, setMinutes } from "date-fns";
import { useState } from "react";
import { Alert } from "react-native";
import * as S from "./styled";

type NewMealParamsProps = {
  meal?: MealType | undefined;
};

export const NewMeal = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { meal } = route.params as NewMealParamsProps;
  const isEditing = !!meal;

  const [name, setName] = useState(isEditing ? meal.name : "");
  const [description, setDescription] = useState(
    isEditing ? meal.description : "",
  );
  const [date, setDate] = useState(isEditing ? meal.date : new Date());
  const [time, setTime] = useState(isEditing ? meal.date : new Date());
  const [selected, setSelected] = useState(
    isEditing ? (meal.isOnTheDiet ? "inDiet" : "outDiet") : "",
  );

  const handleChangeDate = (date: Date) => {
    setDate(date);
  };

  const handleChangeTime = (date: Date) => {
    setTime(date);
  };

  const handleChangeIsInDiet = (selected: ButtonSelectStyleType) => {
    setSelected(selected);
  };

  const handleSave = async () => {
    try {
      if (!name || !description) {
        return Alert.alert(
          "Dados obrigatórios",
          "Preencha todos os dados para cadastrar a sua refeição",
        );
      }

      const newMeal: MealType = {
        id: isEditing ? meal.id : new Date().getTime().toString(),
        name,
        description,
        date: setMinutes(setHours(date, time.getHours()), time.getMinutes()),
        isOnTheDiet: selected === "inDiet",
      };

      isEditing ? await mealUpdate(newMeal) : await mealCreate(newMeal);

      isEditing
        ? navigation.goBack()
        : navigation.navigate("mealRegistered", {
            isInDiet: selected === "inDiet",
          });
    } catch (error) {
      Alert.alert(
        "Ooops",
        `Não foi possível salvar a sua refeição. Tente novamente mais tarde.`,
      );
    }
  };

  return (
    <Template title={isEditing ? "Editar refeição" : "Nova refeição"}>
      <S.FormContent>
        <Input
          label="Nome"
          value={name}
          onChangeText={setName}
          autoCorrect={false}
        />
        <Input
          label="Descrição"
          value={description}
          onChangeText={setDescription}
          numberOfLines={4}
          autoCorrect={false}
          multiline
        />
        <S.InputWrapper>
          <DateTimePicker value={date} onChange={handleChangeDate} />
          <DateTimePicker
            value={time}
            onChange={handleChangeTime}
            mode="time"
          />
        </S.InputWrapper>

        <S.Label>Está dentro da dieta?</S.Label>
        <CheckDiet
          selected={selected as CheckDietSelectTypes}
          onChange={handleChangeIsInDiet}
        />
      </S.FormContent>

      <Button
        label={isEditing ? "Salvar alterações" : "Cadastrar refeição"}
        onPress={handleSave}
      />
    </Template>
  );
};
