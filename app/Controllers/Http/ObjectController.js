"use strict";
const Helpers = use("Helpers");
const Object = use("App/Models/Object");
class ObjectController {
  async upload({ request, response }) {
    const req = request.all();
    const image = request.file("video_url");
    const uploadImage = await image;
    const upload = await new Object();
    upload.user_id = req.user_id;
    const date = Date.now();
    uploadImage.move(Helpers.publicPath("object"), {
      name: date + uploadImage.clientName,
      overwrite: true
    });
    upload.video_url = date + uploadImage.clientName;
    upload.save();
    return response.json(upload);
  }
  async everything({ response, params }) {
    const upload = await Object.query()
      .where("user_id", params.id)
      .orderBy("created_at", "desc")
      .fetch();
    return response.json(upload);
  }
}

module.exports = ObjectController;
