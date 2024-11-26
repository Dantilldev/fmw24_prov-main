// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

async function getPhotos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();
  console.log(data);

  // get 10 pictures
  const only10Photos = data.slice(0, 10);

  only10Photos.forEach((photo) => {
    //create
    const imageContainer = document.createElement('div');
    const imageEl = document.createElement('img');

    //classname
    imageContainer.className = 'imageContainer';

    //atributes + style
    imageEl.src = photo.thumbnailUrl;
    imageEl.alt = photo.title;
    imageEl.style.cursor = 'pointer';

    //append
    imageContainer.appendChild(imageEl);
    document.body.appendChild(imageContainer);
  });

  // event
  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    image.addEventListener('click', () => {
      alert(image.alt);
    });
  });
}

getPhotos();
