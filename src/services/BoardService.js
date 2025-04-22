const models = require("../models");


module.exports = {
    createBoard: async (name) => {
        const board = await models.Board.create(name );
        return board;
    },
    getAllBoards: async () => {
        const boards = await models.Board.findAll();
        return boards;
    },
    getBoardById: async (id) => {
        const board = await models.Board.findById(id);
        return board;
    }
};