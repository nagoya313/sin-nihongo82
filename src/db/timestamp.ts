import { type Generated } from 'kysely';

export type Timestamp = {
  readonly created_at: Generated<Date>;
  readonly updated_at: Generated<Date>;
};
