exports.getUser= (req, res, next) => {
    res.send({
        message:'ini respon api user',
        nama:'felanggan',
        asal:'bandung'
    });
};