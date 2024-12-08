// relation between student and quiz (many to many)
import mongoose from "mongoose";
const scoreSchema = new mongoose.Schema(
    {
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel", required: true},
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true},
        points: { type: Number, default: 0 },
        startDate: {
            type: Date,
        },
        endDate: Date,
        attempts: { type: Number, default: 0 },
        answers: [String],
        status: {
            type: String,
            enum: ["IN_PROGRESS", "NOT_STARTED", "COMPLETED"],
            default: "NOT_STARTED",
        },
    },
    { collection: "scores" }
);
export default scoreSchema;