import { GestureResponderEvent, TextInputProps } from 'react-native';
import { Dispatch, SetStateAction } from 'react';

interface ButtonProps {
    borderRadius?: number;
    disabled?: boolean;
    height?: number;
    onPress?: (event: GestureResponderEvent) => void;
    text: string;
    width?: number;
}
declare function Button({ borderRadius, disabled, height, onPress, text, width, }: ButtonProps): JSX.Element;

interface GeneralTextInputProps extends TextInputProps {
    errorMessage?: string;
    isInValid?: boolean;
    isRequired?: boolean;
    isValid?: boolean;
    title?: string;
}
declare function GeneralTextInput({ errorMessage, isInValid, isRequired, isValid, title, ...props }: GeneralTextInputProps): JSX.Element;

interface SelectButtonProps {
    isRequired?: boolean;
    onSelect: Dispatch<SetStateAction<string>>;
    option1: string;
    option2: string;
    value: string;
}
declare function SelectButton({ isRequired, onSelect, option1, option2, value, }: SelectButtonProps): JSX.Element;

interface TextInputWithButtonProps extends TextInputProps {
    isRequired?: boolean;
    title?: string;
}
declare function TextInputWithButton({ isRequired, title, ...props }: TextInputWithButtonProps): JSX.Element;

export { Button, GeneralTextInput, SelectButton, TextInputWithButton };
