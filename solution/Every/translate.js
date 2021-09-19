const change = require('translate-google');

const Change = require('../Every1/translate');
const sequelize = require('../connection');
const translate = require('translate-google');
const { response } = require('express');

exports.getTranslatedResponse =  (req,res) => {
    const { from , to , text } = req.body;

    translate('Hii Everyone ', { from: 'en', to: 'zh-cn'}).then(res =>{
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

    sequelize.query('CALL getTranslatedResponse(:changeLangfrom, :changeLangto, :changetextContent)',
        { replacement: { changeLangfrom: from , changeLangto: to, changetextContent: text} })
        .then(data => {
            console.log(data);
            if(data && data.length > 0){
                res.status(200).json({ message : "Translated Successfully", changeText: data[0].changeText })
            }else{
                change(text,{ from: from, to: to}).then(response => {
                    sequelize.query('CALL getTranslatedResponse(:changeLangfrom, :changeLangto, :changetextContent, :changeText)',
                    { replacement: { changeLangfrom: from , changeLangto: to, changetextContent: text, changeText: response} })
                    .then(data =>
                        res.status(200).json({ message : "Translated Successfully", changeText: response }) )
                }).catch(err => {
                    console.log(err)
                })
            }
        })
        .catch(err => {
            res.status(500).json({ message : err.message || "Some error ----"});
        });
}