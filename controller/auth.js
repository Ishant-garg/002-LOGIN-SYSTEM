const User = require('../model/user')

const signupController = async (req ,res) => {
    console.log('signupController called');

    const email = req.body?.email;
    const password = req.body?.password;

    if(!email || !password){
        res.status(403).send('email or password is required')
        return;
    }
    // const id = Math.floor(Math.random()*1000)
    //check if user already exist
    const user = await User.findOne({email});
    if(user){
        res.send('user already exists') 
        return;
    }
    
    const newUser = new User({email , password })
    await  newUser.save();
    console.log(newUser)
    res.status(200).json(newUser)
}

const loginController = async (req ,res) => {
    console.log('loginController called');

    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        res.status(403).send('email or password is required')
        return
    }
    
    const user = await User.findOne({email});

    //is user exist or not
    if(!user){
        res.status(404).send('user not found');
        return;
    }
    //is password is matching or not
    if(password != user.password){
        res.status(401).send("incorrect password entered");
        return
    }

    res.status(200).json({
        email : user.email
    }
    )

}

const getUserById = async (req , res) =>{
    const id = req.params.id;

    if(!id){
        req.send('no user exists with this id');
        return;
    }
    
    const user = await User.findById(id);
    console.log(id , user)
    if(!user) res.send("user not exist for this id")
   else res.status(200).json(user);
    console.log(user)
 }


module.exports ={
    signupController,
    loginController,
    getUserById
}


 