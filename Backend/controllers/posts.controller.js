const getPosts = async (req, res) => {
  try {
    let response = await fetch("https://json-placeholder.mock.beeceptor.com/posts")
    response = await response.json();
    return res.status(200).json(response)
  }
  catch (err) {
    return res.status(400).json(err)
  }
}

module.exports = {
  getPosts
}