const { Products } = require('../models/index')

async function Find(offset, limit) {

    try {
        const product = await Products.findAndCountAll({
            offset,
            limit,
        })

        return product, null

    } catch (error) {

        return null, error
    }

}

async function FindByCode(code) {
    try {
        const promo = await Products.findOne({
            where: {
                code
            },
        })

        return promo

    } catch (error) {

        return error
    }
}

async function FindByPk(id) {
    try {
        const promo = await Products.FindOneByPk(id)

        return promo

    } catch (error) {

        return error
    }

}



module.exports = {
    Find,
    FindByCode,
    FindByPk
}