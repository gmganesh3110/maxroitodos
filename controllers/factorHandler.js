const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
// reusable function for delete document
exports.deleteOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);
        if (!doc) {
            return next(new AppError(`No document found`, 404));
        }
        res.status(200).json({
            status: "success",
            data: null,
        });
    });
// reusable function for update document
exports.updateOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!doc) {
            return next(new AppError(`No doc found`, 404));
        }
        res.status(201).json({
            status: "success",
            data: doc,
        });
    });


// reusable function for create document
exports.createOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const data = await Model.create(req.body);
        res.status(200).json({
            status: "success",
            data,
        });
    });

// reusable function for find all collections in document
exports.findAll = (Model) =>
    catchAsync(async (req, res, next) => {
        const data = await Model.find();
        res.status(200).json({
            status: "success",
            data,
        });
    });
// resuable function get one document by id
exports.findOneByid = (Model) =>
    catchAsync(async (req, res, next) => {
        const data = await Model.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data,
        });
    });
