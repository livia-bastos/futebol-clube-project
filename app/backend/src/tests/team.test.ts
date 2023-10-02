import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import SequelizeTeam from '../database/models/TeamModel'

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota team', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });
  
const team = { id: 1, teamName: 'Galo', };

const teams = [team];

  it('Retorna todos os times', async function() {
    sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);

    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(teams);
  });

  it('Retorna um time pelo id', async function() {
    sinon.stub(SequelizeTeam, 'findByPk').resolves(team as any);

    const { status, body } = await chai.request(app).get('/teams/1');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(team);
  });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
