import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCList} from '@material/list';

window.addEventListener('load', (event) => {
  // const button = document.querySelector('.foo-button');
  // console.log("button", button);
  // const ripple = new MDCRipple(button);
  // console.log("ripple", ripple);

// Instantiation
  const topAppBarElement = document.querySelector('.mdc-top-app-bar');
  const topAppBar = new MDCTopAppBar(topAppBarElement);
  const list = new MDCList(document.querySelector('.mdc-list'));
  const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
});

