const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()
routes.add('index', '/')
routes.add('fish', '/blog/:slug')
routes.add('NewIdea', '/NewIdea')
routes.add('Suggested', '/Suggested')
routes.add('Invest', '/Invest')
