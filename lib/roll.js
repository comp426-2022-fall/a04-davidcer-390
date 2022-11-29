export function roll(sides, dice, rolls){
	const ans = {}
	ans.sides = sides
	ans.dice = dice
	ans.rolls = rolls
	ans.results = []

	for(let i = 0; i < rolls; i++){	
		let sum = 0
		for(let j = 0; j < dice; j++){
			sum += 1 + Math.floor(Math.random()*sides)
		}
		ans.results.push(sum)
	}
	return ans
}

