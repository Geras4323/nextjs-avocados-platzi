import data from'./data';

const Database = {};

Database.getAll = async () => {
  const formatArray = Object.values(data);
  return formatArray;
};

Database.getById = async (id) => {
  const entry = data[id];
  return entry;
};


export default Database;