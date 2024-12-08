import model from "./model.js";

// create
export function createQuiz(quiz) {
    delete quiz._id;
    return model.create(quiz);
}

// retrieve
export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
}

// update
export function updateQuiz(quizId, quizUpdates) {
    return model.updateOne({_id: quizId }, quizUpdates);
}

// delete
export function deleteQuiz(quizId) {
    return model.deleteOne({_id: quizId});
}

// get
export function getQuiz(quizId) {
    return model.findOne({_id: quizId});
}