const Tiers = require('../models/tiers')

function createTier(amount, price, duration, title_tier){
   return Tiers.create(amount, price, duration, title_tier)
}

function getAll(){
    const allTiers = Tiers.find()
    return allTiers
}

function getById(id){
    const tier = Tiers.findById(id)
    return tier
}

function updateById(id, amount, price, duration, title_tier){
    return  Tiers.findByIdAndUpdate(id, {amount, price, duration, title_tier})
}

module.exports = {
    createTier,
    getAll,
    getById,
    updateById
}