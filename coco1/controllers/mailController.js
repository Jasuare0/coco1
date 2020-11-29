let db = require('../database/models');
const nodemailer = require('nodemailer');

const mailController = {

    'enviandomail': async function(req,res){
        
        const {nombre,email,telefono,comentario} = req.body;

        contentHTML = `

            <h1>Información Cliente:</h1>

            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Email: ${email}</li>
                <li>Phone: ${telefono}</li>
                <li>Comentario: ${comentario}</li>
            </ul>
        `

        // console.log(contentHTML);

        const transporter = nodemailer.createTransport({
            host: 'mail.javiersuarezdominguez.com',
            port: 587,
            secure: false,
            auth: {
                user: 'edgconstructores@javiersuarezdominguez.com',
                pass: 'Jasuare0'
            },
            tls: {
                rejectUnauthorized: false
            }

        });

        const info = await transporter.sendMail({
            from: "'EDG Consultores' <edgconstructores@javiersuarezdominguez.com>",
            to: 'edgconstructores@javiersuarezdominguez.com',
            bcc:'edgconstructorespruebas@gmail.com',
            subject: 'Datos del Formulario',
            // text: 'Hello World',
            html: contentHTML

        });

        console.log('Mensaje Enviado', info.messageId);

        res.redirect('/contactenos/confirmacion')

    },

    'confirmacionEnvio': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        db.Inicio.findAll()
        .then(resultados => {
            db.RedesSociales.findAll()
            .then(redessociales => {
                res.render('graciasContactarnos',{usuarioLogueado,redessociales, resultados});
    
            })
    
        })


    }
    
}


module.exports = mailController;