import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/cocktails", { useNewUrlParser: true, useUnifiedTopology: true });

export default mongoose;