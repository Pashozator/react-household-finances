import React, { useCallback } from 'react';
import { DatePicker as MaterialDatePicker } from '@material-ui/pickers'
import { DatePickerProps } from './DatePicker.props';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export const DatePicker: React.FC<DatePickerProps> = React.memo((props: DatePickerProps) => {
	const { name, label, value, maxDate, className, onChange, testId } = props;

	const handleChange = useCallback((date: MaterialUiPickersDate) => onChange(name, date), [name, onChange]);

	return (
		<div className={className}>
			<MaterialDatePicker
				name={name}
				format="dd.MM.yyyy"
				disableToolbar
				inputProps={{ 'data-testid': testId }}
				label={label}
				maxDate={maxDate}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
});
