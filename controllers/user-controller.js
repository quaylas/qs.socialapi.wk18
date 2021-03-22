const { User, Thought } = require('../models');

const userController = {
    // get all users
    getAllUser(req,res) {
        User.find({})
        .populate({
                path: 'thoughts',
                select: '_id'
            })
        .populate({
            path: 'friends',
            select: '_id'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
                path: 'thoughts',
                select: '_id'
            })
        .populate({
            path: 'friends',
            select: '_id'
        })
        .select('-__v')
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with that id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // create user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            if(err.name === 'MongoError' && err.code === 11000 && err.keyPattern.username) {
                // duplicate username
                res.status(422).json({ message: 'That username already exists!', err });
                return;
            }
            else if(err.name === 'MongoError' && err.code === 11000 && err.keyPattern.email){
                // duplicate email
                res.status(422).json({ message: 'That email already exists!', err });
                return;
            }
            res.status(400).json(err);
        });
    }, 

    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with that id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    }, 

    // add friend
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId }, 
            { $push: { friends: params.friendId }},
            { new: true, runValidators: true}
        )
        .then(dbUserData => {
            if(!dbUserData) {
                res.json(404).json({ message: 'No user found with that id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    // remove friend
    removeFriend({ params }, res){
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
        .then(dbUserData =>{
            if(!dbUserData){
                res.status(404).json({ message: 'No  user found with that id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    // delete user by id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(deletedUser => {
            if(!deletedUser){
                res.status(404).json({ messaage: 'No user found with that id!'});
                return;
            }
            if(deletedUser.thoughts.length)
            {return Thought.deleteMany(
                { username: deletedUser.username }, 
            )};
        })
        .then(deletedThoughts => {
            res.json(deletedThoughts);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
};

module.exports = userController;