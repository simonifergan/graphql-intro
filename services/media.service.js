const medias = [
  { id: "123", type: "png", url: "http://png.com/123" },
  {
    id: "234",
    type: "jpg",
    url: "http://jpg.com/234",
  },
];

function getAll() {
  return medias;
}

function getById(id) {
  return medias.find((media) => media.id === id);
}

function add(media) {
  const id = (Math.floor(Math.random() * 300) + 100).toString();
  const newMedia = { id, ...media };
  medias.push(newMedia);
  return newMedia;
}
module.exports = {
  getAll,
  getById,
  add,
};
