export function fouriest(number)
{
	let base_with_most_fours = 0;
	let highest_amount_of_fours = 0;
	for(let base=2;base<(number>4?number:6);base++)
	{
		const max = Math.floor(Math.log(number)/Math.log(base));
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
function convertToDigit(number)
{
	if(number<10)
		return number;
	else
		return `{${number}}`
}
export function presentAsBase(value, base)
{
	let result = "";
	const max = Math.floor(Math.log(value)/Math.log(base));
	for(let power=max;power>=0;power--)
	{
		const base2power = base**power;
		const times = Math.floor(value/base2power);
		value-=base2power*times;
		if(times || result!=="")
		{
			result+=convertToDigit(times);
		}
	}
	return result;
}
console.assert(presentAsBase(16,2)==="10000");
console.assert(presentAsBase(16,10)==="16");
console.assert(presentAsBase(16,16)==="10");
console.assert(presentAsBase(5,2)==="101");
console.assert(fouriest(10) === 6);
console.assert(fouriest(624) === 5);
