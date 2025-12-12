const sessionIdMap = new Map();

const setSession = (key, value) => sessionIdMap.set(key, value);
const getSession = key => sessionIdMap.get(key);
const deleteSession = key => sessionIdMap.delete(key);

module.exports = {
  setSession,
  getSession,
  deleteSession
}
