/**
 * Resolves a file in /public to a URL that works wherever the site is hosted —
 * at the domain root (username.github.io) or under a sub-path (username.github.io/repo/).
 */
export const asset = (path: string): string => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
