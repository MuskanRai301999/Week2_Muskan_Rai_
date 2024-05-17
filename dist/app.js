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
const express_1 = __importDefault(require("express"));
//import bodyParser from 'body-parser';
const service_1 = require("./service");
const service_2 = require("./service");
const service_3 = require("./service");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
//Question 1
// app.post('/process-orders', async (req, res) => {
//     try {
//       const itemsList = await fetchItemsList();
//       const filteredOrders = filterOrders(itemsList);
//       await storeOrders(filteredOrders);
//       res.send('Orders processed and stored successfully');
//     } catch (error) {
//       console.error('Error processing orders:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
app.post('/process-orders', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemsList = req.body.items;
        const result = yield (0, service_1.filterAndStoreOrders)(itemsList);
        res.send(result);
    }
    catch (error) {
        console.error('Error processing orders:', error);
        res.status(500).send('Internal Server Error');
    }
}));
// app.post('/api/orders', async (req, res) => {
//     const { items } = req.body;
//     if (!items || !Array.isArray(items)) {
//         return res.status(400).send('Invalid payload');
//     }
//     const filteredOrders = filterOrders(items);
//     try {
//         await storeOrderIDs(filteredOrders);
//         res.status(200).send('Orders processed and stored successfully');
//     } catch (error) {
//         console.error('Error storing orders:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });
app.post('/array-functions', (req, res) => {
    const arr = req.body.array;
    if (!Array.isArray(arr)) {
        return res.status(400).send('Payload should contain an array');
    }
    const result = (0, service_3.performArrayFunctions)(arr);
    res.send(result);
});
//Question 4
const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 }
];
app.get('/api/students/passed', (req, res) => {
    const passedStudents = (0, service_2.filterPassedStudents)(students);
    res.status(200).json(passedStudents);
});
app.get('/api/students/names', (req, res) => {
    const studentNames = (0, service_2.getStudentNames)(students);
    res.status(200).json(studentNames);
});
app.get('/api/students/sorted', (req, res) => {
    const sortedStudents = (0, service_2.sortStudentsByGrade)(students);
    res.status(200).json(sortedStudents);
});
app.get('/api/students/average-age', (req, res) => {
    const averageAge = (0, service_2.getAverageAge)(students);
    res.status(200).json({ averageAge });
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map