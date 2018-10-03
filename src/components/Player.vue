<template>
    <div class="app-player">

        <div v-if="getPlayingSong != ''">
            <audio :src="getPlayingSong.stream" preload="auto"></audio>
            <img :src="getPlayingSong.cover" class="play-song-cover">
            <h2 class="play-song-title">{{ getPlayingSong.title }}</h2>
            <h3 class="play-song-artist">{{ getPlayingSong.artist }}</h3>

            <br>

            <div class="play-song-time">
                <!-- <p>{{ filterCurrentTime }} seg. >> {{ getSongTotalTime }} seg.</p> -->
                <progress :value="filterCurrentTime" :max="getSongTotalTime"></progress>
            </div>

            <div class="media-buttons">
                <button class="play" v-if="!getPlay || getSongCurrentTime >= 30.72" @click="resumePlaySong()"><i class="material-icons">play_arrow</i></button>
                <button class="pause" v-else @click="pausePlaySong()"><i class="material-icons">pause</i></button>
            </div>
        </div>

        <div v-else><h5>Busca una canción para reproducir durante 30 segundos</h5></div>      

    </div>
</template>



<script>
import { mapGetters } from 'vuex';

export default {

    beforeUpdate(){
        
    },

    updated(){
        //Llamamos a la mutación GETSONGAUDIO y le mandamos como parametro todo el tag HTML audio
        this.$store.commit( 'playSongAudio', this.$el.querySelectorAll('audio')[0] );
        //Recogemos el tiempo de la propieda audio cada vez que se actualize y llamamos a la función CURRENTIME para ejecutar la MUTATION y guardar el tiempo
        this.getAudio.addEventListener( 'timeupdate', this.currentTime );
    },

    methods: {
        resumePlaySong(){
            this.$store.commit( 'resumeSongAudio', this.$el.querySelectorAll('audio')[0] );
        },

        pausePlaySong(){
            this.$store.commit( 'pauseSongAudio', this.$el.querySelectorAll('audio')[0] );
        },

        currentTime(){
            this.$store.commit( 'songCurrentTime' );
        }
    },
    
    computed: {
        ...mapGetters( ['getPlayingSong', 'getPlay', 'getAudio', 'getSongCurrentTime', 'getSongTotalTime'] ),

        filterCurrentTime(){
            const currentTime = this.getSongCurrentTime;
            const time = new Date( currentTime * 1000 ).toISOString().substr(11,8);
            return (time.indexOf('00:00') === 0) ? time.substr(6) : time;
        }
    }

}

</script>



<style lang="scss">

    .app-player{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        text-align: center;

        .play-song-cover{
            border-radius: 10px;
            width: 250px;
            height: 250px;
        }

        .play-song-title{
            margin: 10px;
        }

        .play-song-artist{
            margin: 0;
            color: #999;
            font-size: 15px;
            text-transform: uppercase;
        }

        .media-buttons{
            margin-top: 30px;
            text-align: center;

            .play, .pause{
                border: none;
                transition: all 0.5s;
                &:hover{
                    cursor: pointer;
                    background: #f5f5f5;
                }
            }
        }
    }

</style>