import express from 'express';

import { filterAndStoreOrders } from './service';
import { filterPassedStudents,getStudentNames,getAverageAge,sortStudentsByGrade } from './service';
import { performArrayFunctions } from './service';



const app = express();
const port = 3000;

app.use(express.json());

//Question 1

  app.post('/process-orders', async (req, res) => {
    try {
      const itemsList = req.body.items;
      const result = await filterAndStoreOrders(itemsList);
      res.send(result);
    } catch (error) {
      console.error('Error processing orders:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  
//Question 2
app.post('/array-functions', (req, res) => {
    const arr = req.body.array;
  
    if (!Array.isArray(arr)) {
      return res.status(400).send('Payload should contain an array');
    }
  
    const result = performArrayFunctions(arr);
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
    const passedStudents = filterPassedStudents(students);
    res.status(200).json(passedStudents);
});

app.get('/api/students/names', (req, res) => {
    const studentNames = getStudentNames(students);
    res.status(200).json(studentNames);
});

app.get('/api/students/sorted', (req, res) => {
    const sortedStudents = sortStudentsByGrade(students);
    res.status(200).json(sortedStudents);
});

app.get('/api/students/average-age', (req, res) => {
    const averageAge = getAverageAge(students);
    res.status(200).json({ averageAge });
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});