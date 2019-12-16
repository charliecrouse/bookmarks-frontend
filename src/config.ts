export interface Config {
  bookmarks: {
    url: string;
  };
}

/**
 * How to customize configuration:
 *
 * In development:
 *
 * In production:
 */

const development: Config = {
  bookmarks: {
    url: `http://${process.env.REACT_APP_BOOKMARKS_BACKEND_HOST || 'localhost'}:${parseInt(
      process.env.REACT_APP_BOOKMARKS_BACKEND_PORT || '3000',
    )}`,
  },
};

const production: Config = {
  bookmarks: {
    url: `http://${process.env.REACT_APP_BOOKMARKS_BACKEND_HOST || 'bookmarks.charliecrouse.me'}:${parseInt(
      process.env.REACT_APP_BOOKMARKS_BACKEND_PORT || '3000',
    )}`,
  },
};

const config: Config = process.env.NODE_ENV === 'production' ? production : development;

export default config;
