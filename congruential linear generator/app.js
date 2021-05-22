const Generator = {
  x0 : 6,
  module : 545,
  multiplicator : 454,
  incrementer : 2,
  CongruentialLinearGenerator(iterations){
    const theorem = (i, m, a, c) => (((Math.pow(a, i) * this.x0) + (c * Math.pow(a, i) - 1) / (a - 1)) % m )
    for(let i = 0 ; i < iterations ; i++ ){
      console.log(theorem(i, this.module , this.multiplicator, this.incrementer ));
    }
  },
  setSeed(seed){
    this.x0 = seed
  },
  setModule(module){
    this.module = module
  },
  setMultiplicator(multiplicator){
    this.multiplicator = multiplicator
  },
  setIncrementer(incrementer){
    this.incrementer = incrementer
  },
}

console.log('still in development, i need more resarching');
Generator.CongruentialLinearGenerator(5)