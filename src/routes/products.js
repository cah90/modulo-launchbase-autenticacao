const express = require('express')
const routes = express.Router()

const multer = require('../app/middlewares/multer')
const ProductController = require('../app/controllers/ProductController')
const SearchController = require('../app/controllers/SearchController')
 

// SEARCH
routes.get('/products/search', SearchController.index)

// PRODUCTS
routes.get('/products/create', ProductController.create)
routes.post('/products', multer.array('photos', 6), ProductController.post)

routes.get('/products/:id', ProductController.show)

routes.get('/products/:id/edit', ProductController.edit)
routes.put('/products', multer.array('photos', 6), ProductController.put)

routes.delete('/products', ProductController.delete)

module.exports = routes
