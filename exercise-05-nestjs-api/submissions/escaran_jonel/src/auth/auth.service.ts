import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // Register a new user
  async register(name: string, email: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: { name, email, password: hashed },
    });
    return { message: 'User registered successfully', user };
  }

  // Login existing user
  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid email');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid password');

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { message: 'Login successful', token };
  }

  // Verify JWT token (used by JwtStrategy)
  async validateUser(payload: any) {
    return this.prisma.user.findUnique({ where: { id: payload.sub } });
  }
}
