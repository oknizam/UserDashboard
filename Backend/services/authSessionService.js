const { v4 } = require("uuid");

const sessionIdMap = new Map();

const setSession = (key, value) => sessionIdMap.set(key, value);
const getSession = key => sessionIdMap.get(key);
const deleteSession = key => sessionIdMap.delete(key);

const createSessionId = (response) => {
  const sessionId = v4();
  setSession(sessionId, response);
  return sessionId;
}

module.exports = {
  createSessionId,
  setSession,
  getSession,
  deleteSession
}
