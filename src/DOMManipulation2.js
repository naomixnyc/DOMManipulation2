//import "DOMManipulation.css"

// - - - - - Part 1 - - - - - -
const mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
//mainEl.textContent='<h1>DOM Manipulation</h1>'
mainEl.classList.add('flex-ctr')
const selects = document.getElementsByName("selectBy")
console.log(selects)
//getElementsByTagName
//document.getElementsByTagName(body)


// - - - - - Part 2 - - - - - -
//Creating a Menu Bar

//const topMenuEl = document.querySelector('#top-menu')
const topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')


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
    //document.body.append(a)
  })



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//      ----- ALAB 316.3.1: DOM Manipulation (Part Two) ----
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// - - - - - Part 3 - - - - - -
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
  console.log(e.target.tagName)
  console.log(e.target.textContent)
  if (e.target.tagName !== "A") {   
    return
  }
  const topMenuLinks = document.querySelectorAll('#top-menu a') // NodeList //'#top-menu > a' > necessary?
console.log(topMenuLinks)

  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active')
    return
  }

  
  console.log(e, e.target)
  //topMenuLinks.classList.toggle('active')
  // topMenuLinks.forEach(link => link.classList.remove('active'))
  //console.log(e.target.value.toLowerCase())
  // e.target.classList.toggle('active')

  topMenuLinks.forEach(link => link.classList.remove('active'))

  e.target.classList.add('active')
})




