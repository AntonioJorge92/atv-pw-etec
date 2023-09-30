const sequelize = require("sequelize");

const connection = require("../database/database");

const produtoModel = connection.define("tbl_produto", {

    codigo_produto: {

        type: sequelize.INTEGER.UNSIGNED,

        autoIncrement: true,

        primaryKey: true,

    },

    nome_produto: {

        type: sequelize.STRING(255),

        allowNull: false,

    },

    valor_produto: {

        type: sequelize.DECIMAL(10, 2),

        allowNull: false,

    },

    imagem_produto: {

        type: sequelize.STRING(500),

        allowNull: false,

    },

    descricao_produto: {

        type: sequelize.TEXT,

        allowNull: false,

    },

});


produtoModel.sync({force: false});

module.exports = produtoModel;