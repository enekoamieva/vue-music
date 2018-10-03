<template>
    <div class="app-searchsong">

        <input 
            type="search" 
            placeholder="Busca"
            class="form-search"
            v-model="searchQuery" 
            @keyup="searchSongs(searchQuery)" 
        >

        <div class="search-results">
            <!-- Mandamos los datos al componente hijo a través de la propiedad RESULTS -->
            <songs-list :results="getSongResults" />
        </div>

    </div>
</template>



<script>
import { search } from '../api-songs/index';
import { mapGetters } from 'vuex';

import SongsList from './SongsList';

export default {

    components: { SongsList },

    data() {
        return {
            searchQuery: ''
        };
    },

    methods: {
        searchSongs(dataQuery){

            if(dataQuery){
                //Obtenemos datos de la consulta a la API
                search(dataQuery).then( (response) => {
                    //console.log(response);
                    //Almacenamos los datos obtenidos en una variable con el método map
                    const apiResponse = response.data.data.map( (song) => ({
                        title: song.title,
                        cover: song.album.cover_medium,
                        artist: song.artist.name,
                        songId: song.id,
                        artistId: song.artist.id,
                        stream: song.preview
                    }));

                    this.$store.commit( 'saveSongsResults', apiResponse );
                    //this.searchQuery = '';
                    
                });
            }else{
                this.$store.commit( 'saveSongsResults', null );
                console.log('No hay datos en el buscador');
            }

        }
    },

    computed: {
        ...mapGetters( ['getSongResults'] )
    } 

}
</script>



<style lang="scss" scoped>

.app-searchsong {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    width: 100%;

    input{
        width: 60%;
        height: 35px;
        border-style: none;
        border:#e5e5e5 1px solid;
        border-radius: 10px;
        padding: 5px;

        &:focus{
            color: #999;
        }
    }
}

@media only screen and(max-width: 768px) {
    .app-searchsong input{
        width: 100%;
    }
}

</style>