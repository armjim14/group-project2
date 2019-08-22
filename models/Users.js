module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    nameX: DataTypes.STRING,
    usernameX: DataTypes.STRING,
    password1X: DataTypes.STRING,
    category: DataTypes.STRING
  });

  Users.associate = function(models) {
    Users.hasMany(models.comments, {
      onDelete: "cascade"
    });
    Users.hasMany(models.posts, {
      onDelete: "cascade"
    });
  };

  return Users;
};
