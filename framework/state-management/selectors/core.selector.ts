import { coreAdapter } from '../adapters/core.adapter';

export const {
  selectIds: selectRootIds,
  selectEntities: selectRootEntities,
  selectAll: selectAllRoots,
  selectTotal: rootsCount
} = coreAdapter.getSelectors(); 