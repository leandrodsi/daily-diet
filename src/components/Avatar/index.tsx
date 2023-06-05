import * as S from "./styled";

type AvatarProps = {
  image: string;
};

export const Avatar = ({ image }: AvatarProps) => {
  return (
    <S.Container>
      <S.Photo source={{ uri: image }} />
    </S.Container>
  );
};
