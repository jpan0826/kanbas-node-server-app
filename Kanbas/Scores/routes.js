import * as scoresDao from "./dao.js";

export default function ScoreRoutes(app) {

    // CREATE
    app.post("/api/scores/quiz/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const user = req.session["currentUser"];
        const newScore = await scoresDao.createScore(user._id, quizId);
        res.send(newScore);
    });
    
    app.put("/api/scores/:scoreId", async (req, res) => {
        const { scoreId } = req.params;
        const scoreUpdates = req.body;
        await scoresDao.updateScore(scoreId, scoreUpdates);
        res.sendStatus(204);

    });
    
    app.get("/api/scores/quiz/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const user = req.session["currentUser"];
        const score = await scoresDao.getScore(user._id, quizId);
        return res.json(score)
    });
}