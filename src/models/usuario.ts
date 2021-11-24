import { DataTypes } from "sequelize";
import db from '../database/connection'

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }


}, {
    timestamps: true
})

export default Usuario;