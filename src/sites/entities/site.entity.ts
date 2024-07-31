import { Site } from '@prisma/client';

export class SiteEntity implements Site {
  id: number;
  name: string;
  createdAt: Date;
  active: boolean | null;
}
