import axios from "axios";

const handler = async (req, res) => {
  try {
    const URL = `${process.env.APP_URL}wit?search=${req.query.question}`;
    const response = await axios({
      method: "POST",
      url: URL,
      credentials: "include",
      mode: "cors",
      headers: {
        Authorization: `Basic ${process.env.APP_AUTH}`,
      },
    });
    res.status(200).json({ data: response.data });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default handler;
