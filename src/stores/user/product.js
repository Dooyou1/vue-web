import { defineStore } from 'pinia'

export const useProductStore = defineStore('user-product', {
  state: () => ({
    list: [{
      name: 'test',
      imageUrl: 'https://media1.tenor.com/m/ywcfqDiEokgAAAAd/pepe-smart-pepe-watch.gif',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 100,
    },

     { 
      name: 'teasDt',
      imageUrl: 'https://media1.tenor.com/m/71rFa0hBgU4AAAAd/pepe-cheers-wink-pepe.gif',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 100,
     },

     { 
      name: '11',
      imageUrl: 'https://media1.tenor.com/m/b2bcKSeqpnwAAAAC/nerd-pepe-the-frog.gif',
      quantity: 10,
      about: 'testd',
      status: 'open',
      price: 100,
     },
    
     { 
      name: 'tesDddt',
      imageUrl: 'https://media1.tenor.com/m/1GsOX1uKTcAAAAAC/pepe-the-frog-pepe-frog.gif',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 100,
     }],
    loaded: false
  }),

  actions: {
    filterProducts(searchText) {
      return this.list.filter(product => product.name.includes(searchText));
    }
  }
})