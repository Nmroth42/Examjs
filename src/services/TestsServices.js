import Api from './Api'

export default {
    getTests () {
        return Api().get('api/tests')
    },
    getQuestions (testId) {
        return Api().get(`api/questions/${testId}`)
    }
    // show (songId) {
    //     return Api().get(`songs/${songId}`)
    // },
}