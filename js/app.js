import Post from '../component/post.js';
import Group from '../component/group.js';
import Upload from '../modules/fileupload.js';
import Modal from '../modules/modal.js';
import Validation from '../modules/validation.js';
window.addEventListener("DOMContentLoaded", () => {
  Validation();
  Modal();
  Upload();
  Post();
  Group();
}); 









