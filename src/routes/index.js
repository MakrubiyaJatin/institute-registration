const express = require('express');
const app = express();

const instituteRoutes = require('./instituteRoutes');
const schoolRoutes = require('./schoolRoutes');
const collegeRoutes = require('./collegeRoutes');
const examRoutes = require('./examRoutes');
const boardRoutes = require('./boardRoutes');
const registrationRoutes = require('./registrationRoutes');
const classCategoryRoutes = require('./classCategoryRoutes');

app.use('/registrations', registrationRoutes);
app.use('/institutes', instituteRoutes);
app.use('/schools', schoolRoutes);
app.use('/colleges', collegeRoutes);
app.use('/exams', examRoutes);
app.use('/boards', boardRoutes);
app.use('/class-categories', classCategoryRoutes);

module.exports = app;