const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
// creates each user to seed database
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //creating posts for the seed database
  for (const post of postData) {
    await Post.create({
      ...post
    });
  }

    //creating posts for the seed database
    for (const comment of commentData) {
      await Comment.create({
        ...comment
      });
    }

  process.exit(0);
};

seedDatabase();
