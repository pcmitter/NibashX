const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

const authRoutes=require('./routes/auth');
const bookingRoutes=require('./routes/booking');

app.use('/auth',authRoutes);
app.use('/booking',bookingRoutes);

app.listen(3000,function()
{
    console.log('Server Running On Port 3000');
});