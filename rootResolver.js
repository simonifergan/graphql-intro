const mediaService = require("./services/media.service");
const itemService = require("./services/item.service");

const rootResolver = {
  media: (args, context) => {
    return mediaService.getById(args.id);
  },
  medias: (root, args, context) => {
    return mediaService.getAll();
  },
  item: (root, args) => {
    return itemService.getById(args.id);
  },
};

function createMedia(args) {
  return mediaService.add(args.input);
}

if (process.argv[2] !== "apollo") {
  rootResolver.createMedia = createMedia;
}

module.exports = rootResolver;
