## Code Review Exercise

Write your code review here in markdown format.

### Issue 1 - Navbar

Currently, clicking on the navbar buttons only navigates to the specific section when clicking on the text in the button and not the whole button. This is a UX issue where users will think the site is not being responsive, especially so when the button changes colors on hover. To fix this, we should make the whole button navigate on click. One solution involves removing the unordered list and creating a div to store the links directly and adjust their classes.

Initial Code:

```html
<nav class="navbar large-screen-navbar">
  <ul class="nav-list">
    <li class="nav-list-item">
      <a href="#Introduction" class="nav-link hover-transition">Introduction</a>
    </li>
    <li class="nav-list-item">
      <a href="#History" class="nav-link hover-transition">History</a>
    </li>
    <li class="nav-list-item">
      <a href="#Characteristics" class="nav-link hover-transition"
        >Characteristics</a
      >
    </li>
    <li class="nav-list-item">
      <a href="#CatFacts" class="nav-link hover-transition">Cat Facts</a>
    </li>
    <li class="nav-list-item">
      <a href="#RequestInfo" class="nav-link hover-transition">Request Info</a>
    </li>
  </ul>
</nav>
```

```html
<div
  id="small-screen-navbar-element-container"
  class="small-screen-navbar-element-container"
>
  <ul class="nav-list">
    <li class="nav-list-item">
      <a href="#Introduction" class="nav-link hover-transition">Introduction</a>
    </li>
    <li class="nav-list-item">
      <a href="#History" class="nav-link hover-transition">History</a>
    </li>
    <li class="nav-list-item">
      <a href="#Characteristics" class="nav-link hover-transition"
        >Characteristics</a
      >
    </li>
    <li class="nav-list-item">
      <a href="#CatFacts" class="nav-link hover-transition">Cat Facts</a>
    </li>
    <li class="nav-list-item">
      <a href="#RequestInfo" class="nav-link hover-transition">Request Info</a>
    </li>
  </ul>
</div>
```

Updated Code:

```html
<nav class="navbar large-screen-navbar">
  <div class="nav-list">
    <a href="#Introduction" class="nav-link hover-transition nav-list-item"
      >Introduction</a
    >
    <a href="#History" class="nav-link hover-transition nav-list-item"
      >History</a
    >
    <a href="#Characteristics" class="nav-link hover-transition nav-list-item"
      >Characteristics</a
    >
    <a href="#CatFacts" class="nav-link hover-transition nav-list-item"
      >Cat Facts</a
    >
    <a href="#RequestInfo" class="nav-link hover-transition nav-list-item"
      >Request Info</a
    >
  </div>
</nav>
```

```html
<div
  id="small-screen-navbar-element-container"
  class="small-screen-navbar-element-container"
>
  <div class="nav-list">
    <a href="#Introduction" class="nav-link hover-transition nav-list-item"
      >Introduction</a
    >
    <a href="#History" class="nav-link hover-transition nav-list-item"
      >History</a
    >
    <a href="#Characteristics" class="nav-link hover-transition nav-list-item"
      >Characteristics</a
    >
    <a href="#CatFacts" class="nav-link hover-transition nav-list-item"
      >Cat Facts</a
    >
    <a href="#RequestInfo" class="nav-link hover-transition nav-list-item"
      >Request Info</a
    >
  </div>
</div>
```

### Issue 2 - Buggy/Inconsistent fact fetching

Currently, the cat facts load whenever the site is loaded for the first time (such as from a refresh). This seems to go against the existing wording of the button, where new facts are supposed to be loaded when the button is pressed. Also, when the button is pressed, no facts load and no loader gif loads due to improper code. A solution is to remove the automatic call to fetchCatFacts in the script file, and to ensure that the loading container is properly returned when called in the fetchCatFacts function. The visual aspects are handled with an if-case detecting if we have appended a loader gif already, and unhiding the class if we have.

Initial code:

```js
const createLoadingContainer = function () {
  const loadingContainer = document.querySelector('.loading-container');
  const loader = document.createElement('img');
  loader.src = '../../images/loader.gif';
  loader.alt = 'loader gif while the data loads';
  loader.width = 60;
  loader.height = 60;
  loadingContainer.append(loader);
};

...

  } finally {
    const loading = document.querySelector(".loading-container");
    loading.setAttribute("class", "display-none");
  }
};
fetchCatFacts();
...
```

Updated code:

```js
const createLoadingContainer = function () {
  const loadingContainer = document.querySelector(".loading-container");

    //check for the existance of children in the object, if there are none it means there are no images so create one
  if (!loadingContainer.innerHTML) {
    const loader = document.createElement("img");
    loader.src = "../../images/loader.gif";
    loader.alt = "loader gif while the data loads";
    loader.width = 60;
    loader.height = 60;
    loadingContainer.append(loader);
  } else {
    //if there is an image, we have inserted it before and it is hidden by fetchCatFacts, so remove the display-none tag
    loadingContainer.setAttribute("class", "loading-container");
  }
  return loadingContainer; //return the object properly
};

...
  } finally {
    const loading = document.querySelector(".loading-container");
    loading.setAttribute("class", "display-none loading-container"); //do not remove the loading-container attribute from the class
  }
};
//fetchCatFacts() // comment out the call to fetchCatFacts so it is not shown on page load
...
```
