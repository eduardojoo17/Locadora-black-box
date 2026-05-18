import { Router } from "express";
import { UserController } from "../controller/UserController";
;

const router = Router();
const userController = new UserController();

router.post("/", userController.create);
router.get("/", userController.list);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export const UserRoutes = router;