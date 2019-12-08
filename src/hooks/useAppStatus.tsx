import { useSelector } from 'react-redux';

import { GlobalStore } from '../store';

export const useAppStatus = () => {
  const { auth, bookmarks } = useSelector((store: GlobalStore) => store);

  const loading: boolean = auth.loading || bookmarks.loading;
  const error: Error | undefined = auth.error || bookmarks.error || undefined;

  return { loading, error };
};
