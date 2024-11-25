import UserModel from "./../models/users.models.js";
import bcryptjs from "bcrypt";
export const userRegisterController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existedUser = await UserModel.findOne({ email });

    if (existedUser) {
      return res.status(403).json({
        success: false,
        message: "user already exists",
      });
    }

    let hashPassword = await bcryptjs.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashPassword,
    });
    

    res.status(200).json({
      success: true,
      message: `User ${newUser.name} registered successfully`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
