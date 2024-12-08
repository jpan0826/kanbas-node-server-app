import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        title: String,
        assignee: String,
        type: String,
        points: Number,
        shuffle: Boolean,
        time_limit_boolean: Boolean,
        time_limit: Number,
        multiple_attempts: Boolean,
        show_correct_answers: Boolean,
        access_code: String,
        one_question: Boolean,
        webcam: Boolean,
        lock: Boolean,
        due_date: String,
        available_date: String,
        until_date: String,
        group: String,
        published: Boolean,
        
        points: String,
        num_questions: Number,
        score: Number,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        questions: [
            {
                _id: { type: String, required: true }, // Text of the question
                title: { type: String, required: false }, // Text of the question
                question: { type: String, required: false }, // Array of options
                type: { type: String, required: true }, // Correct answer
                points: { type: Number, required: false }, // Correct answer
                shuffle: { type: Boolean, required: false }, // Correct answer
                time: { type: Number, required: false }, // Correct answer
                multiple_attempts: { type: Boolean, required: false }, // Correct answer
                choices: { type: [String], required: false }, // Correct answer
                answers: { type: [String], required: false }, // Correct answer
            }
        ]
    },
    { collections: "quizzes" }
);
export default schema;