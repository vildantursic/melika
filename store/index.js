import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            images: [],
            posts: [],
            albums: []
        },
        mutations: {
            setImages(state, payload) {
                state.images = payload
            },
            setPosts(state, payload) {
                state.posts = payload
            },
            setAlbums(state, payload) {
                state.albums = payload
            }
        }
    })
}

export default createStore