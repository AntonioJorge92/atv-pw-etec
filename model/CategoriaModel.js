const sequelize = require("sequelize");

const connection = require("../database/database");

const categoriaModel = connection.define("tbl_categoria", {

    codigo_categoria: {

        type: sequelize.INTEGER.UNSIGNED,

        autoIncrement: true,

        primaryKey: true,

    },

    nome_categoria: {

        type: sequelize.STRING(255),

        allowNull: false,

    },

    observacoes_categoria: {

        type: sequelize.TEXT,

        allowNull: false,

    },

});


categoriaModel.sync({ force: false });

module.exports = categoriaModel;