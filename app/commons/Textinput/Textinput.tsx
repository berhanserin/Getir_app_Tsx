import * as React from 'react';
import {
  TextInput,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ColorValue,
} from 'react-native';

const Textinput: React.FC<{
  passwordRole: boolean;
  value?: string;
  keyboardTypes?: KeyboardTypeOptions;
  placeHolders?: string;
  placeHoldersColor?: string;
  ChangeText?: (text: string) => void;
  Blur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  BorderColor?: ColorValue;
  BorderWidth?: number;
  BorderRadius?: number;
}> = ({
  passwordRole,
  value,
  keyboardTypes,
  placeHolders,
  ChangeText,
  Blur,
  placeHoldersColor,
  BorderColor,
  BorderWidth,
  BorderRadius,
}) => {
  return (
    <TextInput
      secureTextEntry={passwordRole}
      value={value}
      keyboardType={keyboardTypes}
      placeholder={placeHolders}
      placeholderTextColor={placeHoldersColor}
      onChangeText={ChangeText}
      onBlur={Blur}
      style={{
        borderColor: BorderColor,
        borderWidth: BorderWidth,
        borderRadius: BorderRadius,
      }}
    />
  );
};

export default Textinput;
