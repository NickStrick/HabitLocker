
exports.seed = async function (knex, Promise) {

  return knex
    .raw("TRUNCATE TABLE categories RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("categories").insert([
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
