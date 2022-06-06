const mongooose = require("mongoose");
const noteSchema = {
    fname: String,
    mail: String,
    phone : String,
    pass : String,

}
const Note = mongooose.model("Note", noteSchema);
module.exports = Note;