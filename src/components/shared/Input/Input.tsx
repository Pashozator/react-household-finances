import React, { useCallback } from 'react';
import { TextField } from '@material-ui/core';
import { InputProps } from './Input.props';

export const Input: React.FC<InputProps> = React.memo((props: InputProps) => {
	const { name, label, value, className, type = 'text', onChange, testId } = props;

	const handleChange = useCallback((event: { target: { value: string; }; }) => {
		let value: string | number | null = event.target.value;

		if (type === 'number') {
			value = parseFloat(value);
		}

		if (value === '') {
			value = null;
		}

		onChange(name, value)
	}, [name, type, onChange]);

	const getValue = useCallback(() => {
		return value == null ? '' : value.toString();
	}, [value]);

	return (
		<div className={className}>
			<TextField name={name}
					   inputProps={{ type, 'data-testid': testId }}
					   label={label}
					   value={getValue()}
					   onChange={handleChange}
			/>
		</div>
	);
});
