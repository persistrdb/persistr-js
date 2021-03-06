class Model {
  constructor ({ domain }) {
    this.domain = domain
  }

  get api() {
    return this.account.api
  }

  get account() {
    return this.space.account
  }

  get space() {
    return this.domain.space
  }

  async define (spec) {
    await this.api.modelDomain({ space: this.space.name, domain: this.domain.name, spec })
  }

  async read({ accept }) {
    return this.api.readModel({ space: this.space.name, domain: this.domain.name, accept })
  }
}

module.exports = Model
