import searchCtrl from './controllers/search';

const controllers = [
  searchCtrl
];

const app = window.app;

controllers.forEach(ctrl => ctrl(app));
