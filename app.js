const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const contactsRouter = require('./routes/api/contacts');
const authRouter = require('./routes/api/auth');

const app = express();
app.set('json spaces', 4);
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/contacts', contactsRouter);
app.use('/api/users', authRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' }); // мідлвара яка спрацьовує якщо неправильний роут
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err; // функція обробник помилок
  res.status(status).json({ message });
});

module.exports = app;
