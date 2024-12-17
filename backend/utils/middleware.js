const logger = require('./logger')
const jwt = require('jsonwebtoken')
const registeredUser = require('../models/registeredUser')

const myLogger = function(req,res,next){
    logger.info('Method:', req.method)
    logger.info('Path:  ', req.path)
    logger.info('Body:  ', req.body)
    logger.info('---')
    next();
}
const tokenExtractor = (request,response,next) => {
    const authorization = request.get('authorization')
    if(authorization && authorization.startsWith('Bearer ')){
      request.token = authorization.replace('Bearer','').trim()
    }else request.token = null
    next()
}

const userExtractor = async (request, response, next) => {

    if (!request.token) {
      return response.status(401).json({ error: 'token missing or invalid' });
    }
  
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    if (!decodedToken || !decodedToken.id) {
      return response.status(401).json({ error: 'invalid token' });
    }
  
    const user = await registeredUser.findById(decodedToken.id);
    if (!user) {
      return response.status(404).json({ error: 'user not found' });
    }
  
    request.user = user;
    next();
};

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}


module.exports =  {
    myLogger,unknownEndpoint,
    tokenExtractor,
    userExtractor
}