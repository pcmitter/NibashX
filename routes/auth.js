const express=require('express');
const fs=require('fs');

const router=express.Router();

router.post('/register',function(req,res)
{
    const users=JSON.parse(
    fs.readFileSync('data/users.json'));

    users.push(req.body);

    fs.writeFileSync(
    'data/users.json',
    JSON.stringify(users,null,2)
    );

    res.json({message:'Registered'});
});

router.post('/login',function(req,res)
{
    const users=JSON.parse(
    fs.readFileSync('data/users.json'));

    const user=users.find(function(u)
    {
        return u.email===req.body.email &&
        u.password===req.body.password;
    });

    if(user)
    {
        res.json({
            success:true,
            user:user
        });
    }

    else
    {
        res.json({
            success:false
        });
    }
});

module.exports=router;