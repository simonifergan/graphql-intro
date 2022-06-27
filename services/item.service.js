const items = [{ id: "1123", taskId: "2123", mediaIds: ["123", "234"] }];

function getById(id) {
  return items.find((hil) => hil.id === id);
}

module.exports = {
  getById,
};
