const listaDeCursos = require('../MODELS/cursos.json'); //importar os cursos 
const fs = require("fs"); //permite acoes com arquivos


//cria um controller onde dentro tera funcoes
const CursoController = {

    cadastrarCurso(req, res) {
        const { titulo, descricao, professor } = req.body; //pegar essas infos especificas pelo body da requisicao. Seria igual:
        //const titulo = req.body.titulo
        //const descricao = req.body.descricao
        //const professor = req.body.professor

        //checar se todas as infos foram registradas, senao retorna erro 400
        if(!titulo || !descricao || !professor){
            return res
                .status(400)
                .json({error: 'VOce precisa passar os atributos corretamente'})
        }

        listaDeCursos.push({
            titulo,
            descricao,
            professor,
        });

        //escrever o novo curso no arquivo curso.json, so q transformando esse objeto em json
        fs.writeFileSync("./MODELS/cursos.json", JSON.stringify.listaDeCursos)

        res //devolver o status 201 se estiver td certo
            .status(201)
            .json({message: "Cadastro efetuado com sucesso"})
    },

    deletarCurso(req, res) {

    },

    listarCursos(req, res) {

    }

};

module.exports = CursoController; 