import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        songsResults: [],
        selectedSong: [],
        playing: false,
        pause: false,
        audio: "",
        totalTimeSong: "30",
        currentTimeSong: null
    },

    mutations: {
        saveSongsResults(state, data) {
            state.songsResults = data;
        },

        playSongStore(state, data) {
            state.playing = true;
            state.pause = false;
            state.selectedSong = data;
        },

        playSongAudio(state, data) {
            state.audio = data;
            state.audio.addEventListener('loadeddata', () => {
                state.audio.play();
            });
        },

        resumeSongAudio(state) {
            state.audio.play();
            state.playing = true;
            state.pause = false;
        },

        pauseSongAudio(state) {
            state.audio.pause();
            state.playing = false;
            state.pause = true;
        },

        songCurrentTime(state) {
            state.currentTimeSong = state.audio.currentTime;
        }
    },

    getters: {
        getSongResults(state) {
            return state.songsResults;
        },

        getPlayingSong(state) {
            return state.selectedSong;
        },

        getPlay(state) {
            return state.playing;
        },

        getAudio(state) {
            return state.audio;
        },

        getSongCurrentTime(state) {
            return state.currentTimeSong;
        },

        getSongTotalTime(state) {
            return state.totalTimeSong;
        }
    }
});

export default store;
