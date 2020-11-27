function fouriest(number)
{
	let base_with_most_fours = 0;
	let highest_amount_of_fours = 0;
	for(let base=2;base<(number>4?number:6);base++)
	{
		const max = Math.floor(Math.log(number, base));
		let value = number;
		let fours = 0;
		for(let power=max;power>=0;power--)
		{
			const base2power = base**power;
			const times = Math.floor(value/base2power);
			if(times == 4)
				fours++;
			value -= base2power*times;
		}
		console.assert(value == 0);
		if(fours>highest_amount_of_fours)
		{
			base_with_most_fours = base;
			highest_amount_of_fours = fours;
		}
	}
	return base_with_most_fours;
}
console.assert(fouriest(10) === 6);
console.assert(fouriest(624) === 5);
