import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly excludedRoutes: RegExp[] = [
    /^\/auth\/login$/,
    /^\/auth\/signup$/,
  ];

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { url } = request;

    // Check if the current URL matches any of the excluded patterns
    const isExcluded = this.excludedRoutes.some((pattern) => pattern.test(url));

    if (isExcluded) {
      return true; // Allow access without JWT verification
    }

    // Otherwise, apply JWT verification
    return super.canActivate(context);
  }
}
