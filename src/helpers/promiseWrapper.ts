import { Request, Response } from "express";

const promiseWrapper =
  <TRES>(callback: (req: Request) => Promise<TRES>) =>
  (req: Request, res: Response) => {
    // @ts-ignore
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    );

    callback(req)
      .then((result: TRES) => {
        res.send(result).status(200);
      })
      .catch((err) => res.send(err).status(500));
  };

export default promiseWrapper;
