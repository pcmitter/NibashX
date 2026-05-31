const express=require('express');
const fs=require('fs');

const router=express.Router();

router.post('/add',function(req,res)
{
    const bookings=JSON.parse(
    fs.readFileSync('data/bookings.json'));

    bookings.push(req.body);

    fs.writeFileSync(
    'data/bookings.json',
    JSON.stringify(bookings,null,2)
    );

    res.json({
        message:'Booking Saved'
    });
});

router.get('/all',function(req,res)
{
    const bookings=JSON.parse(
    fs.readFileSync('data/bookings.json'));

    res.json(bookings);
});

module.exports=router;