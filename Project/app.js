
new Vue({
  el: '#app',
  data: {
    initial: true,
    perdeu: false,
    ganhou: false,
    widthMonstro: '100%',
    widthLife: '100%',
    lifeMonstro: 100,
    myLife: 100,
    corLife: 'green',
    corMonstro: 'green',
    tabelas: [],
  },
  watch:{
    myLife(novo, _antigo) {
      if (novo === 0) {
        this.perdeu = true
        this.initial = true
      } else { }
    },
    lifeMonstro(novo, _antigo) {
      if (novo === 0) {
        this.ganhou = true
        this.initial = true
      } else { }
    },
  },
  methods: {
    attack() {
      let monstro = this.lifeMonstro
      let my = this.myLife
      const atack = Math.floor(Math.random() * (10 -5 +1)) + 5
      const monsterAtack = Math.floor(Math.random() * (15 - 8 +1)) + 8
      this.widthMonstro = `${(monstro - atack) < 0 ? 0 : (monstro - atack)}%`
      this.lifeMonstro = (monstro - atack) < 0 ? 0 : (monstro - atack)
      if (this.lifeMonstro > 0){
        this.widthLife = `${(my - monsterAtack) < 0 ? 0 : (my - monsterAtack)}%`
        this.myLife = (my - monsterAtack) < 0 ? 0 : (my - atack)
        this.tabelas.unshift({message: `MONSTRO ATINGIU JOGADOR COM ${monsterAtack}`, class: 'monstro'})
        this.tabelas.unshift({message: `JOGADOR ATINGIU MONSTRO COM ${atack}`, class: 'player'})
      }
    },
    attackEspecial() {
      let monstro = this.lifeMonstro
      let my = this.myLife
      const atack = Math.floor(Math.random() * (20 - 13 +1)) + 13
      const monsterAtack = Math.floor(Math.random() * (13 - 8 +1)) + 8
      this.widthMonstro = `${(monstro - atack) < 0 ? 0 : (monstro - atack)}%`
      this.lifeMonstro = (monstro - atack) < 0 ? 0 : (monstro - atack)
      if (this.lifeMonstro > 0) {
        this.widthLife = `${(my - monsterAtack) < 0 ? 0 : (my - monsterAtack)}%`
        this.myLife = (my - monsterAtack) < 0 ? 0 : (my - monsterAtack)
        this.tabelas.unshift({message: `MONSTRO ATINGIU JOGADOR COM ${monsterAtack}`, class: 'monstro'})
        this.tabelas.unshift({message: `JOGADOR ATINGIU MONSTRO COM ${atack}`, class: 'player'})
      }
    },
    curar() {
      const cura = Math.floor(Math.random() * (15 -8 +1)) + 8
      const monsterAtack = Math.floor(Math.random() * (13 - 8 +1)) + 8
      const result = (cura - monsterAtack) < 0 ? 0 : (cura - monsterAtack)
      this.myLife = Math.min(this.myLife + result, 100)
      this.widthLife = `${this.myLife}%`
      this.tabelas.unshift({message: `MONSTRO ATINGIU JOGADOR COM ${monsterAtack}`, class: 'monstro'})
      this.tabelas.unshift({message: `JOGADOR GANHOU FORÇA DE ${cura}`, class: 'player'})

      if (this.myLife >= 20) {
        this.corLife = 'green'
      } else { this.corLife = 'red'}
    },
    resetar() {
      this.myLife = 100
      this.lifeMonstro = 100
      this.widthLife = '100%'
      this.widthMonstro = '100%'
      this.initial = false
      this.perdeu = false
      this.ganhou = false
      this.tabelas = []
    }
  }
})
