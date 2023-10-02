import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import SequelizeUser from '../database/models/UserModel'

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

const userMock = [{
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}]

describe('Testa a rota user', () => {

  it('Retorna uma chave token se o login é feito com sucesso', async function() {
    const requisicaoValida = {
      email: 'admin@admin.com',
      password: 'secret_admin'
    }
    sinon.stub(SequelizeUser, 'findAll').resolves(userMock as any);

    const { status, body } = await chai.request(app).post('/login').send(requisicaoValida);

    expect(status).to.equal(200);
    expect(body).to.have.property('token');
  });

  it('Retorna erro se envia requisição sem email ou senha', async function() {

    const requisicaoSemSenha = { email: 'user@user.com', password: ''};

    const { status, body } = await chai.request(app).post('/login').send(requisicaoSemSenha);
    
    expect(status).to.equal(400);
    expect(body.message).to.equal('All fields must be filled');
  });

  it('Retorna erro se email ou senha estão errados', async function() {
    
    const requisicaoInvalida = { email: 'user@user.com', password: '123456'};

    const { status, body } = await chai.request(app).post('/login').send(requisicaoInvalida);

    expect(status).to.equal(401);
    expect(body.message).to.equal('Invalid email or password');
  });
  afterEach(sinon.restore);

});