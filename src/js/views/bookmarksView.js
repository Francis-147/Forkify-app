import View from "./view";
import previewView from "./previewView";
import icons from "../../img/icons.svg";

class BookmarksView extends View {
  _parentEl = document.querySelector(".bookmarks__list");
  _errorMessage = "No bookmarks yet. find a nice recipe and bookmark it";
  _message = "";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }

  // _generateMarkup() {
  //   return this._data.map(this._generateMarkupPreview).join("");
  // }

  // _generateMarkupPreview(result) {
  //   const id = window.location.hash.slice(1);
  //   return `
  //   <li class="preview">
  //       <a class="preview__link ${
  //         result.id === id ? "preview__link--acive" : ""
  //       }" href="#${result.id}">
  //           <figure class="preview__fig">
  //           <img src="${result.image}" alt="${result.title}" />
  //           </figure>
  //           <div class="preview__data">
  //           <h4 class="preview__title">${result.title}</h4>
  //           <p class="preview__publisher">${result.publisher}</p>
  //           </div>
  //       </a>
  //   </li>
  //   `;
  // }
}

export default new BookmarksView();
