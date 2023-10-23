
const { CronJob } = require('cron');
const { generatePromoCode } = require('../repo/promo.repo')

const cronTimePattern = process.env.CRON_GENERATE_PROMO;

const job = new CronJob(cronTimePattern, generatePromoCode);

module.exports = job;