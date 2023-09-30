const express = require('express');
const router = express.Router();

const produtoModel = require('../model/ProdutoModel');

router.post('/cadastro', (req, res)=>{
    let{
        nome_produto,
        valor_produto,
        imagem_produto,
        descricao_produto,
    } = req.body

    produtoModel.create({
        nome_produto,
        valor_produto,
        imagem_produto,
        descricao_produto,
    })
    .then(() =>{
        return res.status(200).json({errorStatus:false,
        messageStatus: "Produto cadastrado com sucesso!",});
    })
    .catch((error) =>{
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error,
        });
    });

})

router.get("/ListaProduto",(req,res) =>{
    produtoModel.findAll()
    .then((tbl_produtos)=>{
        return res.status(200).json(tbl_produtos);
    })
    .catch((error)=>{
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error, });
        });
})

router.put("/AlterarProduto/:codigo_produto", (req, res) => {

    let { codigo_produto } = req.params;

    let {

        nome_produto,

        valor_produto,

        imagem_produto,

        descricao_produto,

    } = req.body;



    produtoModel

        .update(

            {

                nome_produto,

                valor_produto,

                imagem_produto,

                descricao_produto,

            },

            { where: { codigo_produto } }

        )

        .then(() => {

            return res.status(200).json({

                errorStatus: false,

                messageStatus: "Produto alterado com sucesso!",

            });

        })

        .catch((error) => {

            return res.status(500).json({

                errorStatus: true,

                messageStatus: error,

            });

        });

});
router.delete("/DeletarProduto/:codigo_produto", (req, res) => {

    let { codigo_produto } = req.params;



    produtoModel.findByPk(codigo_produto).then((tbl_produtos) => {

        tbl_produtos

            .destroy({

                where: { codigo_produto },

            })

            .then(() => {

                return res.status(200).json({

                    errorStatus: false,

                    messageStatus: "Produto excluído com sucesso!",

                });

            })

            .catch((error) => {

                return res.status(500).json({

                    errorStatus: true,

                    messageStatus: error,

                });

            });

    });

});

module.exports = router;