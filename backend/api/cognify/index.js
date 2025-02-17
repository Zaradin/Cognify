import asyncHandler from "express-async-handler";
import express from "express";

const router = express.Router();

router.get(
    "/test",
    asyncHandler(async (req, res) => {
        const hello = { message: "Hello, There" };
        res.json(hello);
    })
);

export default router;
