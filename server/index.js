const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const FakeDb = require('./fake-db');
const bodyParser = require('body-parser');
const path = require('path');
const rentalRoutes = require('./routes/rentals');
const userRoutes = require('./routes/users');
const bookingRoutes = require('./routes/bookings');
const imageUploadRoutes = require('./routes/image-upload');
const paymentRoutes = require('./routes/payments');



mongoose.connect(config.DB_URI, {useCreateIndex: true, useNewUrlParser: true }).then(() => {
  if(process.env.NODE_ENV !== 'production') {
    const fakeDb = new FakeDb();
    //fakeDb.seedDb();
  }
});

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1', imageUploadRoutes);
//app.use('/uploads', express.static('uploads'));
if(process.env.NODE_ENV === 'production'){
  const appPath = path.join(__dirname, '..', 'dist/bwm-ng');
  app.use(express.static(appPath));

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 3001

app.listen(PORT, function () {
  console.log('Working!');
})
