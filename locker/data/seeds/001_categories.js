
exports.seed = async function (knex, Promise) {

  return knex
    .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("users").insert([
        {
          name: 'Planning'
        },
        {
          name: 'Daily'
        },
        {
          name: 'Monthly'
        },
        {
          name: 'Custom'
        }

      ]);
    });
};
