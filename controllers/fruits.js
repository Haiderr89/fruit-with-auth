const Fruit = require('../models/fruit')

const newFruits = (req, res) => {
    res.render('fruits/new.ejs', {
        title: 'Add a fruit'
    })
}

const addFruits = async (req, res) => {
	if (req.body.isReadyToEat === 'on') {
		req.body.isReadyToEat = true
	} else req.body.isReadyToEat = false

	await Fruit.create(req.body)
	res.redirect('/fruits')
}

const index = async (req, res) => {
	const fruits = await Fruit.find({})
	res.render('fruits/index.ejs', { fruits, title: 'Fruits' })
}


module.exports = {
    newFruits,
    addFruits, 
    index
}