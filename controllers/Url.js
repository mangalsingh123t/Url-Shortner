const shortid = require("shortid")
const URL = require("../models/Url")

async function generateNewShortUrl(req, res) {
    const shortId = shortid()
    console.log(req.body.redirectUrl)
    if (!req.body.redirectUrl) console.log("redirectUrl is required")
    const generatedShortUrl = await URL.create(
        {
            shortId: shortId,
            redirectUrl: req.body.redirectUrl,
            visitHistory: []
        }
    )
    return res.render('Home', {
        id: shortId
    })
}

async function redirectById(req, res) {
    const shortId = req.params.id
    // const entry = await URL.findOne({shortId})
    const entry = await URL.findOneAndUpdate(
        { shortId, },
        {
            $push: {
                visitHistory: { timetimestamp: Date.now() },
            }
        }
    )

    res.redirect(entry.redirectUrl)
}
async function getAnalyticsByShortId(req, res) {
    const shortId = req.params.id
    const result = await URL.findOne({ shortId })
    console.log(result)
    res.json({ totalCounts: result.visitHistory })
    // res.json({
    //     totalClickCount : result
    // })
}

async function getAllUrls(req, res) {
    const allUrls = await URL.find({})
    res.render('Home', {
        urls: allUrls
    })
}


module.exports = {
    generateNewShortUrl,
    redirectById,
    getAnalyticsByShortId,
    getAllUrls,
}
