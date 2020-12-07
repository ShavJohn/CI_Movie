import i18n from "../../i18n"

export default {
    state: {
        search_movies: {},
        random_movie: {}
    },
    getters: {
        search_movies_getter(state) {
            return state.search_movies
        },
        random_movie_getter(state) {
            return state.random_movie
        }
    },
    mutations: {
        search_movies_setter(state, data) {
            state.search_movies = data
        },
        random_movie_setter(state, data) {
            state.random_movie = data
        }
    },
    actions: {
        searchMovies(context, data) {
            return new Promise((resolve, reject) => {
                axios.get(`/search/movie?query=${data.search}&page=${data.page}&language=${i18n.locale}`).then((res) => {
                    context.commit('search_movies_setter', res.data)
                    resolve(res);
                })
            }).catch(() => {
                reject()
            })
        },
        getRandomMovie(context, data) {
            return new Promise((resolve, reject) => {
                axios.get(`/movie/popular?page=${data}&language=${i18n.locale}`).then((res) => {
                    context.commit('random_movie_setter', res.data)
                    resolve(res)
                })
            }).catch(() => {
                reject()
            })
        }
    }
}