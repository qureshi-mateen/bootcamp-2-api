const { ProjectsModel } = require('../models');

const addProject = (body) => {
    const doc = new ProjectsModel(body);
    const query = { _id: doc._id };
    return ProjectsModel.findOneAndUpdate(
        query,
        doc,
        {
            new: true,
            upsert: true
        }
    ).populate('owner');
};

const getAllProjects = (filter) => {
    return ProjectsModel.find(filter).populate('owner').sort({ _id: -1 });
};

const getProjectById = (id) => {
    return ProjectsModel.findById(id);
}

const updateProject = (id, body) => {
    const query = { _id: id };
    return ProjectsModel.findOneAndUpdate(query, body, { new: true });
};

const deleteProject = (id) => {
    return ProjectsModel.findByIdAndDelete(id, { new: true });
};

const verifyProject = (filter) => {
    return ProjectsModel.findOne(filter);
};

module.exports = {
    addProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    verifyProject
}