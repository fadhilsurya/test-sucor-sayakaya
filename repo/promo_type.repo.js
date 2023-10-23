const { PromoTypes } = require('../models/index')

async function Find(name) {

    let whereQuery = {}

    if (name) {
        whereQuery.name = name
    }

    try {
        const promoType = await PromoTypes.findAll({
            where: whereQuery
        })

        return promoType

    } catch (error) {

        return null
    }

}


module.exports = {
    Find
}