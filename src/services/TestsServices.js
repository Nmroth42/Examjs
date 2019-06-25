import Api from './Api'

export default {
    getTests () {
        return Api().get('api/tests')
    },
    getQuestions (testId) {
        return Api().get(`api/questions/${testId}`)
    },
    postAnswers (answers) {
        return Api().post('api/answers', answers)
    },
    // show (songId) {
    //     return Api().get(`songs/${songId}`)
    // },
}