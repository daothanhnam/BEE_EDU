const kimlien = document.querySelector('.one')
const kimlien1 = document.querySelector('.two')
const kimlien2 = document.querySelector('.three')


const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value == 'kimlien') {
        kimlien.style.flexFlow = 'column-reverse'
        kimlien1.style.flexFlow = 'column-reverse'
        kimlien2.style.flexFlow = 'column-reverse'

    } else {
        kimlien.style.flexFlow = 'column'
        kimlien1.style.flexFlow = 'column'
        kimlien2.style.flexFlow = 'column'
    }
}