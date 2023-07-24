const express = require("express");
const cors = require("cors");
const axios= require('axios');
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// app.post("/authenticate", async (req, res) => {
//   const { username } = req.body;
//   try {
//     const r = await axios.put(
//       "https://api.chatengine.io/users/",
//       { username: username, secret: username, first_name: username },
//       { headers: { "Private-Key": "7fec7277-b2bc-48a6-b367-93bcf85b71f6" } }
//     );
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     return res.status(e.response.status).json(e.response.data);
//   }


// });

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "7fec7277-b2bc-48a6-b367-93bcf85b71f6" } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      if (e.response) {
        return res.status(e.response.status).json(e.response.data);
      } else {
        // Handle the error when there is no response object
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }
  });

  
  
  
  
  
  
  

app.listen(3001);