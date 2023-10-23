const { Users } = require('../models/index')

async function Find(email, verifiedStatus, dob) {
    let whereSearch = {}
    console.log(verifiedStatus)

    if (email != undefined) {
        whereSearch.email = email
    }

    if (dob != undefined) {
        whereSearch.dob = dob
    }

    if (verifiedStatus != undefined) {
        whereSearch.verified_status = verifiedStatus
    }

    try {
        const user = await Users.findAll({
            where: whereSearch
        })

        return user

    } catch (error) {

        return error
    }

}



module.exports = {
    Find
}