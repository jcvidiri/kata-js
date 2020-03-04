import {expect} from 'chai'
import {describe, it} from 'mocha'
import {helloWorld} from '../src/index'

describe('HELLO WORLD test', () => {
  it('Should print and return hello world. Expect ok.', async () => {
    const response = await helloWorld()

    expect(response).to.be.an('string')
    expect(response).to.be.equal('HELLO WORLD')
  })
})
