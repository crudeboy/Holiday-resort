/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
// import config from 'config'
import User from "../models/usersModel";
const secret: string = process.env.JWT_SECRET as string;
export async function auth(
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    console.log(req.cookies);
    const token = req.cookies.jwt;
    const decoded: any = jwt.verify(token, secret);
    console.log(decoded);
    const user = await User.findOne({ _id: decoded.id, "tokens.token": token });
    if (!user) {
      throw new Error("Thrown here");
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    // res.status(401).send({ error: 'Please authenticate.' })
    res.redirect("/holidayresort");
  }
}

export async function auth1(
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    console.log(req.cookies);
    const token = req.cookies.jwt;
    const decoded: any = jwt.verify(token, secret);
    console.log(decoded);
    const user = await User.findOne({ _id: decoded.id, "tokens.token": token });
    if (!user) {
      throw new Error("Thrown here");
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    // res.status(401).send({ error: 'Please authenticate.' })
    res.redirect("/login");
  }
}

export async function auth3(
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    console.log(req.cookies);
    const token = req.cookies.jwt;
    const decoded: any = jwt.verify(token, secret);
    console.log(decoded);
    const user = await User.findOne({ _id: decoded.id, "tokens.token": token });
    if (!user) {
      throw new Error("Thrown here");
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    // res.status(401).send({ error: 'Please authenticate.' })
    res.redirect("/login");
  }
}
