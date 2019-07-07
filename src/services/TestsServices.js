import Api from './Api'

export default {
    getTestsTitles () {
        return Api().get('api/tests')
    },
    getQuestions (testId) {
        return Api().get(`api/questions/${testId}`)
    },
    getOneTestTitles(testId) {
        return Api().get(`api/test/${testId}`)
    },
    postAnswers (answers) {
        return Api().post('api/answers', answers)
    },
    // show (songId) {
    //     return Api().get(`songs/${songId}`)
    // },
}