const EMAIL_CANCEL_SUBJECT = 'Sorry to see you go!'
const EMAIL_CANCEL_TEXT = (name) => `Goodbye ${name}. I hope to see you back sometime soon.`
const EMAIL_FROM = 'admin@mywebsite.com'
const EMAIL_WELCOME_SUBJECT = 'Welcome!'
const EMAIL_WELCOME_TEXT = (name) => `Welcome to the app ${name}.`
const ERROR_AUTHENTICATE = 'Please authenticate.'
const ERROR_INVALID_AGE = 'Age must be a positive number.'
const ERROR_INVALID_EMAIL = 'Email is invalid.'
const ERROR_INVALID_IMAGE = 'Please upload a valid image.'
const ERROR_INVALID_PASSWORD = 'Password cannot contain the word password.'
const ERROR_INVALID_UPDATE = 'Invalid update.'
const ERROR_UNABLE_TO_LOGIN = 'Unable to login.'
const SERVER_UP = (port) => `Server is up on port ${port}`

module.exports = {
  EMAIL_CANCEL_SUBJECT,
  EMAIL_CANCEL_TEXT,
  EMAIL_FROM,
  EMAIL_WELCOME_SUBJECT,
  EMAIL_WELCOME_TEXT,
  ERROR_AUTHENTICATE,
  ERROR_INVALID_AGE,
  ERROR_INVALID_EMAIL,
  ERROR_INVALID_IMAGE,
  ERROR_INVALID_PASSWORD,
  ERROR_INVALID_UPDATE,
  ERROR_UNABLE_TO_LOGIN,
  SERVER_UP
}
