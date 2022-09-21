

// @desc get Login
// @route GET /login
// @access Private
const getLogin = async (req, res) => {
    res.status(200).json({express: 'Get Login'})
}

module.exports = {
    getLogin,
}