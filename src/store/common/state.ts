export interface AsyncState {
  loading: boolean;
  error: Error | undefined;
}

export const defaultAsyncState: AsyncState = {
  loading: false,
  error: undefined,
};
