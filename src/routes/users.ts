import { Router } from "express";
import { createUser, getUsers } from "../controllers/users";

const app = Router();

app.get("/", async (req, res) => {
    const users = await getUsers();
    if (users.success) {
        res.json(users.data);
    }
    else {
        res.status(500).json(users.err);
    }
})

app.post("/create", async (req, res) => {
    const { name, age } = req.body;
    const user = await createUser(name, age);
    if (user.success) {
        res.json(user.data);
    }
    else {
        res.status(500).json(user.err);
    }


})


export default app;