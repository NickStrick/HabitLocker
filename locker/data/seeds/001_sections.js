
exports.seed = async function (knex, Promise) {

  return knex
    .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("users").insert([
        {
          name: 'rocket leauge',
          category: 1
        },
        {
          name: 'carrer',
          category: 1
        },
        {
          name: 'personal',
          category: 1
        },
        {
          name: 'relationships',
          category: 1
        },
        {
          name: 'interrelations',
          category: 1
        },
        {
          name: 'foods',
          category: 1
        },
      ]);
    });
};

