import { RootState } from '../interfaces/root-state.interface';

export const selectGoals = (state: RootState) => state.goals;
