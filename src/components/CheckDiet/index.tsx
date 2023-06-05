import { useTheme } from "styled-components";
import * as S from "./styled";

export type CheckDietSelectTypes = S.ButtonSelectStyleType | "";

type CheckDietProps = {
  selected: CheckDietSelectTypes;
  onChange: (selected: S.ButtonSelectStyleType) => void;
};

export const CheckDiet = ({ selected, onChange }: CheckDietProps) => {
  const { COLORS } = useTheme();

  const handleCheck = (button: S.ButtonSelectStyleType) => {
    onChange(selected === button ? ("" as S.ButtonSelectStyleType) : button);
  };

  return (
    <S.Container>
      <S.ButtonSelect
        type="inDiet"
        onPress={() => handleCheck("inDiet")}
        selected={selected === "inDiet"}
      >
        <S.Icon size={8} color={COLORS.SECONDARY} />
        <S.Label>Sim</S.Label>
      </S.ButtonSelect>
      <S.ButtonSelect
        type="outDiet"
        onPress={() => handleCheck("outDiet")}
        selected={selected === "outDiet"}
      >
        <S.Icon size={8} color={COLORS.PRIMARY} />
        <S.Label>Não</S.Label>
      </S.ButtonSelect>
    </S.Container>
  );
};
