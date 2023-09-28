// import { Model, QueryInterface, DataTypes } from 'sequelize';
// import { IMatches } from '../../Interfaces/Matches'

// export default {
//   up(queryInterface: QueryInterface) {
//     return queryInterface.createTable<Model<IUsers>>('users', {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       homeTeamId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//       },
//       homeTeamGoals: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       awayTeamId: {
//         allowNull: false,
//         type: DataTypes.DECIMAL(10, 2),
//       },
//       awayTeamGoals: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       inProgress: {
//         allowNull: false,
//         type: DataTypes.INTEGER,
//       },
//     });
//   },

//   down(queryInterface: QueryInterface) {
//     return queryInterface.dropTable('matches');
//   },
// };