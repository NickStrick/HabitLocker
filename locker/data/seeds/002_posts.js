
exports.seed = async function (knex, Promise) {

  return knex
    .raw("TRUNCATE TABLE posts RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("posts").insert([
        {
          title: 'rocket leauge',
          content: ' this is a paracgraph from a post about rocket leauge and ',
          section: 1
        },
        {
          title: 'rocket leauge',
          content: ' this is a paracgraph from a post about rocket leauge and ',
          section: 1
        },
        {
          title: 'rocket leauge',
          content: ' this is a paracgraph from a post about rocket leauge and ',
          section: 1
        },
        {
          title: 'rocket leauge',
          content: ' this is a paracgraph from a post about rocket leauge and ',
          section: 1
        },
        {
          title: 'rocket leauge',
          content: ' this is a paracgraph from a post about rocket leauge and ',
          section: 1
        }
      ]);
    });
};