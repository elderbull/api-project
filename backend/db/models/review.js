'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    review: {
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Review text is required"
        }
      }
    },
    stars: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
       checkStars(){
        const val = this.stars;
        if(val < 1 || val > 5 || !val){
          throw new Error("Stars must be an interger from 1 to 5")
        }
       }
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
