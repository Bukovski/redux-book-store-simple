export default class BookstoreAPIFake {
  data = [
    {
      "title": "AI Blueprints",
      "subtitle": "How to build and deploy AI business projects",
      "isbn13": "9781788992879",
      "price": "$31.99",
      "image": "https://itbook.store/img/books/9781788992879.png",
      "url": "https://itbook.store/books/9781788992879"
    },
    {
      "title": "Data Analysis with Python",
      "subtitle": "A Modern Approach",
      "isbn13": "9781789950069",
      "price": "$31.99",
      "image": "https://itbook.store/img/books/9781789950069.png",
      "url": "https://itbook.store/books/9781789950069"
    },
    {
      "title": "Build Reactive Websites with RxJS",
      "subtitle": "Master Observables and Wrangle Events",
      "isbn13": "9781680502954",
      "price": "$28.98",
      "image": "https://itbook.store/img/books/9781680502954.png",
      "url": "https://itbook.store/books/9781680502954"
    },
    {
      "title": "Forge Your Future with Open Source",
      "subtitle": "Build Your Skills. Build Your Network. Build the Future of Technology",
      "isbn13": "9781680503012",
      "price": "$26.18",
      "image": "https://itbook.store/img/books/9781680503012.png",
      "url": "https://itbook.store/books/9781680503012"
    },
    {
      "title": "Xcode Treasures",
      "subtitle": "Master the Tools to Design, Build, and Distribute Great Apps",
      "isbn13": "9781680505863",
      "price": "$22.03",
      "image": "https://itbook.store/img/books/9781680505863.png",
      "url": "https://itbook.store/books/9781680505863"
    },
    {
      "title": "Learning C++ by Building Games with Unreal Engine 4, 2nd Edition",
      "subtitle": "A beginner's guide to learning 3D game development with C++ and UE4",
      "isbn13": "9781788476249",
      "price": "$44.99",
      "image": "https://itbook.store/img/books/9781788476249.png",
      "url": "https://itbook.store/books/9781788476249"
    },
    {
      "title": "Apache Kafka Quick Start Guide",
      "subtitle": "Leverage Apache Kafka 2.0 to simplify real-time data processing for distributed applications",
      "isbn13": "9781788997829",
      "price": "$23.99",
      "image": "https://itbook.store/img/books/9781788997829.png",
      "url": "https://itbook.store/books/9781788997829"
    },
    {
      "title": "Hands-On Dark Web Analysis",
      "subtitle": "Learn what goes on in the Dark Web, and how to work with it",
      "isbn13": "9781789133363",
      "price": "$29.99",
      "image": "https://itbook.store/img/books/9781789133363.png",
      "url": "https://itbook.store/books/9781789133363"
    },
    {
      "title": "CentOS Quick Start Guide",
      "subtitle": "Get up and running with CentOS server administration",
      "isbn13": "9781789344875",
      "price": "$31.99",
      "image": "https://itbook.store/img/books/9781789344875.png",
      "url": "https://itbook.store/books/9781789344875"
    },
    {
      "title": "Machine Learning with Apache Spark Quick Start Guide",
      "subtitle": "Uncover patterns, derive actionable insights, and learn from big data using MLlib",
      "isbn13": "9781789346565",
      "price": "$29.99",
      "image": "https://itbook.store/img/books/9781789346565.png",
      "url": "https://itbook.store/books/9781789346565"
    }
  ];
  
  getBooks() {
    /*return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 1000);
    });
    */
    return this.data;
  }
}