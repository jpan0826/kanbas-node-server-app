import * as quizzesDao from "./dao.js";

export default function QuizRoutes(app) {

    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const currQuiz = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.sendStatus(204);
    });

    // quiz delete
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.send(status);
    });


    app.get("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quiz = await quizzesDao.getQuiz(quizId);
        res.json(quiz)
    });
}
