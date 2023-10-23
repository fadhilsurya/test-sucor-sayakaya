const { ResponseFormatter } = require('../helper/resp.helper')
const { Find } = require('../repo/products.repo')
async function Get(req, res) {

    const { limit, page } = req.query
    const offset = (page - 1) * limit; // Calculate the offset
    try {
        const product = await Find(offset, limit)

        let resp = ResponseFormatter({
            data: product.rows,
            total: product.count
        }, 'success', 200, null)
        res.json(resp)

    } catch (err) {
        let resp = ResponseFormatter(null, 'internal server error', 500, err)
        res.json(resp)
    }
}




module.exports = {
    Get
}