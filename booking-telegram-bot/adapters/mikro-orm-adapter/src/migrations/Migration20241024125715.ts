import { Migration } from '@mikro-orm/migrations'

export class Migration20241024125715 extends Migration {
  override async up(): Promise<void> {
    this.addSql(`alter table "appointment" add column "phone" varchar(255) null;`)
    this.addSql(
      `alter table "appointment" alter column "telegram_user_id" type bigint using ("telegram_user_id"::bigint);`
    )
    this.addSql(`alter table "appointment" alter column "telegram_user_id" drop not null;`)
    this.addSql(
      `alter table "appointment" alter column "time_slot_start" type bigint using ("time_slot_start"::bigint);`
    )
    this.addSql(`alter table "appointment" alter column "time_slot_start" drop not null;`)
    this.addSql(
      `alter table "appointment" alter column "time_slot_end" type bigint using ("time_slot_end"::bigint);`
    )
    this.addSql(`alter table "appointment" alter column "time_slot_end" drop not null;`)
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table "appointment" alter column "telegram_user_id" type int8 using ("telegram_user_id"::int8);`
    )
    this.addSql(`alter table "appointment" alter column "telegram_user_id" set not null;`)
    this.addSql(
      `alter table "appointment" alter column "time_slot_start" type int8 using ("time_slot_start"::int8);`
    )
    this.addSql(`alter table "appointment" alter column "time_slot_start" set not null;`)
    this.addSql(
      `alter table "appointment" alter column "time_slot_end" type int8 using ("time_slot_end"::int8);`
    )
    this.addSql(`alter table "appointment" alter column "time_slot_end" set not null;`)
  }
}
