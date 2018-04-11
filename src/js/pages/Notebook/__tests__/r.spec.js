import { set, select, error, loading } from '../redux/r'

describe('books reducer', () => {
  it('first redux test', () => {
    expect(2).toEqual(2)
  })

  it('Add new book: ', () => {
    const items = [
      {
        id: 1,
        userId: 1,
        name: 'Program',
        public: true,
        user: {
          id: 1,
          avatar: 'https://a.ppy.sh/369435_1325681849.jpg',
          name: 'Cthulhu Fhtagn',
          address: { country: 'Pacific Ocean', city: 'R’lyeh' },
          login: 'cthulhu',
        },
      },
      {
        id: 3,
        userId: 1,
        name: 'calculate Paradigm',
        public: true,
        user: {
          id: 1,
          avatar: 'https://a.ppy.sh/369435_1325681849.jpg',
          name: 'Cthulhu Fhtagn',
          address: { country: 'Pacific Ocean', city: 'R’lyeh' },
          login: 'cthulhu',
        },
      },
    ]
    const book = { userId: 1, public: true, name: 'new book', id: 64 }

    const state = set(items,
      { type: 'books/CREATE', payload: { userId: 1, public: true, name: 'new book', id: 64 } }
    )
    expect(state).toEqual(items.concat(book))
  })


  it('select book', () => {
    const id = 65;
    const state = select({selectedId:-1}, {type:'books/SELECT',id});
    expect(state).toEqual(id);
  })


  it('delete book', () => {
    const id = 65;
    const items = [{id:1,userId:1,name:'Program','public':true,user:{id:1,avatar:'https://a.ppy.sh/369435_1325681849.jpg',name:'Cthulhu Fhtagn',address:{country:'Pacific Ocean',city:'R’lyeh'},login:'cthulhu'}},{id:3,userId:1,name:'calculate Paradigm','public':true,user:{id:1,avatar:'https://a.ppy.sh/369435_1325681849.jpg',name:'Cthulhu Fhtagn',address:{country:'Pacific Ocean',city:'R’lyeh'},login:'cthulhu'}},{userId:1,'public':true,name:'new book',id:64},{userId:1,'public':true,name:'qwe',id:65}]
    const state = set(items, {type:'#book/DELETE',id});
    expect(state).toEqual(items.filter(i => i.id !== id));
  });
})
