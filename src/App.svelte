<!-- svelte-options runes=true -->
<script lang="ts">
    import RouterComponent from './lib/components/Router.svelte'
    import { router } from './routes'
    import Layout from './components/templates/Layout.svelte'
    import NotificationContainer from './components/organisms/NotificationContainer.svelte'
    import { themeStore } from './stores/theme.store.svelte'
    
    // Initialize theme
    $effect(() => {
        themeStore.initTheme()
    })
    
    //console.log('App.svelte loaded with full layout!')
</script>

<Layout>
    <RouterComponent {router} />
</Layout>

<NotificationContainer />