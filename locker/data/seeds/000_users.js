
exports.seed = async function (knex, Promise) {

  return knex
    .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("users").insert([
        {
          username: 'Admin',
          password: '6969',
          email: 'strickerbro@gmail.com'
        }
      ]);
    });
};
