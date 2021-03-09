
import html from "html-literal";

export default links => html`
<nav>
<i class="fas fa-bars"></i>
  <ul class ="hidden--mobile nav-links">
  ${links
      .map(
        (link) => `<li><a href="/${link}" data-navigo>${link}</a></li>`
      )
      .join()}
    </ul>
  </nav>`;


// import html from "html-literal";

// export default (st) => html `
// <nav>
//   <i class="fas fa-bars"></i>
//   <ul class="hidden--mobile nav-links">
//   ${Links.reduce(
//     (template, link) => {
//     template + `<li><a href="/${link.title !== "Home" ? link.title : ""}
//     "title = "${link.title}" >${link.text}</a></li>`, ``
//   })};
//   </ul>
// </nav>
// `;

// <li><a href="#bio">Bio</a></li>
//<li><a href= "#gallery">Gallery</a></li>
//<li><a href="#register">Register</a></li>
