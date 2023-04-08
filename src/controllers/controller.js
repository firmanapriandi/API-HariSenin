exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hallo Student Harisenin</h1>');
};

exports.helloFirman = (req, res, next) => {
    console.log('ini request :>> ', req.query);
    res.send({
        response: req.model 
    })
}