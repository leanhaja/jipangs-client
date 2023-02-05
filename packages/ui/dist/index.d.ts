import { GestureResponderEvent } from 'react-native';

interface ButtonProps {
    text: string;
    onClick?: (event: GestureResponderEvent) => void;
}
declare function Button({ text, onClick }: ButtonProps): JSX.Element;

export { Button, ButtonProps };
