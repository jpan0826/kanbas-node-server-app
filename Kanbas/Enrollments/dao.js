import Database from "../Database/index.js";
import * as courseDao from "../Courses/dao.js";


export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({_id: Date.now(), user: userId, course: courseId });
    return courseDao.findCoursesForEnrolledUser(userId)
}

export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((enrollment) => 
        enrollment.user !== userId || enrollment.course !== courseId
    );
    return courseDao.findCoursesForEnrolledUser(userId)
}