<template>
    
    <div class="app-songlist">
        <div class="app-song" v-for="(song, index) in getSongResults" :key="index">
            <div class="app-song-header">
                <h2 class="song-artist">{{ song.artist }}</h2>
                <h4 class="song-title">{{ song.title }}</h4>
            </div>
            <img :src="song.cover" class="song-cover">
        </div>
    </div>

</template>



<script>
import { mapGetters } from 'vuex';

export default {

    mounted(){
        
    },

    data(){
        return{



        }
    },

    computed:{
        ...mapGetters( ['getSongResults'] )
    }

}
</script>



<style lang="scss" scoped>

.app-songlist{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;

    .app-song{
        margin-bottom: 40px;
        margin-left: 30px;
        margin-right: 30px;
        background: #fff;
        border-radius: 5px;
        padding: 5px;


/*         &:last-child{
            margin-right: 0;
        }

        &:first-child{
            margin-left: 0;
        } */

        .app-song-header{
            height: 100px;

            .song-artist{
                width: 250px;
                margin-bottom: 0;
                text-align: center;
            }

            .song-title{
                width: 250px;
                text-align: center;
            }
        }

    }
}

</style>
