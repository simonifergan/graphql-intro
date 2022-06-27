const mediaService = require("../services/media.service");

module.exports = {
  medias: (root) => {
    return root.mediaIds.map((id) => mediaService.getById(id));
  },
};
