import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";

import authenticateUser from "../middlewares/authenticateUser";

import CreateUserController from "../useCases/User/CreateUser/CreateUserController";
import VerifyUserEmailController from "../useCases/User/VerifyUserEmail/VerifyUserEmailController";
import UserLoginController from "../useCases/User/UserLogin/UserLoginController";
import DeleteUserController from "../useCases/User/DeleteUser/DeleteUserController";
import UpdatePasswordController from "../useCases/User/UpdateUserPassword/UpdateUserPasswordController";
import SendUserEmailUpdateLinkController from "../useCases/User/UpdateUserEmail/SendUserEmailUpdateLink/SendUserEmailUpdateLinkController";
import UpdateUserEmailController from "../useCases/User/UpdateUserEmail/UpdateUserEmail/UpdateUserEmailController";
import SendUserPasswordRecoveryLinkController from "../useCases/User/RecoverUserPassword/SendUserPasswordRecoveryLink/SendUserPasswordRecoveryLinkController";
import RecoverUserPasswordController from "../useCases/User/RecoverUserPassword/RecoverUserPassword/RecoverUserPasswordController";

const router = Router();

router.post("/user/create", adapterRouters(CreateUserController.handle));
router.post("/verify-email", adapterRouters(VerifyUserEmailController.handle));
router.post("/user/login", adapterRouters(UserLoginController.handle));
router.delete("/user/delete", adapterMiddlewares(authenticateUser), adapterRouters(DeleteUserController.handle));
router.patch("/user/password/update", adapterMiddlewares(authenticateUser), adapterRouters(UpdatePasswordController.handle));
router.post("/user/email/send-token-update-email", adapterMiddlewares(authenticateUser), adapterRouters(SendUserEmailUpdateLinkController.handle));
router.patch("/update-email", adapterMiddlewares(authenticateUser), adapterRouters(UpdateUserEmailController.handle));
router.post("/user/password/send-token-password-recover", adapterRouters(SendUserPasswordRecoveryLinkController.handle));
router.patch("/user/password/password-recover", adapterRouters(RecoverUserPasswordController.handle));

export default router;