<template>
    <div id="app">

        <header class="app-header">
            <search-song />
        </header>

        <router-view></router-view>
        <player/>

    </div>
</template>



<script>

import SearchSong from './components/SearchSong';
import Player from './components/Player';

export default {

    components: { SearchSong, Player },
    name: 'app'

}
</script>



<style lang="scss">
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #f1f1f1;
    margin: 0;
}

#app {
    margin-bottom: 120px;
}

[v-cloack] {
    display: none;
}

.app-header {
    display: flex;
    height: 60px;
    background: #fff;
    box-shadow: #a5a5a5;
    padding: 10px;

    .logo {
        text-decoration: none;
        color: #2c3e50;
        font-size: 11px;
        align-self: center;
        margin: 0 1em;

        img {
            max-height: 30px;
        }
    }
}
</style>
