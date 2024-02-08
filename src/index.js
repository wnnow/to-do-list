import "./style.css";
import { renderProjectNavbar } from "./modules/project.js";
import { addEventListenerCloseTaskDetailBtn } from "./modules/taskDetailPopup.js";
import GitHubLogo from "./images/github-mark.svg";
renderProjectNavbar();
addEventListenerCloseTaskDetailBtn();
function addFooterLogo() {
  const footerLink = document.querySelector(".footer-link");
  const logoImg = document.createElement("img");
  const gitHubLogo = new Image();
  gitHubLogo.src = GitHubLogo;
  gitHubLogo.classList.add("footer-github-logo");
  footerLink.appendChild(gitHubLogo);
}
addFooterLogo();
