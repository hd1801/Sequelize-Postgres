import {  DataTypes, Model } from 'sequelize';
import Sequelize from "./connect.model.js";
const sequelize  = Sequelize;

class User extends Model{
    getFullName(){
        return [this.firstName,this.lastName].join(" ");
    }
    getOccupation(){
        return this.occupation;
    }
    getDateOfBirth(){
        return this.dob;
    }

}
User.init({ // Model Defination
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4 ,      
        primaryKey: true
      },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName : DataTypes.STRING,
    dob: {
        type: DataTypes.DATE,
        allowNull: false
    },
    address: DataTypes.TEXT,
    occupation: {
        type: DataTypes.STRING ,
        defaultValue: "Not Availaibe",
    }

},{ // Options 
    sequelize,
    modelName:"User"
});
async()=>await User.sync();

export  {User};