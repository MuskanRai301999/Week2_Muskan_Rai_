"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageAge = exports.sortStudentsByGrade = exports.getStudentNames = exports.filterPassedStudents = exports.performArrayFunctions = exports.storeOrders = exports.filterOrders = exports.fetchItemsList = exports.filterAndStoreOrders = void 0;
//import sequelize from './pgConfig';
const orderModel_1 = __importDefault(require("./orderModel"));
const axios_1 = __importDefault(require("axios"));
function filterAndStoreOrders(itemsList) {
    return __awaiter(this, void 0, void 0, function* () {
        const filteredOrders = itemsList.filter((item) => {
            return !item.OrderBlock.some((block) => block.LineNo % 3 === 0);
        });
        const orderIDs = filteredOrders.map((item) => item.OrderID);
        try {
            yield orderModel_1.default.sync(); // Sync the Order model with the database
            yield orderModel_1.default.bulkCreate(orderIDs.map((orderID) => ({ orderID })));
            return 'Orders processed and stored successfully';
        }
        catch (error) {
            throw new Error(`Error processing and storing orders`);
        }
    });
}
exports.filterAndStoreOrders = filterAndStoreOrders;
function fetchItemsList() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get('https://blog.postman.com/how-to-test-json-properties-in-postman/');
        return response.data.items;
    });
}
exports.fetchItemsList = fetchItemsList;
function filterOrders(itemsList) {
    return itemsList.filter((item) => {
        return !item.OrderBlock.some((block) => block.LineNo % 3 === 0);
    });
}
exports.filterOrders = filterOrders;
function storeOrders(filteredOrders) {
    return __awaiter(this, void 0, void 0, function* () {
        yield orderModel_1.default.bulkCreate(filteredOrders.map((order) => ({ orderID: order.orderID })));
    });
}
exports.storeOrders = storeOrders;
//Questio 2
function performArrayFunctions(arr) {
    let result = "";
    // Perform all array functions here
    result += `Original array: ${arr}\n`;
    // Array length
    result += `Array length: ${arr.length}\n`;
    // Array toString()
    result += `Array toString: ${arr.toString()}\n`;
    // Array at()
    result += `Element at index 1: ${arr.at(1)}\n`;
    // Array join()
    result += `Array join: ${arr.join(' - ')}\n`;
    // Array pop()
    arr.pop();
    result += `Array after pop: ${arr}\n`;
    // Array push()
    arr.push('newItem');
    result += `Array after push: ${arr}\n`;
    // Array shift()
    arr.shift();
    result += `Array after shift: ${arr}\n`;
    // Array unshift()
    arr.unshift('firstItem');
    result += `Array after unshift: ${arr}\n`;
    // Array delete()
    delete arr[1];
    result += `Array after delete index 1: ${arr}\n`;
    // Array concat()
    const newArr = arr.concat(['concatItem1', 'concatItem2']);
    result += `Array after concat: ${newArr}\n`;
    // Array copyWithin()
    newArr.copyWithin(1, 2);
    result += `Array after copyWithin: ${newArr}\n`;
    // Array flat()
    const nestedArr = [1, [2, 3], [4, [5, 6]]];
    const flatArr = nestedArr.flat(2);
    result += `Flat array: ${flatArr}\n`;
    // Array splice()
    arr.splice(1, 1, 'spliceItem');
    result += `Array after splice: ${arr}\n`;
    // Array slice()
    const slicedArr = arr.slice(1, 3);
    result += `Sliced array: ${slicedArr}\n`;
    return result;
}
exports.performArrayFunctions = performArrayFunctions;
const filterPassedStudents = (students) => {
    return students.filter(student => student.grade >= 50);
};
exports.filterPassedStudents = filterPassedStudents;
const getStudentNames = (students) => {
    return students.map(student => student.name);
};
exports.getStudentNames = getStudentNames;
const sortStudentsByGrade = (students) => {
    return [...students].sort((a, b) => a.grade - b.grade);
};
exports.sortStudentsByGrade = sortStudentsByGrade;
const getAverageAge = (students) => {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
};
exports.getAverageAge = getAverageAge;
//# sourceMappingURL=service.js.map