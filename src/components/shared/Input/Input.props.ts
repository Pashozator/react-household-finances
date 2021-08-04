export interface InputProps {
	name: string;
	label: string;
	value: string | number;
	onChange: (name: string, value: string | number) => void;
	type?: 'text' | 'number';
	testId?: string;
	className?: string;
}
