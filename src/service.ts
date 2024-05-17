//import sequelize from './pgConfig';
import Order from './orderModel';
import axios from 'axios';

//Question 1
export async function filterAndStoreOrders(itemsList: any[]): Promise<string> {
    const filteredOrders = itemsList.filter((item: any) => {
      return !item.OrderBlock.some((block: any) => block.LineNo % 3 === 0);
    });
  
    const orderIDs = filteredOrders.map((item: any) => item.OrderID);
  
    try {
      await Order.sync(); // Sync the Order model with the database
      await Order.bulkCreate(orderIDs.map((orderID: string) => ({ orderID })));
      return 'Orders processed and stored successfully';
    } catch (error) {
      throw new Error(`Error processing and storing orders`);
    }
  }

//Question 2
export function performArrayFunctions(arr: any[]): string {
    let result = "";
  
    
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

//Question 4
interface Student {
    name: string;
    age: number;
    grade: number;
}

export const filterPassedStudents = (students: Student[]): Student[] => {
    return students.filter(student => student.grade >= 50);
};

export const getStudentNames = (students: Student[]): string[] => {
    return students.map(student => student.name);
};

export const sortStudentsByGrade = (students: Student[]): Student[] => {
    return [...students].sort((a, b) => a.grade - b.grade);
};

export const getAverageAge = (students: Student[]): number => {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
};