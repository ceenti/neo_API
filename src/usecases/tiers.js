const Tiers = require('../models/tiers')

function createTier(max_amount, min_amount, price, duration, title_tier){
   return Tiers.create({max_amount, min_amount, price, duration, title_tier})
}

function getAll(){
    const allTiers = Tiers.find()
    return allTiers
}

function getById(id){
    return Tiers.findById(id)
}

function updateById(id, max_amount, min_amount, price, duration, title_tier){
    return  Tiers.findByIdAndUpdate(id, {max_amount, min_amount, price, duration, title_tier})
}

module.exports = {
    createTier,
    getAll,
    getById,
    updateById
}