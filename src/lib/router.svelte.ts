// Svelte 5 호환 라우터
interface Route {
  path: string;
  component: any;
  name?: string;
}

class Router {
  routes = $state<Route[]>([]);
  currentPath = $state(window.location.pathname);
  currentRoute = $state<Route | null>(null);
  
  constructor(routes: Route[]) {
    this.routes = routes;
    this.updateCurrentRoute();
    
    // 브라우저 히스토리 변경 감지
    window.addEventListener('popstate', () => {
      this.currentPath = window.location.pathname;
      this.updateCurrentRoute();
    });
  }
  
  private updateCurrentRoute() {
    const route = this.routes.find(r => r.path === this.currentPath);
    this.currentRoute = route || null;
  }
  
  navigate(path: string) {
    if (path !== this.currentPath) {
      window.history.pushState({}, '', path);
      this.currentPath = path;
      this.updateCurrentRoute();
    }
  }
  
  get component() {
    return this.currentRoute?.component || null;
  }
}

export { Router };
export type { Route };