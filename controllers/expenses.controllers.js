import { data } from "react-router-dom";
import Expense from "../models/expenses.models.js"


export const addExpenseController = async (req,res)=>{
    try {
        const {name,amount} = req.body;
    const newExpense = new Expense({
        name,
        amount
    })
    res.json({message:"Expense added succesfully"});
    await newExpense.save();
    } catch (error) {
        console.log("Can't add to database",error);
        res.json({message:"Error adding to database"});
    }
}

export const listExpensesController = async(req,res)=>{
    try {
        const expense = await Expense.find();
        res.json({data:expense});
        }
         catch (error) {
            res.json({message:"Cannot fetch expenses"});
    }
}


export const deleteExpenseController = async(req,res,id)=>{
    try {
        const {id} = req.params;
        const response = await Expense.findByIdAndDelete(id);
        if(response)
        {
            res.json({message:"Note deleted successfully"});
        }
        else{
            res.json({message:"Some error while deleting the note"});
        }
    } catch (error) {
        res.json({message:"error deleting the note"});
    }
}


export const updateExpenseController = async(req,res)=>{
    try {
        const {id} = req.params;
        const {name,amount} = req.body;
        const updatedData = await Expense.findByIdAndUpdate(id,
            {
                name,
                amount
            }
        )
        if(!updatedData)
        {
            return res.json({message:"expense not found"});
        }
        res.json({message:"Updated succesfully"});
    } catch (error) {
        res.json({message:"Error updating the note"});
    }
}

