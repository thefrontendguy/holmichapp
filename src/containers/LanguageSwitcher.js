import React, { Component } from 'react';

import { store } from '../redux/store';
import { language } from '../redux/actions';

export default class LanguageSwitcher extends Component {
    changeLanguage = (selectedLang) => {
        store.dispatch(language(selectedLang));
    }
    render() {
        var defaultLang = String(store.getState().lang.language);

        return (

            <select
                id="language-switcher"
                className='language-switcher'
                value={defaultLang}
                onChange={e => {
                    var selectedLang = e.target.value;
                    this.changeLanguage(selectedLang);
                }}>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </select>
        )
    }
}