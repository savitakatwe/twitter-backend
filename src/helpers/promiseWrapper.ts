import { Request, Response } from "express";

const promiseWrapper =
  <TRES>(callback: (req: Request) => Promise<TRES>) =>
  (req: Request, res: Response) => {
    callback(req)
      .then((result: TRES) => {
        res.send(result).status(200);
      })
      .catch((err) => res.send(err).status(500));
  };

export default promiseWrapper;
