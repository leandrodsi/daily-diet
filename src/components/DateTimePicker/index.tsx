import { format } from "date-fns";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as S from "./styled";

type DateTime = {
  value: Date;
  onChange: (date: Date) => void;
  mode?: "date" | "time";
};

export const DateTimePicker = ({
  value,
  onChange,
  mode = "date",
  ...props
}: DateTime) => {
  const [isVisible, setIsVisible] = useState(false);

  const showDatePicker = () => {
    setIsVisible(true);
  };

  const hideDatePicker = () => {
    setIsVisible(false);
  };

  const handleConfirm = (date: Date) => {
    onChange(date);
    hideDatePicker();
  };

  return (
    <S.Container onPress={showDatePicker}>
      <DateTimePickerModal
        isVisible={isVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <S.DateTime>
        {format(value, mode === "time" ? "HH:mm" : "dd/MM/yyyy")}
      </S.DateTime>
    </S.Container>
  );
};
