const logger = require('./logger')
const jwt = require('jsonwebtoken')
const registeredUser = require('../models/registeredUser')
const administrator = require('../models/admin')

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

  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    console.log(decodedToken)
    if (!decodedToken || !decodedToken.id) {
      return response.status(401).json({ error: 'invalid token' });
    }

    const user = await registeredUser.findById(decodedToken.id);
    const admin = await administrator.findById(decodedToken.id);
    if (!user && !admin) {
      console.log('User or admin not found');
      return response.status(404).json({ error: 'user not found' });
    }

    if (user) request.user = user;
    if (admin) request.user = admin;

    next();
  } catch (error) {
    console.error('Error decoding token:', error);
    return response.status(401).json({ error: 'invalid token' });
  }
};

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}


module.exports =  {
    myLogger,unknownEndpoint,
    tokenExtractor,
    userExtractor
}