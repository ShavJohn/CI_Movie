
export default {
    state: {
        background: {},
        video: {}
    },
    getters: {
        background_getter(state) {
            return state.background
        },
        video_getter(state) {
            return state.video
        }
    },
    mutations: {
        background_setter(state, data) {
            state.background = data
        },
        video_setter(state, data) {
            state.video = data
        }
    },
    actions: {
        getBackground(context, data) {
            return new Promise((resolve, reject) => {
                axios.get(`/movie/popular?language=${i18n.locale}`).then((res) => {
                    context.commit('background_setter', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
                
            })
        },
        getVideo(context, data) {
            return new Promise((resolve, reject) => {
                axios.get(`movie/${data}/videos?language=${i18n.locale}`).then((res) => {
                    context.commit('video_setter', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        }
    }
    
}