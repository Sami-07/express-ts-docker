import { User } from "../models/users";
import { z } from "zod";
const userSchema = z.object({
    name: z.string(),
    age: z.number()

})

export const getUsers = async () => {
    try {
        const users = await User.find();
        return { success: true, data: users };
    }
    catch (err: any) {
        return { succes: false, err: err.message };
    }
}

export const createUser = async (name: string, age: number) => {
    try {
        const validate = userSchema.safeParse({ name, age });
        if (!validate.success) {
            return { success: false, err: validate.error };
        }
        const user = new User({ name, age });
        await user.save();
        return { success: true, data: user };
    }
    catch (err: any) {
        return { success: false, err: err.message };
    }
}