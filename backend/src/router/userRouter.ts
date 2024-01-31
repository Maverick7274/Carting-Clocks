import express from "express";

import { getAllUsers, deleteUser, updateUser } from "../controllers/userController";

import { isAuthenticated, isAuthorized } from "../middlewares";

export default (router: express.Router) => {
    router.get("/users", isAuthenticated, getAllUsers);
    router.delete("/users/:id", isAuthenticated, isAuthorized, deleteUser);
    router.patch("/users/:id", isAuthenticated, isAuthorized, updateUser);
}
