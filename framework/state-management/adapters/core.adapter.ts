import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { CoreEntity } from '../entities';

export const coreAdapter: EntityAdapter<CoreEntity> = createEntityAdapter<CoreEntity>();