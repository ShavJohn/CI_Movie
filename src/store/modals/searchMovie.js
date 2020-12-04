import i18n from "../../i18n"

export default {
    state: {
        search_movies: {},
    },
    getters: {
        search_movies_getter(state){
            return state.search_movies
        },
    },
    mutations: {
        search_movies_setter(state, data){
            state.search_movies = data
        },
    },
    actions: {
        searchMovies(context, data){
            return new Promise((resolve, reject) => {
                axios.get(`/search/movie?query=${data.search}&page=${data.page}`).then((res) => {
                    context.commit('search_movies_setter', res.data)
                    resolve(res);
                })
            }).catch(() => {
                reject()
            })
        },
    }
}