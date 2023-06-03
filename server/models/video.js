const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class Video extends Model {}

Video.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    youtubeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    youTubeChannelName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    youTubeVideoName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Video',
    tableName: 'Videos',
    timestamps: false,
  }
);

module.exports = Video;