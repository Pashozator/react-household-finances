import React, { useCallback } from 'react';
import { TextField } from '@material-ui/core';
import { InputProps } from './Input.props';

export const Input: React.FC<InputProps> = React.memo((props: InputProps) => {
	const { name, label, value, className, type = 'text', onChange, testId } = props;

	const handleChange = useCallback((event: { target: { value: string; }; }) => onChange(name, event.target.value), [name, onChange]);

	return (
		<div className={className}>
			<TextField name={name}
					   inputProps={{ type, 'data-testid': testId }}
					   label={label}
					   value={value}
					   onChange={handleChange}
			/>
		</div>
	);
});
