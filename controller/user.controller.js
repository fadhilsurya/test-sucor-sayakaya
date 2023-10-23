const { ResponseFormatter } = require('../helper/resp.helper')
const { Find } = require('../repo/users.repo')

async function Get(req, res) {
    const { email, dob, verifiedStatus } = req.query

    try {
        const respUser = await Find(email, verifiedStatus, dob)

        let resp = ResponseFormatter(respUser, 'success', 200, null)
        return res.json(resp)

    } catch (error) {
        let resp = ResponseFormatter(error, 'success', 500, null)
        return res.json(resp)
    }
}







module.exports = {
    Get
}