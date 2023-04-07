const database = require("../models");

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await database.Niveis.findAll()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmNivel(req, res) {
        const { id } = req.params;
        try {
          const umaNivel = await database.Nivels.findOne({
            where: { id: Number(id) },
          });
    
          return res.status(200).json(umaNivel);
        } catch (error) {
          return rest.status(500).json(error.message);
        }
      }
    
      static async criaNivel(req, res) {
        const novaNivel = req.body;
        try {
          const novaNivelCriada = await database.Nivels.create(novaNivel);
          return res.status(200).json(novaNivelCriada);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
    
      static async atualizaNivel(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
    
        try {
          await database.Nivels.update(novasInfos, {
            where: { id: Number(id) },
          });
          const NivelAtualizada = await database.Nivels.findOne({
            where: {
              id: Number(id),
            },
          });
          return res.status(200).json(NivelAtualizada);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
    
      static async apagaNivel(req, res) {
        const { id } = req.params;
        try {
          await database.Nivels.destroy({ where: { id: Number(id) } });
          return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
    
}

module.exports = NivelController;