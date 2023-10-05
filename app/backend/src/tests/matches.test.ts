import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import SequelizeMatches from '../database/models/MatchesModel'

import { app } from '../app';
import validateToken from '../middlewares/validateToken';

chai.use(chaiHttp);

const { expect } = chai;

const matchesMock2 = [
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Internacional"
    }
  },
  {
    id: 42,
    homeTeamId: 6,
    homeTeamGoals: 1,
    awayTeamId: 1,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: "Ferroviária"
    },
    awayTeam: {
      teamName: "Avaí/Kindermann"
    }
  }
]

const matchesMock1 = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Grêmio"
    }
  },
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Internacional"
    }
  }
]

describe('Testa a rota match', () => {
  sinon.stub(validateToken, 'validateToken').callsFake(() => {
    return;
  });

  it('Retorna uma lista de partidas', async function() {

    sinon.stub(SequelizeMatches, 'findAll').resolves(matchesMock1 as any);

    const { status, body } = await chai.request(app).get('/matches');

    expect(status).to.equal(200);
    expect(body).to.be.deep.equal(matchesMock1);
  });

  it('Filtra somente partidas em andamento ou somente partidas finalizadas', async function() {

    sinon.stub(SequelizeMatches, 'findAll').resolves(matchesMock2 as any);

    const { status, body } = await chai.request(app).get('/matches?inProgress=true');

    expect(status).to.equal(200);
    expect(body).to.be.deep.equal(matchesMock2);
  });

  // it('Altera placar das partidas e retorna numero de affected rows', async function() {
    
  //   const requisicaoValida = {
  //     homeTeamGoals: 3,
  //     awayTeamGoals: 1
  //   };

  //   const { status, body } = await chai.request(app).patch('/matches/:id').send(requisicaoValida);

  //   expect(status).to.equal(200);
  //   expect(body).to.be.equal(1);
  // });

  // it('Finaliza placar de partidas', async function() {

  //   const { status, body } = await chai.request(app).patch('/matches/:id/finish');

  //   expect(status).to.equal(200);
  //   expect(body.message).to.be.equal('Finished');
  // });

  afterEach(sinon.restore);

});


