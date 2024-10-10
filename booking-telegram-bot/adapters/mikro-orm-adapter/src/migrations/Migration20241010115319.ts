import { Migration } from '@mikro-orm/migrations'

export class Migration20241010115319 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `alter table "appointment" add column "time_slot" int not null, add column "car_body" varchar(255) not null, add column "radii" varchar(255) not null, add column "service" varchar(255) not null, add column "commentary" varchar(255) not null;`
    )
  }
}
