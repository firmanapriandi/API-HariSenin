exports.myMiddleware = (req, res, next) => {
    req.model = 'ulala'
    // res.send('<h1> Halo Firman</h1>')
    next()
}