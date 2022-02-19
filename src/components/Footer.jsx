import React from 'react';
import { ContFooter, ContForm } from "../styles/Footer";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ApiKey from '../ApiKey.js';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
// import "../styles/Footer.js";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 650,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const enviarCorreo =(e) => {
  e.preventDefault()

  emailjs.sendForm(ApiKey.SERVICE_ID, ApiKey.TEMPLATE_ID, e.target, ApiKey.USER_ID).then(
      result => {
         
          swal("Correo enviado correctamente", {
              icon: "success",
              buttons: false,
              timer: 3000,
            });
            
          document.getElementById('nombre').value = ''
          document.getElementById('correo').value = ''
          document.getElementById('tel').value = ''
          document.getElementById('asunto').value = ''
          document.getElementById('mensaje').value = ''
      },
      error => {
          alert( 'Ocurrio un error, intente nuevamente')
          }
  )
}

export const Footer = () =>{

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ContFooter>
        <div className="elementFooter">
            <div className="element1">
                Desarrollo a cargo de Dream Team Manejantes &copy;2022
            </div>
            <div className="element2">
                Tienes alguna duda? 
                <Button
                  className='buttonFooter'
                  onClick={handleOpen}
                >
                  Contáctanos
                </Button>
                {/* <a href="mailto:manejantes@gmail.com" target="_blank" 
              rel="noopener noreferrer">Contáctanos</a> */}
            </div>

        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Escríbenos
            </Typography>
            <Typography id="modal-modal-description" sx={{ width: "100%", textAlign: "center", height: "50px"}}>
              Si tienes alguna duda o sugerencia llena el siguiente formulario y
              nos pondremos en contacto contigo.
            </Typography>
            <Box 
              sx={{
                width: '90%',
                height: '60%',
                margin: '10px 0',
                display: 'flex',
                flexDirection: 'column'
                }}
            >
              <ContForm onSubmit = {enviarCorreo}>
                <input type="text" id="nombre" name="nombre" maxLength="20" placeholder="Nombre" />
                <input type="email" id="correo" name="correo" maxLength="30" placeholder="Email" />
                <input type="tel" id="tel" name="tel" maxLength="13" placeholder="Teléfono" />
                <input type="text" id="asunto" name="asunto" maxLength="20" placeholder="Asunto" />
                <textarea id="mensaje" name="mensaje" placeholder="Mensaje"></textarea>
                <button type="submit" className="btnContact">Enviar</button>
              </ContForm>

            </Box>
          </Box>
        </Modal>
    </ContFooter>
  )
}
