import { Header } from "@components/Header";
import { ColorsTypes } from "@theme/index";
import * as S from "./styled";

export type TemplateProps = {
  color?: ColorsTypes;
  title: string;
  children: React.ReactNode;
};

export const Template = ({
  color = "GRAY_300",
  title,
  children,
}: TemplateProps) => {
  return (
    <S.Container color={color}>
      <Header title={title} />

      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
