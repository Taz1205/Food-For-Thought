import React, { useEffect, useState } from 'react';
import Select from '../form_inputs/Select';
import { fetch } from 'cross-fetch';

interface DietInputProps {
	inputChanged: (value: string) => void;
}

const DietInput: React.FC<DietInputProps> = ({ inputChanged }) => {
	const [dietOptions, setdietOptions] = useState([]);
	const [diet, setDiet] = useState('');

	const handleDietSelect = (diet: string) => {
		setDiet(diet);
		diet === 'none' || diet === '' ? inputChanged('') : inputChanged(diet);
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://localhost:3000/api/diets');
			const data = await response.json();
			setdietOptions(data);
		};

		fetchData();
	}, []);

	return <Select name='diet' value={diet} label='Dietary Restrictions' onInput={handleDietSelect} options={dietOptions} />;
};

export default DietInput;
