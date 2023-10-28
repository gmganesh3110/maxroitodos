const mongoose = require('mongoose');

// Custom validator function to check if the "title" is not an empty string
function nonEmptyStringValidator(value) {
    return value.trim().length > 0;
}

// Custom validator function to check if the "completed" is a boolean
function isBooleanValidator(value) {
    return typeof value === 'boolean';
}

const todosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        validate: [nonEmptyStringValidator, "Title should not be an empty string"]
    },
    completed: {
        type: Boolean,
        required: [true, "Completed or not required"],
        validate: [isBooleanValidator, "Completed should be a boolean"]
    }
}, {
    timestamps: true
});

const Todos = mongoose.model("todos", todosSchema);

module.exports = Todos;
