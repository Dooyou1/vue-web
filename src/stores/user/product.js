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
      imageUrl: 'https://images.pexels.com/photos/6358514/pexels-photo-6358514.jpeg',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 1000000000,
     },

     { 
      name: '11',
      imageUrl: 'https://images.pexels.com/photos/6358515/pexels-photo-6358515.jpeg',
      quantity: 10,
      about: 'testd',
      status: 'open',
      price: 999999999,
     },
    
     { 
      name: 'tesDddt',
      imageUrl: 'https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 999999999,
     }],
    loaded: false
  }),

  actions: {
    filterProducts(searchText) {
      return this.list.filter(product => product.name.includes(searchText));
    }
  }
})