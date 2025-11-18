import express from "express";
import { addExpenseController , listExpensesController , deleteExpenseController , updateExpenseController} from "../controllers/expenses.controllers.js";


const router = express.Router();


router.post("/addexpense",addExpenseController);
router.get("/listexpenses",listExpensesController);
router.delete("/delete/:id",deleteExpenseController);
router.put("/update/:id",updateExpenseController)


export default router;