import mongoose from 'mongoose'

const RefrigeratorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, userList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }], foodList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }], pastImage: {
        type: String,
        required: false
    }, currentImage: {
        type: String,
        required: false
    }
});

const RefrigeratorModel = mongoose.model('Refrigerator', RefrigeratorSchema);

export default RefrigeratorModel;