import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateTeamMemberBody } from "./dtos/create-team-member-body";
import { RocketMembersRepository } from "./repositories/rockert-members-repository";

@Controller("app")
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post("hello")
  async createHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }

  @Get("hello")
  async getAllMembers() {}
}
