const { Promos, PromoTypes } = require('../models/index')
const promoType = require('./promo_type.repo')
const user = require('./users.repo')
const { generateRandomString } = require('../helper/general.helper')
const { SendEmaiSMTP } = require('../helper/smtp.helper')
// const { PushNotif } = require('../helper/push_notif.helper')

async function Find() {

    try {
        const promo = await Promos.findAll({
            include: PromoTypes
        })

        return promo

    } catch (error) {

        return error
    }

}

async function FindOne(code) {
    try {
        const promo = await Promos.findOne({
            where: {
                code
            },
            include: PromoTypes
        })

        return promo

    } catch (error) {

        return error
    }

}

async function Insert(payload) {
    try {
        const promo = await Promos.create(payload)

        return promo

    } catch (error) {

        return error
    }
}

async function bulkInsert(payload) {
    try {
        const promo = await Promos.bulkCreate(payload)

        return promo

    } catch (error) {

        return error
    }
}

async function generatePromoCode() {
    let dataInsert = []
    let listEmail = []
    const year = new Date().getFullYear()

    try {
        let dataUser = await user.Find()

        let dataPromotype = await promoType.Find(process.env.PROMO_TYPE_SEARCH)

        for (let index = 0; index < dataUser.length; index++) {
            const element = dataUser[index];
            let uniqueCode = generateRandomString()
            dataInsert.push({
                name: `BIRTHDAY CODE ${element.name} ${year}`,
                code: uniqueCode,
                discount: 30,
                user_id: element.id,
                promo_type_id: dataPromotype[0]
            })

            listEmail.push({
                code: uniqueCode,
                email: element.email,
            })
        }

        await bulkInsert(dataInsert)

        // after sending the data we will send email
        for (let index = 0; index < dataUser.length; index++) {
            const element = dataUser[index];

            await SendEmaiSMTP(element.email, dataInsert[index].code)

            // we havent implement push notif since for this case we use firebase and need the token and need to also record device token
            // in order to be able to use the feature
            // await PushNotif(deviceToken)
        }

    } catch (error) {
        return error
    }

}



module.exports = {
    Find,
    Insert,
    FindOne,
    generatePromoCode
}