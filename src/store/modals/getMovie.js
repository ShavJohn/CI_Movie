import i18n from "../../i18n"

export default {
    state: {
        movies: {},
        rec_movies: {},
        top_movies: {},
        get_movie: {},
        sim_movies: {},
    },
    getters: {
        movies_getter(state){
            return state.movies
        },
        rec_movies_getter(state) {
            return state.rec_movies
        },
        top_movies_getter(state) {
            return state.top_movies
        },
        get_movie_getter(state) {
            return state.get_movie
        },
        sim_movies_getter(state) {
            return state.sim_movies
        }
    },
    mutations: {
        movies_setter(state, data){
            state.movies = data
        },
        rec_movies_setter(state, data) {
            state.rec_movies = data
        },
        top_movies_setter(state, data) {
            state.top_movies = data
        },
        get_movie_setter(state, data) {
            state.get_movie = data
        },
        sim_movies_setter(state, data) {
            state.sim_movies = data
        }
    },
    actions: {
        getMovieslist(context, data) {
            return new Promise((resolve, reject) => {
                axios.get(`/movie/popular?page=${data}&language=${i18n.locale}`).then((res) => {
                    context.commit('movies_setter', res.data)
                    resolve(res)
                })
            }).catch(() => {
                reject()
            })
        },
        getRecMovies(context, data) {
            return new Promise((resolve, reject) => {
                axios.get(`/movie/top_rated?page=1&language=${i18n.locale}`).then((res) => {
                    context.commit('rec_movies_setter', res.data)
                    resolve(res)
                })
            }).catch(() => {
                reject()
            })
        },
        getTopMovies(context, data) {
            return new Promise((resolve, reject) => {
                axios.get(`/movie/popular?page=1&language=${i18n.locale}`).then((res) => {
                    context.commit('top_movies_setter', res.data)
                    resolve(res)
                })
            }).catch(() => {
                reject()
            })
        },
        getMovie(context, data) {
            return new Promise((resolve, reject) => {
                axios.get(`/movie/${data}?language=${i18n.locale}`).then((res) => {
                    context.commit('get_movie_setter', res.data)
                    resolve(res)
                }).catch(() => {
                    reject()
                })
            })
        },
        getSimMovies(context, data) {
            return new Promise((resolve, reject) => {
                axios.get(`movie/${data}/similar?page=1&language=${i18n.locale}`).then((res) => {
                    context.commit('sim_movies_setter', res.data)
                    resolve(res)
                })
                .catch(() => {
                    reject()
                })
            })
        },
    }
  
}