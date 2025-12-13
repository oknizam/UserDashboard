const AUTHENTICATION_TYPE = "jwt"; // pass jwt for stateless , pass session for statefull 

const isStateLessValidation = () => AUTHENTICATION_TYPE === "jwt";


module.exports = {
  isStateLessValidation
}