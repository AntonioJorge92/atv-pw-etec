const express = require("express");

const categoriaModel = require("../model/CategoriaModel");

const router = express.Router();


router.post("/CadastrarCategoria", (req, res) => {

    let { nome_categoria, observacoes_categoria } = req.body;



    categoriaModel

        .create({ nome_categoria, observacoes_categoria })

        .then(() => {

            return res.status(200).json({

                errorStatus: false,

                messageStatus: "Categoria cadastrada com sucesso!",

            });

        })

        .catch((error) => {

            return res.status(500).json({

                errorStatus: true,

                messageStatus: error,

            });

        });

});


router.get("/ListarCategoria", (req, res) => {

    categoriaModel

        .findAll()

        .then((tbl_categoria) => {

            return res.status(200).json(tbl_categoria);

        })

        .catch((error) => {

            return res.status(500).json({

                errorStatus: true,

                messageStatus: error,

            });

        });

});



router.put("/AlterarCategoria/:codigo_categoria", (req, res) => {

    let { codigo_categoria } = req.params;



    let { nome_categoria, observacoes_categoria } = req.body;



    categoriaModel

        .update(

            { nome_categoria, observacoes_categoria },

            { where: { codigo_categoria } }

        )

        .then(() => {

            return res.status(200).json({

                errorStatus: false,

                messageStatus: "Categoria alterada com sucesso!",

            });

        })

        .catch((error) => {

            return res.status(500).json({

                errorStatus: true,

                messageStatus: error,

            });

        });

});


router.delete("/DeletarCategoria/:codigo_categoria", (req, res) => {

    let { codigo_categoria } = req.params;



    categoriaModel

        .destroy({ where: { codigo_categoria } })

        .then(() => {

            return res.status(200).json({

                errorStatus: false,

                messageStatus: "Categoria excluída com sucesso!",

            });

        })

        .catch((error) => {

            return res.status(500).json({

                errorStatus: true,

                messageStatus: error,

            });

        });

});

module.exports = router;