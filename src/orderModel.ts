import { DataTypes } from 'sequelize';
import sequelize from './pgConfig';

const Order = sequelize.define('Order', {
  orderID: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Order;

