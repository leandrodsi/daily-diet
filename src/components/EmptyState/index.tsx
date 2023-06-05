import * as S from "./styled";

type EmptyStateProps = {
  message: string;
};

export const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
};
