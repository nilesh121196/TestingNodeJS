let express = require('express'),
	app = express(),
	PORT = process.env.PORT || 3000,
	// obj={
	// 	name : 'abcd',
	// 	second : 'second property'
	// }

	bodyParser = require('body-parser')




app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
	extended : false
}))





// app.get('/',(req, res) => {
// 	let id = req.query.q
// 	res.status(200)
// 	res.send(`${id}`)
// })

let logger = (req, res, next)=> {
	console.log((new Date).getTime(), req.status, req.url)
	next()
}

app.get('/', logger, (req, res) => {
	// res.send(200, "Hello")
	res.sendFile(path.resolve(__dirname+'/public/index.html'))
})

app.post('/', (req, res) =>{
	let data = req.body
	res.send('Username : ' +data.username+ '\nPassword : ' + data.pass)
})


// app.get('/search',(req, res) => {
// 	let term = req.query.term
// 	if(term){
// 		//res.json(obj)
// 		//res.send(`you search from ${term}`)
// 		res.send(JSON.stringify(obj))
// 	}
// 	else{
// 		res.redirect('/')
// 	}
// })

// app.post('/',(req, res)=>{
// 	let data = req.body
// 	res.send(`${data} was send with a post reqst`)
// })



app.listen(PORT, err => {
	if(err) return console.log(err)
	console.log(`server running at ${PORT}`)
})