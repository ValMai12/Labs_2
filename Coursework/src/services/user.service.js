const { UserRepository } = require("../repositories/user.repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    return await this.userRepository.create(data);
  }

  async getUserById(id) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async getUsers(filters) {
    const parsedFilters = {};
    if (filters?.role) {
      parsedFilters.role = filters.role;
    }
    if (filters?.is_active !== undefined) {
      parsedFilters.is_active = filters.is_active;
    }

    return await this.userRepository.findAll(parsedFilters);
  }

  async updateUser(id, data) {
    const existingUser = await this.userRepository.findById(id);
    if (!existingUser) {
      throw new Error("User not found");
    }

    if (data.email && data.email !== existingUser.email) {
      const emailExists = await this.userRepository.findByEmail(data.email);
      if (emailExists) {
        throw new Error("Email already in use");
      }
    }

    return await this.userRepository.update(id, data);
  }

  async deleteUser(id) {
    const existingUser = await this.userRepository.findById(id);
    if (!existingUser) {
      throw new Error("User not found");
    }

    return await this.userRepository.delete(id);
  }
}

module.exports = { UserService };
