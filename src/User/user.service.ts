import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UserRepository } from './user.repository';
import { UserRole } from '../Types/UserRole';

@Injectable()
export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async get_or_create(request: Request, id: string) {
    const checkUser = await this.userRepository.findOne({ userId: id });
    if (checkUser) return request.res.json(checkUser);

    const user = this.userRepository.create({
      userId: id,
    });
    await this.userRepository.save(user);
    request.res.json(user);
  }

  public getAllOwners() {
    return this.userRepository
      .createQueryBuilder('u')
      .andWhere('u.role = :role')
      .setParameter('role', UserRole.OWNER)
      .getMany();
  }
}
