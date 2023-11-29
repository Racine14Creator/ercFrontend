const getHero = async (req, res) => {
    await res.json("data Hero")
}

const getSingleHero = async (req, res) => {
    await res.json("Get Single Hero")
}

export default {
    getHero,
    getSingleHero
}