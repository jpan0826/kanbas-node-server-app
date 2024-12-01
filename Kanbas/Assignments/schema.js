import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        title: String,
        description:String,
        points: String,
        assignee: String,
        // available_time:String,{timestamps:true},
        course:{ type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    },
    { collections: "assignments" }  
);
export default schema;