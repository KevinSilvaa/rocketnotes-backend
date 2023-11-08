const { Router } = require('express');

const usersRouter = require('./users.routes');
const notesRouter = require('./notes.routes');
const tagsRouter = require('./tags.routes');
const sessionRouter = require('./sessions.routes');

const routes = Router();

// *O Routes contém todos os grupos de rotas da aplicação
routes.use('/users', usersRouter);
routes.use('/notes', notesRouter);
routes.use('/tags', tagsRouter);
routes.use('/sessions', sessionRouter);

module.exports = routes;