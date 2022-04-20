const express = require("express");
const CursoController = require("../CONTROLLERS/Cursos.controller"); //automatico


const routes = express.Router();

routes.post('/cursos', CursoController.cadastrarCurso);
routes.get('/listar', CursoController.listarCursos);
routes.delete('/deletar', CursoController.deletarCurso);

module.exports = routes;