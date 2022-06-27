const tasks = [{ id: "2123", delay: 3 }];

function getById(id) {
  return tasks.find((task) => task.id === id);
}

module.exports = {
  getById,
};
