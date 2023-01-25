const getNode = str => document.querySelector(str);

const data = [
  {
    name: 'John Doe',
    age: 32,
    lookingFor: 'male',
    location: 'Milan',
    img: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'Marie Smith',
    age: 27,
    lookingFor: 'female',
    location: 'Milan',
    img: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'William Johnson',
    age: 35,
    lookingFor: 'famale',
    location: 'Milan',
    img: 'https://randomuser.me/api/portraits/men/83.jpg',
  },
];

const getProfile = iterator(data);

const setProfile = () => {
  let p = getProfile.next().value;
  if(p) {
    getNode('#profileDisplay').innerHTML = 
      `<img class="mb-3" src="${p.img}" alt="${p.name}">
      <ul class="list-group">
        <li class="list-group-item">Name: ${p.name}</li>
        <li class="list-group-item">Age: ${p.age}</li>
        <li class="list-group-item">Looking for: ${p.lookingFor}</li>
        <li class="list-group-item">Location: ${p.location}</li>
      </ul>`;
  }else{
    location.reload()
  }
};

setProfile();
getNode('#next').addEventListener('click', () => setProfile());

// iterator
function iterator(ar) {
  let i = 0;
  return {
    next: () =>
      i < ar.length ? { value: ar[i++], done: false } : { done: true },
  };
}
