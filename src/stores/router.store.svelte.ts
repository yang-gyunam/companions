import { router } from '../routes';

function createRouterStore() {
    return {
        get currentPath() {
            return router.currentPath
        },
        get currentMenu() {
            const path = router.currentPath.replace('/', '').toLowerCase()
            
            if (!path || path === '') return 'home'
            if (path === 'team') return 'team'
            if (path === 'project') return 'project'
            if (path === 'requirement') return 'requirement'
            if (path === 'dictionary') return 'dictionary'
            if (path === 'setting') return 'setting'
            if (path.startsWith('test')) return 'test'
            
            return 'home'
        },
        navigate: router.navigate.bind(router)
    }
}

export const routerStore = createRouterStore()

// 호환성을 위한 export (기존 코드에서 사용 중인 경우)
export function getCurrentPath() {
    return router.currentPath
}

export function getCurrentMenu() {
    const path = router.currentPath.replace('/', '').toLowerCase()
    
    if (!path || path === '') return 'home'
    if (path === 'team') return 'team'
    if (path === 'project') return 'project'
    if (path === 'requirement') return 'requirement'
    if (path === 'dictionary') return 'dictionary'
    if (path === 'setting') return 'setting'
    if (path.startsWith('test')) return 'test'
    
    return 'home'
}