//import "DOMManipulation.css"

// - - - - - Part 1 - - - - - -
const mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
//mainEl.textContent='<h1>DOM Manipulation</h1>'
mainEl.classList.add('flex-ctr')
//console.log(selects)
//getElementsByTagName
//document.getElementsByTagName(body)


// - - - - - Part 2 - - - - - -
//Creating a Menu Bar

//const topMenuEl = document.querySelector('#top-menu')
const topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')
//console.log(topMenuEl)

// - - - - - Part 3 - - - - - -
// Adding Menu Buttons

var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  menuLinks.forEach((link) => {
    const a = document.createElement('a')
    a.setAttribute('href', link.href)
    a.textContent = link.text // <-----
  
    topMenuEl.appendChild(a)
  })



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//      ----- ALAB 316.3.1: DOM Manipulation (Part Two) ----
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const subMenuEl = document.getElementById('sub-menu')
subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor='var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')



var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];



topMenuEl.addEventListener('click', (e) => { // adding addEventListener to the <nav> instead of each <a>
  e.preventDefault()
  //console.log(e.target.tagName)
  //console.log(e.target.textContent)

  if (e.target.tagName !== "A") {
    return
  }



  const topMenuLinks = document.querySelectorAll('#top-menu a') // NodeList //'#top-menu > a' > necessary?
  //console.log(topMenuLinks)

  const linkObject = menuLinks.find(link => link.text === e.target.textContent) // .find() handles the case where no match exists 
  //console.log(linkObject)

  e.target.classList.toggle('active')

  //topMenuLinks.forEach(link => link.classList.remove('active')) // remove from all
  topMenuLinks.forEach(link => {   //removes from all other than e.target
    if (link !== e.target) {
      link.classList.remove('active')
    }
  })


  if (linkObject && linkObject.subLinks) {
    if (e.target.classList.contains('active')) {
      subMenuEl.style.top = '100%'
      subMenuEl.innerHTML = ''
      linkObject.subLinks.forEach(link => {
        const a = document.createElement('a')
        a.href = link.href
        a.textContent = link.text
        subMenuEl.appendChild(a)
      })
    } else {
      subMenuEl.style.top = '0'
    }
  }


  subMenuEl.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.tagName !== "A") {
      return
    }
    //console.log(e.target.textContent)

    subMenuEl.style.top = '0'

    topMenuLinks.forEach(link => link.classList.remove('active'))

    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`
  })


})



