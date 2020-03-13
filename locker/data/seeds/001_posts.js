
exports.seed = async function (knex, Promise) {

  return knex
    .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("users").insert([
        {
          title: 'rocket leauge',
          description: ' this is a paracgraph from a post about rocket leauge and ',
          section: 1
        },
        {
          title: 'rocket leauge',
          description: ' this is a paracgraph from a post about rocket leauge and ',
          section: 1
        },
        {
          title: 'rocket leauge',
          description: ' this is a paracgraph from a post about rocket leauge and ',
          section: 1
        },
        {
          title: 'rocket leauge',
          description: ' this is a paracgraph from a post about rocket leauge and ',
          section: 1
        },
        {
          title: 'rocket leauge',
          description: ' this is a paracgraph from a post about rocket leauge and ',
          section: 1
        }
      ]);
    });
};