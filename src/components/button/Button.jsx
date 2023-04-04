import { BaseButton, InvertedButton } from './button.styles';

export const ButtonTypeClasses = {
	base: 'base',
	inverted: 'inverted'
};

const getButton = (buttonType = ButtonTypeClasses.base) => {
	return {
		[ButtonTypeClasses.base]: BaseButton,
		[ButtonTypeClasses.inverted]: InvertedButton
	}[buttonType];
};

export const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
};
