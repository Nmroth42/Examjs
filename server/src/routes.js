const TestController = require("../controllers/testServices");

module.exports = app => {
  //описание тестов
  app.get("examjs.herokuapp.com/api/tests", TestController.AllTestTitles);
  //описание отдельного теста
  app.get("examjs.herokuapp.com/api/test/:testId", TestController.oneTestTitle);

  //содержание теста(не обязательно привязанному по id)
  app.get("examjs.herokuapp.com/api/questions/:testId", TestController.testContent);

  //результат одного теста
  app.post("examjs.herokuapp.com/api/answers", TestController.resultTest);
};
