const { UsersModel } = require('../models');

const addUser = (body) => {
    return UsersModel.create(body);
};

module.exports = {
    addUser
}