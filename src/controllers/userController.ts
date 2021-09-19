import User from './../models/usersModel';
import { Request, Response } from 'express';
export async function getAllUsers(req: Request, res: Response): Promise<void> {
  const users = await User.find();
  try {
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
}

// export function createUsers(req: Request, res: Response): void {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// }
// export function getSingleUser(req: Request, res: Response): void {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// }
// export function updateUser(req: Request, res: Response): void {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// }
// export function deleteUser(req: Request, res: Response): void {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// }
