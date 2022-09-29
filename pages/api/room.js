import { checkToken } from "../../backendLibs/checkToken";
import { readChatRoomsDB } from "../../backendLibs/dbLib";

export default function roomRoute(req, res) {
  if (req.method === "GET") {
    // check token

    const user = checkToken(req);
    if (!user) {
      return res.status(401).json({
        ok: false,
        message: "Yon don't permission to access this api",
      });
    }

    //create room data and return response

    const chatrooms = readChatRoomsDB();
    chatrooms.map((x) => {
      delete x.messages;
    });

    return res.json({ ok: true, rooms: chatrooms });
  }
}
