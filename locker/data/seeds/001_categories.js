
exports.seed = async function (knex, Promise) {

  return knex
    .raw("TRUNCATE TABLE categories RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("categories").insert([
        {
          name: 'Planning',
          user_id: 1
        },
        {
          name: 'Daily',
          user_id: 1
        },
        {
          name: 'Monthly',
          user_id: 1
        },
        {
          name: 'Custom',
          user_id: 1
        }

      ]);
    });
};
