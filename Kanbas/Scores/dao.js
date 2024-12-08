import model from "./model.js";

// create
export function createScore(user, quiz) {
    return model.create({ user, quiz });
}

// update
export function updateScore(scoreId, scoreUpdates) {
    return model.updateOne({_id: scoreId }, scoreUpdates);
}

// retrieve last score
export function getScore(user, quiz) {
    return model.findOne({ user, quiz });
}