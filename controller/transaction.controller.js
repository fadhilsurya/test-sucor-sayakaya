const { ResponseFormatter } = require('../helper/resp.helper')
const product = require('../repo/products.repo')
const promo = require('../repo/promo.repo')
const transaction = require('../repo/transaction.repo')

async function Insert(req, res) {
    const { productId, user_id, promoCode } = req.body

    let payload = {}

    try {
        let getProduct = await product.FindByPk(productId)
        if (getProduct == null || getProduct == undefined) {
            let resp = ResponseFormatter(null, 'product doesnt exist', 400, null)
            return res.json(resp)
        }

        payload.product_id = getProduct.id
        payload.user_id = user_id


        // we put validation to check before using the promo code
        // wether the user is eligible to use the promo code or not
        if (promoCode) {
            let checkPromo = await promo.FindOne(promoCode)
            if (checkPromo.PromoType.name == "BIRTHDAY PROMO" && checkPromo.user_id != user_id) {
                let resp = ResponseFormatter(null, 'user invalid promo', 400, null)
                return res.json(resp)
            }

            if (checkPromo == null || checkPromo == undefined) {
                let resp = ResponseFormatter(null, 'promo doesnt exist', 400, null)
                return res.json(resp)
            }

            payload.promo_id = checkPromo.id
            payload.gross_amount = getProduct.price
            payload.discount_amount = getProduct.price * (checkPromo.discount / 100)
            payload.total_amount = payload.gross_amount - payload.discount_amount
        } else {
            payload.gross_amount = getProduct.price
            payload.total_amount = payload.gross_amount
        }

        let insert = await transaction.Insert(payload)


        let resp = ResponseFormatter(insert, 'success', 200, null)
        return res.json(resp)

    } catch (error) {
        let resp = ResponseFormatter(error, 'internal server error', 500, null)
        return res.json(resp)
    }


}




module.exports = {
    Insert
}