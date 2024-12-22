import express from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/user/list", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({
      message: "Listagem de usuários",
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro no servidor, tente novamente" });
  }
});

export default router;
