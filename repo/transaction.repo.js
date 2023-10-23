const { Transactions } = require('../models/index')

async function Insert(body) {


    try {
        const transaction = await Transactions.Create(body)

        return transaction, null

    } catch (error) {

        return error
    }

}


module.exports = {
    Insert
}