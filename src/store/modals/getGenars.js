import i18n from "../../i18n"


export default {
    state: {
        genars: {},
        movies_with_ganers: {}
    },
    getters: {
        genars_getters(state) {
            return state.genars
        },
        movies_with_ganers_getters(state) {
            return state.movies_with_ganers
        }
    },
    mutations: {
        genars_setters(state, data) {
            state.genars = data
        },
        movies_with_ganers_setters(state, data) {
            state.movies_with_ganers = data
        }
    },
    actions: {
        getGenars(context, data) {
            return new Promise ((resolve, reject) => {
                axios.get(`genre/movie/list?language=${i18n.locale}`).then((res) => {
                    context.commit('genars_setters', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            }) 
        },
        getMovies_with_ganers(context, data) {
            return new Promise ((resolve, reject) => {
                axios.get(`/discover/movie?page=${data.page}&with_genres=${data.gener}&language=${i18n.locale}`).then((res) => {
                    context.commit('movies_with_ganers_setters', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        }
    }
}