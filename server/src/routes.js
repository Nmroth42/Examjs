const TestController = require("../controllers/testServices");

module.exports = app => {
  //описание тестов
  app.get("/api/tests", TestController.AllTestTitles);
  //описание отдельного теста
  app.get("/api/test/:testId", TestController.oneTestTitle);
  //содержание теста
  app.get("/api/questions/:testId", TestController.testContent);
  //результат одного теста
  app.post("/api/answers", TestController.resultTest);
};
