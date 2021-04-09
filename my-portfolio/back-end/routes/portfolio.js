// Routes for my portfolio 
const router = require('express').Router();

const Portfolio = require('../models/Portfolio')

// CREATE ROUTE
router.post('/', async (req, res) => {
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const saverdPortfolio = await portfolio.save()
        res.json({
            success: true,
            data: saverdPortfolio
        })
    } catch {
        console.log("Erro")
    }
})

// READ ROUTE
router.get('/', async (req, res) => {
    //Search data in DB
    try {
        const portfolios = await Portfolio.find()
        res.json({
            success: true,
            data: portfolios
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
});

router.get('/:slug', async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            data: portfolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
})

// UPDATE ROUTE 
router.patch('/:slug', async (req, res) => {
    try {
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        }, {
            title: req.body.title,
            description: req.body.description
        });

        res.json({
            success: true,
            data: updatedPortfolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
})


// "DELETE" ROUTE, NEVER DELETE A REGISTER, ONLY FLAG WITH DELETED
router.patch('/delete/:slug', async (req, res) => {
    try {
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        }, {
            isDeleted: true,
        });
        res.json({
            success: true,
            data: updatedPortfolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
})


module.exports = router