import { Migration } from '@mikro-orm/migrations'

export class Migration20241010115319 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table "appointment" ("id" serial primary key, "telegram_user_id" bigint not null, "telegram_full_name" varchar(255) not null, "time_slot_start" bigint not null, "time_slot_end" bigint not null, "is_approved" boolean not null default false, "car_body" varchar(255) not null, "radii" varchar(255) not null, "service" varchar(255) not null, "commentary" varchar(255) not null default '');`
    )
  }
}
