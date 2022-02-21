import React, { useState } from "react";
import Box from "@mui/material/Box";
import { ContForm, BtnClose } from "../styles/Footer";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import formService from "../services/formService.js";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const { SERVICE_ID, TEMPLATE_ID, USER_ID } = formService;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 650,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
};

export default function ContactForm({ open, setOpen }) {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    tel: "",
    asunto: "",
    mensaje: "",
  });

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        swal("Correo enviado correctamente", {
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        setFormData({
          nombre: "",
          correo: "",
          tel: "",
          asunto: "",
          mensaje: "",
        });
      },
      (error) => {
        alert("Ocurrio un error, intente nuevamente");
      }
    );
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <BtnClose onClick={() => setOpen(false)}> x </BtnClose>
        <Typography
          sx={{ fontFamily: "Nunito", fontWeight: "bold" }}
          id="modal-modal-title"
          component="h2"
          variant="h4"
        >
          Escríbenos
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ width: "100%", textAlign: "center", height: "50px" }}
        >
          Si tienes alguna duda o sugerencia llena el siguiente formulario y nos
          pondremos en contacto contigo.
        </Typography>
        <Box
          sx={{
            width: "90%",
            height: "60%",
            margin: "10px 0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ContForm onSubmit={enviarCorreo}>
            <input
              type="text"
              id="nombre"
              name="nombre"
              maxLength="20"
              placeholder="Nombre"
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
              value={formData.nombre}
            />
            <input
              type="email"
              id="correo"
              name="correo"
              maxLength="30"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, correo: e.target.value })
              }
              value={formData.correo}
            />
            <input
              type="tel"
              id="tel"
              name="tel"
              maxLength="13"
              placeholder="Teléfono"
              onChange={(e) =>
                setFormData({ ...formData, tel: e.target.value })
              }
              value={formData.tel}
            />
            <input
              type="text"
              id="asunto"
              name="asunto"
              maxLength="20"
              placeholder="Asunto"
              onChange={(e) =>
                setFormData({ ...formData, asunto: e.target.value })
              }
              value={formData.asunto}
            />
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Mensaje"
              onChange={(e) =>
                setFormData({ ...formData, mensaje: e.target.value })
              }
              value={formData.mensaje}
              required
            ></textarea>
            <button type="submit" className="btnContact">
              Enviar
            </button>
          </ContForm>
        </Box>
      </Box>
    </Modal>
  );
}
