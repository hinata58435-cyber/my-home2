import { useEffect } from 'react';

export type Route = { path: string; params?: Record<string, string> };

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  return { path: hash };
}

export function navigate(path: string) {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function useRoute(cb: (route: Route) => void) {
  useEffect(() => {
    const handler = () => cb(parseHash());
    handler();
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, [cb]);
}

export function getRoute(): Route {
  return parseHash();
}
