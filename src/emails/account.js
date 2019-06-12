const sgMail = require('@sendgrid/mail')

const constants = require('../constants')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: constants.EMAIL_FROM,
    subject: constants.EMAIL_WELCOME_SUBJECT,
    text: constants.EMAIL_WELCOME_TEXT(name)
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: constants.EMAIL_FROM,
    subject: constants.EMAIL_CANCEL_SUBJECT,
    text: constants.EMAIL_CANCEL_TEXT(name)
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
