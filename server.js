const express = require("express");

const {
  sequelize,
  assertDatabaseConnectionOk,
} = require("./config/connection");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

async function init() {
  await assertDatabaseConnectionOk();

  await sequelize.sync({ force: false });

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

init();
