export function roll(sides, dice, rolles){
	const ans = {}
	ans.sides = sides
	ans.dice = dice
	ans.rolles = rolles
	ans.results = []

	for(let i = 0; i < rolles; i++){	
		let sum = 0
		for(let j = 0; j < dice; j++){
			sum += 1 + Math.floor(Math.random()*sides)
		}
		ans.results.push(sum)
	}
	return ans
}

