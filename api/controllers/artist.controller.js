const Artist = require ('../models/artist.model')

async function getAllArtists (req, res) {
    try {
            const artists = await Artist.findAll()
    res.status(200).json(artists)
    } catch (error) {
        res.status(403).send(error.message)
    }
}

module.exports = { getAllArtists }