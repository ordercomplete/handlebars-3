const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    user: {
      name: 'Іван',
      email: 'ivan@example.com',
      phone: '123-456-7890',
      balance: 0,
    },
  })
})

// router.get('/', function (req, res) {
//   res.render('index', {
//     product: {
//       name: 'Корм для риб',
//       cost: 72.5,
//       img: 'fish.png',
//       isAvailable: false,
//     },
//   })
// })

// router.get('/', function (req, res) {
//   res.render('index', {
//     product: {
//       name: 'Корм для риб',
//       cost: 72.5,
//       img: 'fish.png',
//       isAvailable: true,
//     },
//   })
// })

// router.get('/', function (req, res) {
//   res.render('index', {
//     product: {
//       name: 'Корм для риб',
//       cost: 72.5,
//       img: 'fish.png',
//       isAvailable: true,
//     },
//   })
// })

// router.get('/', function (req, res) {
//   res.render('index', {
//     user: {
//       name: 'Іван',
//       email: 'ivan@example.com',
//       phone: '123-456-7890',
//     },
//   })
// })

// router.get('/', function (req, res) {
//   res.render('index', {
//     product: {
//       name: 'Корм для риб',
//       cost: 72.5,
//       img: 'fish.png',
//     },
//   })
// })

// router.get('/users', function (req, res) {
//   res.render('user-list', {
//     layout: 'header',
//     title: 'User list page',
//     // text: 'Click me',

//     data: {
//       userlist: [
//         {
//           id: 5123,
//           name: `Ivan`,
//           isAdmin: true,
//           isConfirm: true,
//           balance: 100,
//         },
//         {
//           id: 6843,
//           name: `Dima`,
//           isAdmin: false,
//           isConfirm: false,
//           balance: 0,
//         },
//         {
//           id: 7745,
//           name: `Vasya`,
//           isAdmin: true,
//           isConfirm: true,
//           balance: null,
//         },
//       ],
//     },
//   })
// })

module.exports = router
