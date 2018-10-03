<template>
    <div class="app-songlist">

        <ul class="app-song-results" v-for="(song, index) in results" :key="index">
            <li class="app-song-item">
                <img :src="song.cover" alt="">
                <p class="song-title">{{ song.title }}</p>
                <router-link to="{ name: 'home' }" tag="a"><small class="song-artist">{{ song.artist }}</small></router-link>
                <div class="song-play-buttons">
                    <button class="play-button" @click="playSong(song)">
                        <i class="material-icons">play_arrow</i>
                    </button>
                </div>
            </li>
        </ul>
        
    </div>
</template>



<script>
import { mapGetters } from 'vuex';

export default {

    //Recibimos las propiedades del componente padre SEARCHSONG
    props:[ 'results' ],

    methods: {

        playSong(song){
            this.$store.commit( 'playSongStore', song );
            this.$store.commit( 'saveSongsResults', null );
            this.query = '';
        }

    },

    computed: {

        ...mapGetters( ['getPlayingSong'] )

    }

}
</script>



<style lang="scss" scoped>

.app-songlist{
    padding: 0;
    background: #fff;
    box-shadow: rgba($color: #333, $alpha: 1.0);
    position: absolute;
    left: 65px;
    top: 65px;
    display: flex;
    flex-direction: column;
    width: 58%;

    .app-song-results{
        list-style: none;
        overflow: auto;
        width: 100%;
        padding: 0;
        margin: 0;
        background: #fff;

        .app-song-item{
            padding: 0.5em;
            border-bottom: 1px solid #e5e5e5;
            height: 70px;
            transition: all 0.7s;

                &:hover{
                    background:#eee;

                    .song-play-buttons{
                        visibility: visible;
                        opacity: 1;
                    } 
                }

            img{
                width: 45px;
                height: 45px;
                margin-top: 15px;
                margin-right: 1em;
                border-radius: 5px;
                float: left;
            }

            .song-title{
                margin: 0;
                margin-top: 17px;
                font-size: 14px;
                width: 350px;
            }

            a{
                text-decoration: none;
                color: lightgrey;                
            }

            .song-play-buttons{
                visibility: hidden;
                opacity: 0;
                transition: visibility 0s, opacity 0.7s linear;

                .play-button{
                    
                    border: none;
                    background: #eee;
                    width: 50px;
                    margin-top: -30px;
                    position: absolute;
                    right: 5px;
                    &:hover{
                        background: #e5e5e5;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}

@media only screen and(max-width: 768px) {
    .app-songlist{
        left: 0;
        width: 100%;
    }
}

</style>
