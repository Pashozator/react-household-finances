export interface DatePickerProps {
	name: string;
	label: string;
	value: Date | null;
	maxDate?: Date;
	onChange: (name: string, value: Date | null) => void;
	testId?: string;
	className?: string;
}
