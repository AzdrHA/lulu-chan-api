import { UserBlacklistRepository } from './user.blacklist.repository';
import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { UserRepository } from '../User/user.repository';
import { CreateUserBlacklistDto } from './dto/CreateUserBlacklistDto';
import { UserRole } from '../Types/UserRole';
import { UnauthorizedException } from '../Exception/unauthorized.exception';
import { ForbiddenException } from '../Exception/forbidden.exception';
import { ConflictException } from '../Exception/conflict.exception';
import { NotFoundException } from '../Exception/notfound.exception';

@Injectable()
export class UserBlacklistService {
  private userBlacklistRepository: UserBlacklistRepository;
  private userRepository: UserRepository;

  constructor(
    userBlacklistRepository: UserBlacklistRepository,
    userRepository: UserRepository,
  ) {
    this.userBlacklistRepository = userBlacklistRepository;
    this.userRepository = userRepository;
  }

  public getAllBlacklist = async (
    response: Response,
    page: number,
    limit: number,
  ) => {
    const skip = (page - 1) * limit;
    const req = await this.userBlacklistRepository.getAllUserBlacklist(
      limit,
      skip,
    );

    return response.json({
      res: req[0],
      total: req[1],
      limit,
      page,
      maxPage: Math.round(req[1] / limit),
    });
  };

  /**
   *
   * @param {Response} response
   * @param {CreateUserBlacklistDto} data
   * @return {Promise<Response>}
   */
  public add = async (
    response: Response,
    data: CreateUserBlacklistDto,
  ): Promise<Response> => {
    const moderator = await this.userRepository.findOne({
      userId: data.moderator,
    });
    if (!moderator) throw new NotFoundException('Moderator not found');

    if (moderator.role !== UserRole.OWNER)
      throw new UnauthorizedException('The moderator is not a OWNER');

    const user = await this.userRepository.findOne({
      userId: data.user,
    });
    if (!user) throw new NotFoundException('User not found');

    const checksUserBlacklist =
      await this.userBlacklistRepository.checksUserBlacklistWithDeleted(
        user.id,
      );
    if (checksUserBlacklist)
      throw new ConflictException('This user is already blacklist');

    if (moderator.id === user.id)
      throw new ForbiddenException("You can't self blacklist");

    if (user.role !== UserRole.USER)
      throw new ForbiddenException('This user have not the user role');

    const blacklist = this.userBlacklistRepository.create();
    blacklist.moderator = moderator;
    blacklist.user = user;
    blacklist.reason = data.reason;
    await this.userBlacklistRepository.save(blacklist);

    return response.send('The user has been added at the blacklist!');
  };

  /**
   *
   * @param {Response} response
   * @param {string} user
   * @param {CreateUserBlacklistDto} data
   * @return {Promise<Response>}
   */
  public update = (
    response: Response,
    user: string,
    data: CreateUserBlacklistDto,
  ): Response<any, Record<string, any>> => {
    return response.json({ t: 'fgdsfs' });
  };

  /**
   * @param {Response} response
   * @param {string} id
   * @return {Promise<Response>}
   */
  public delete = async (response: Response, id: string): Promise<Response> => {
    const user = await this.userRepository.findOne({
      userId: id,
    });

    if (!user) throw new NotFoundException('User not found');

    const checksUserBlacklist =
      await this.userBlacklistRepository.checksUserBlacklist(user.id);

    if (!checksUserBlacklist)
      throw new NotFoundException('This user is not blacklist');

    await this.userBlacklistRepository.softRemove(checksUserBlacklist);
    return response.send('This user has been unblacklist');
  };
}
