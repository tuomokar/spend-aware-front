import AltInstance from '../alt';
import PageActions from 'actions/PageActions';

/**
 * Knows which page is the current page.
 */
class PageStore {

    constructor() {
        this.page = 'register';
        this.bindListeners({
            setPage: PageActions.SET_PAGE
        });
    }

    setPage(page = '') {
        this.page = page;
    }

}

export default AltInstance.createStore(PageStore, 'PageStore');
