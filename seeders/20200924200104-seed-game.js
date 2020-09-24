'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Games', [
     {
      name: 'Klonoa : Door to Phantomile',
      img: 'https://upload.wikimedia.org/wikipedia/en/2/25/Klonoa_playstation_front.jpg',
      trailer: 'https://youtu.be/h8PsLF8vnzU',
      genre: 'Adventure',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Fatal Frame 1',
      img: 'https://m.media-amazon.com/images/M/MV5BMjE5OTk2NDk3NF5BMl5BanBnXkFtZTcwNzQ0NzAzOA@@._V1_.jpg',
      trailer: 'https://youtu.be/BTEEsY8lMx0',
      genre: 'Horror',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Fatal Frame 2',
      img: 'https://i.ytimg.com/vi/NykGQU0KPZY/maxresdefault.jpg',
      trailer: 'https://youtu.be/InlLodkXRzA',
      genre: 'Horror',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Mana Khemia',
      img: 'https://upload.wikimedia.org/wikipedia/en/7/74/Mana_Khemia_Cover.jpg',
      trailer: 'https://youtu.be/5ZDljXdfXII',
      genre: 'Fantasy',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Harvest Moon : A Wonderful Life',
      img: 'https://sobatgame.com/wp-content/uploads/2019/08/Harvest-Moon-A-Wonderful-Life-1.jpg',
      trailer: 'https://youtu.be/AnUeyEjQtUo',
      genre: 'Casual',
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ], {});
  
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  }
};
