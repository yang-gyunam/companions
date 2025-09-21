import { Router, type Route } from './lib/router.svelte.js';
import Home from './pages/Home.svelte'
import Dictionary from './pages/dictionary/Dictionary.svelte'
import Project from './pages/project/Project.svelte'
import Requirement from './pages/requirement/Requirement.svelte'
import Setting from './pages/setting/Setting.svelte'
import Team from './pages/team/Team.svelte'

// Test pages
import Test from './pages/test/Test.svelte'
import TestAlert from './pages/test/components/alert.svelte'
import TestAvarta from './pages/test/components/avarta.svelte'
import TestBadge from './pages/test/components/badge.svelte'
import TestButton from './pages/test/components/button.svelte'
import TestCard from './pages/test/components/card.svelte'
import TestCheckbox from './pages/test/components/checkbox.svelte'
import TestDropdown from './pages/test/components/dropdown.svelte'
import TestImage from './pages/test/components/image.svelte'
import TestIndicator from './pages/test/components/indicator.svelte'
import TestLayout from './pages/test/components/layout1-1.svelte'
import TestLink from './pages/test/components/link.svelte'
import TestModal from './pages/test/components/modal.svelte'
import TestProgress from './pages/test/components/progress.svelte'
import TestRadialProgress from './pages/test/components/radial-progress.svelte'
import TestSwap from './pages/test/components/swap.svelte'
import TestTextInput from './pages/test/components/text-input.svelte'
import TestMy1 from './pages/test/components/_my1.svelte'
import TestPeople0 from './pages/test/components/_people0.svelte'
import TestProject0 from './pages/test/components/_project0.svelte'

const routes: Route[] = [
    { path: '/', component: Home, name: 'home' },
    { path: '/dictionary', component: Dictionary, name: 'dictionary' },
    { path: '/project', component: Project, name: 'project' },
    { path: '/requirement', component: Requirement, name: 'requirement' },
    { path: '/setting', component: Setting, name: 'setting' },
    { path: '/team', component: Team, name: 'team' },
    
    // Test routes
    { path: '/test', component: Test, name: 'test' },
    { path: '/test/alert', component: TestAlert, name: 'test-alert' },
    { path: '/test/avarta', component: TestAvarta, name: 'test-avarta' },
    { path: '/test/badge', component: TestBadge, name: 'test-badge' },
    { path: '/test/button', component: TestButton, name: 'test-button' },
    { path: '/test/card', component: TestCard, name: 'test-card' },
    { path: '/test/checkbox', component: TestCheckbox, name: 'test-checkbox' },
    { path: '/test/dropdown', component: TestDropdown, name: 'test-dropdown' },
    { path: '/test/image', component: TestImage, name: 'test-image' },
    { path: '/test/indicator', component: TestIndicator, name: 'test-indicator' },
    { path: '/test/layout', component: TestLayout, name: 'test-layout' },
    { path: '/test/link', component: TestLink, name: 'test-link' },
    { path: '/test/modal', component: TestModal, name: 'test-modal' },
    { path: '/test/progress', component: TestProgress, name: 'test-progress' },
    { path: '/test/radial-progress', component: TestRadialProgress, name: 'test-radial-progress' },
    { path: '/test/swap', component: TestSwap, name: 'test-swap' },
    { path: '/test/text-input', component: TestTextInput, name: 'test-text-input' },
    { path: '/test/my1', component: TestMy1, name: 'test-my1' },
    { path: '/test/people0', component: TestPeople0, name: 'test-people0' },
    { path: '/test/project0', component: TestProject0, name: 'test-project0' }
];

export const router = new Router(routes);
export { routes };