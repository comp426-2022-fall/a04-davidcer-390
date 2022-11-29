import { roll } from './lib/roll.js'
import express from 'express'
import minimist from 'minimist'

const port = minimist(process.argv.slice(2)).port || 5000

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.get('/app/', (req, res, next) => {
	res.send('200 OK')
})
app.get('/app/roll/', (req, res, next) => {
	const sides = req.query.sides || 6
	const dice = req.query.dice || 2
	const rolls = req.query.rolls || 1
	res.json(roll(sides, dice, rolls))
})
app.get('/app/roll/:sides/', (req, res, next) => {
	const sides = req.params.sides
	const dice = req.query.dice || 2
	const rolls = req.query.rolls || 1
	res.json(roll(sides, dice, rolls))
})
app.get('/app/roll/:sides/:dice', (req, res, next) => {
	const sides = req.params.sides
	const dice = req.parms.dice
	const rolls = req.query.rolls || 1
	res.json(roll(sides, dice, rolls))
})
app.get('/app/roll/:sides/:dice/:rolls', (req, res, next) => {
	const sides = req.params.sides
	const dice = req.params.dice
	const rolls = req.params.rolls
	res.json(roll(sides, dice, rolls))
})
app.get('*', (req, res, next) => {
	res.status(404).send('404 NOT FOUND')
})



app.post('/app/roll', (req, res, next) => {
	const sides = req.body.sides || 6
	const dice = req.body.dice || 2
	const rolls = req.body.rolls || 1
	res.json(roll(sides, dice, rolls))
})
app.post('*', (req, res, next) => {
	res.status(404).send('404 NOT FOUND')
})

app.listen(port, () => {
	console.log('Server listening on port ' + port);
})
