export interface InputProps {
	name: string;
	label: string;
	value: string | number | null;
	onChange: (name: string, value: string | number | null) => void;
	type?: 'text' | 'number';
	testId?: string;
	className?: string;
}
