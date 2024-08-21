const sgMail = require('./sendgridConfig');

// Función para enviar notificación de confirmación de registro
const sendRegistrationConfirmation = async (userEmail, userName) => {
  const msg = {
    to: userEmail,
    from: 'teachercirope@gmail.com', 
    subject: 'Bienvenido a ShopSport',
    text: `Hola ${userName}, gracias por registrarte en ShopSport. ¡Estamos felices de tenerte con nosotros!`,
    html: `<p>Hola ${userName},</p><p>Gracias por registrarte en ShopSport. ¡Estamos felices de tenerte con nosotros!</p>`,
  };

  try {
    await sgMail.send(msg);
    console.log('Correo de confirmación enviado.');
  } catch (error) {
    console.error('Error al enviar el correo de confirmación:', error);
  }
};

// Función para enviar notificación de nueva orden
const sendOrderConfirmation = async (userEmail, orderDetails) => {
  const msg = {
    to: userEmail,
    from: 'teachercirope@gmail.com',
    subject: 'Confirmación de tu Orden',
    text: `Hola, tu orden con el ID ${orderDetails.id} ha sido confirmada. Detalles: ${orderDetails.details}`,
    html: `<p>Hola,</p><p>Tu orden con el ID ${orderDetails.id} ha sido confirmada.</p><p>Detalles:</p><p>${orderDetails.details}</p>`,
  };

  try {
    await sgMail.send(msg);
    console.log('Correo de confirmación de orden enviado.');
  } catch (error) {
    console.error('Error al enviar el correo de confirmación de orden:', error);
  }
};

// Función para enviar notificación de actualización de carrito
const sendCartUpdateNotification = async (userEmail, cartDetails) => {
  const msg = {
    to: userEmail,
    from: 'teachercirope@gmail.com',
    subject: 'Actualización de tu Carrito',
    text: `Hola, tu carrito ha sido actualizado. Detalles: ${cartDetails}`,
    html: `<p>Hola,</p><p>Tu carrito ha sido actualizado.</p><p>Detalles:</p><p>${cartDetails}</p>`,
  };

  try {
    await sgMail.send(msg);
    console.log('Correo de actualización de carrito enviado.');
  } catch (error) {
    console.error('Error al enviar el correo de actualización de carrito:', error);
  }
};

// Función para enviar notificación de recuperación de contraseña
const sendPasswordResetNotification = async (userEmail, resetToken) => {
  const resetLink = `https://your-ecommerce-site.com/reset-password?token=${resetToken}`;
  
  const msg = {
    to: userEmail,
    from: 'teachercirope@gmail.com',
    subject: 'Recuperación de Contraseña',
    text: `Hola, hemos recibido una solicitud para restablecer tu contraseña. Usa el siguiente enlace para crear una nueva contraseña: ${resetLink}`,
    html: `<p>Hola,</p><p>Hemos recibido una solicitud para restablecer tu contraseña.</p><p>Usa el siguiente enlace para crear una nueva contraseña:</p><a href="${resetLink}">Restablecer Contraseña</a>`,
  };

  try {
    await sgMail.send(msg);
    console.log('Correo de recuperación de contraseña enviado.');
  } catch (error) {
    console.error('Error al enviar el correo de recuperación de contraseña:', error);
  }
};

// Exportar todas las funciones
module.exports = {
  sendRegistrationConfirmation,
  sendOrderConfirmation,
  sendCartUpdateNotification,
  sendPasswordResetNotification
};