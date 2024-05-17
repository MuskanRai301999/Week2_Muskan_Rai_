"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("./pgConfig"));
const Order = pgConfig_1.default.define('Order', {
    orderID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.default = Order;
//# sourceMappingURL=orderModel.js.map