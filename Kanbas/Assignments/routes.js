import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.sendStatus(204);
    });

    // assignment delete
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const status = assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    });
}