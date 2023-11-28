module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            required: [true, "The First Name is Required"],
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            required: [true, "The LastName is Required"],
        
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            required: [true, "The Email is Required"],
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,required: [true, "Password is Required"],
        
        }
    })
    return User;
}